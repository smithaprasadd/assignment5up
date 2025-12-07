import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMovies } from "../context/moviesContext";
import Notify from "../components/Notify";

const EditMovie = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { movies, updateMovie } = useMovies();

  const existing = movies.find((m) => m.id == id);
  const [movie, setMovie] = useState(existing);
  const [msg, setMsg] = useState("");

  const submit = (e) => {
    e.preventDefault();

    updateMovie(movie);
    setMsg("Movie updated successfully!");

    setTimeout(() => nav("/movies"), 500);
  };

  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-xl w-96">
      {msg && <Notify type="success" message={msg} />}

      <h2 className="text-xl mb-4">Edit Movie</h2>

      <form onSubmit={submit} className="space-y-3">
        <input
          className="p-2 border w-full"
          value={movie.title}
          onChange={(e) => setMovie({ ...movie, title: e.target.value })}
        />

        <input
          className="p-2 border w-full"
          value={movie.genre}
          onChange={(e) => setMovie({ ...movie, genre: e.target.value })}
        />

        <input
          type="number"
          className="p-2 border w-full"
          value={movie.rating}
          onChange={(e) => setMovie({ ...movie, rating: e.target.value })}
        />

        <button className="bg-yellow-500 text-white px-4 py-2 rounded w-full">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditMovie;
