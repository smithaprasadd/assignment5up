import React, { useState } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Rahul", email: "rahul@gmail.com" },
    { id: 2, name: "Sara", email: "sara@gmail.com" },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addUser = () => {
    if (!name || !email) return;
    setUsers([...users, { id: Date.now(), name, email }]);
    setName("");
    setEmail("");
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-xl">

      <h2 className="text-xl mb-4 text-gray-700 dark:text-white">Manage Users</h2>

      {/* Add User */}
      <div className="flex gap-3 mb-6">
        <input
          className="p-2 border rounded"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="p-2 border rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={addUser} className="bg-blue-500 px-4 py-2 text-white rounded">Add</button>
      </div>

      {/* Table */}
      <table className="w-full">
        <thead>
          <tr className="bg-gray-300 dark:bg-gray-700">
            <th className="p-3">Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-b">
              <td className="p-2">{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button
                  onClick={() => deleteUser(u.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
};

export default UsersPage;
