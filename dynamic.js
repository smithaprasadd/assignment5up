import { useState } from "react";

export default function DynamicTable({ initialData }) {
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 5;

  const [editingIndex, setEditingIndex] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", email: "", tickets: 0 });

  // Filter data based on search
  const filteredData = data.filter(
    (row) =>
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.email.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const pageCount = Math.ceil(filteredData.length / rowsPerPage);
  const currentData = filteredData.slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage
  );

  // Handlers
  const handleDelete = (index) => {
    const updated = [...data];
    updated.splice(index, 1);
    setData(updated);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditForm({ ...data[index] });
  };

  const handleUpdate = () => {
    const updated = [...data];
    updated[editingIndex] = editForm;
    setData(updated);
    setEditingIndex(null);
  };

  const handleAdd = () => {
    setData([...data, { name: "", email: "", tickets: 0 }]);
    setEditingIndex(data.length);
    setEditForm({ name: "", email: "", tickets: 0 });
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search by name or email"
          className="border p-2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAdd}
        >
          Add Row
        </button>
      </div>

      <table className="min-w-full border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Tickets</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, index) => {
            const globalIndex = index + currentPage * rowsPerPage;
            return (
              <tr key={globalIndex} className="text-center">
                <td className="border px-4 py-2">
                  {editingIndex === globalIndex ? (
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) =>
                        setEditForm({ ...editForm, name: e.target.value })
                      }
                      className="border px-2"
                    />
                  ) : (
                    row.name
                  )}
                </td>
                <td className="border px-4 py-2">
                  {editingIndex === globalIndex ? (
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) =>
                        setEditForm({ ...editForm, email: e.target.value })
                      }
                      className="border px-2"
                    />
                  ) : (
                    row.email
                  )}
                </td>
                <td className="border px-4 py-2">
                  {editingIndex === globalIndex ? (
                    <input
                      type="number"
                      value={editForm.tickets}
                      onChange={(e) =>
                        setEditForm({ ...editForm, tickets: Number(e.target.value) })
                      }
                      className="border px-2"
                    />
                  ) : (
                    row.tickets
                  )}
                </td>
                <td className="border px-4 py-2 space-x-2">
                  {editingIndex === globalIndex ? (
                    <button
                      className="bg-green-500 text-white px-2 py-1 rounded"
                      onClick={handleUpdate}
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        className="bg-yellow-500 text-white px-2 py-1 rounded"
                        onClick={() => handleEdit(globalIndex)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded"
                        onClick={() => handleDelete(globalIndex)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          className="px-3 py-1 border rounded"
          disabled={currentPage === 0}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>
        {Array.from({ length: pageCount }).map((_, i) => (
          <button
            key={i}
            className={`px-3 py-1 border rounded ${currentPage === i ? "bg-gray-400" : ""}`}
            onClick={() => setCurrentPage(i)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="px-3 py-1 border rounded"
          disabled={currentPage === pageCount - 1}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
