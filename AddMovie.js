import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../context/moviesContext";
import Notify from "../components/Notify";

const AddMovie = () => {
  const { addMovie } = useMovies();
  const [movie, setMovie] = useState({ title: "", genre: "", rating: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!movie.title || !movie.genre || !movie.rating) {
      setError("All fields required");
      return;
    }

    addMovie(movie);
    setSuccess("Movie added successfully!");

    setTimeout(() => nav("/movies"), 500);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-xl w-96">
      {error && <Notify type="error" message={error} />}
      {success && <Notify type="success" message={success} />}

      <h2 className="text-xl mb-4">Add Movie</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="p-2 border w-full"
          placeholder="Title"
          value={movie.title}
          onChange={(e) => setMovie({ ...movie, title: e.target.value })}
        />

        <input
          className="p-2 border w-full"
          placeholder="Genre"
          value={movie.genre}
          onChange={(e) => setMovie({ ...movie, genre: e.target.value })}
        />

        <input
          type="number"
          className="p-2 border w-full"
          placeholder="Rating (1-5)"
          value={movie.rating}
          onChange={(e) => setMovie({ ...movie, rating: e.target.value })}
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
