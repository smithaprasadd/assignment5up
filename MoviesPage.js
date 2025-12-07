import React, { useState } from "react";
import { useMovies } from "../context/moviesContext";
import { Link } from "react-router-dom";

const MoviesPage = () => {
  const { movies } = useMovies();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  const rows = 5;

  const filtered = movies.filter(
    (m) =>
      m.title.toLowerCase().includes(search.toLowerCase()) ||
      m.genre.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / rows);
  const pageData = filtered.slice(page * rows, page * rows + rows);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-xl">
      <div className="flex justify-between mb-4">
        <input
          placeholder="Search by title/genre"
          className="border p-2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Link to="/movies/add">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Movie
          </button>
        </Link>
      </div>

      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-300 dark:bg-gray-700">
            <th className="p-2">Title</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {pageData.map((m) => (
            <tr key={m.id} className="border text-center">
              <td className="p-2">{m.title}</td>
              <td>{m.genre}</td>
              <td>{m.rating}</td>

              <td>
                <Link to={`/movies/edit/${m.id}`}>
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                    Edit
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4 gap-2">
        <button disabled={page === 0} onClick={() => setPage(page - 1)}>
          Prev
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`px-3 py-1 border rounded ${
              i === page ? "bg-gray-400" : ""
            }`}
            onClick={() => setPage(i)}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages - 1}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MoviesPage;
