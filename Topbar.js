import React from "react";
import { Sun, Moon } from "lucide-react";

const Topbar = ({ dark, setDark }) => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow">
      <h2 className="text-xl font-semibold text-gray-700 dark:text-white">
        Admin Dashboard
      </h2>

      <button
        onClick={() => setDark(!dark)}
        className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
      >
        {dark ? <Sun className="text-yellow-400" /> : <Moon />}
      </button>
    </div>
  );
};

export default Topbar;
