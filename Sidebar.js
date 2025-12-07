import React from "react";
import { Home,Table, Calendar, Users, Kanban } from "lucide-react";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-lg p-5 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-700 dark:text-white mb-8">
       
      </h1>

      <nav className="space-y-4 text-gray-600 dark:text-gray-300">

        <Link to="/" className="flex items-center gap-3 hover:text-blue-500">
          <Home /> Dashboard
        </Link>

        <Link to="/calendar" className="flex items-center gap-3 hover:text-blue-500">
          <Calendar /> Calendar
        </Link>

        <Link to="/kanban" className="flex items-center gap-3 hover:text-blue-500">
          <Kanban /> Kanban
        </Link>

        <Link to="/users" className="flex items-center gap-3 hover:text-blue-500">
          <Users /> Users
        </Link>
        <Link to="/tickets" className="flex items-center gap-3 hover:text-blue-500">
  <Table /> Tickets
</Link>
<Link to="/movies" className="flex items-center gap-3 hover:text-blue-500">
  🎬 Movies
</Link>


      </nav>
    </div>
  );
};

export default Sidebar;
