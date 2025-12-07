import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import CalendarPage from "./pages/CalendarPage";
import KanbanPage from "./pages/KanbanPage";
import UsersPage from "./pages/UsersPage";
import MoviesPage from "./pages/MoviesPage";
import AddMovie from "./pages/AddMovie";
import EditMovie from "./pages/EditMovie";


import TicketsPage from "./pages/tickets"; // NEW
import { MoviesProvider } from "./context/moviesContext";
const App = () => {
  const [dark, setDark] = useState(false);

 return (
  <MoviesProvider>
    <div className={dark ? "dark" : ""}>
      <Router>

        <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen">

          {/* Sidebar */}
          <Sidebar />

          <div className="flex-1">

            {/* Topbar */}
            <Topbar dark={dark} setDark={setDark} />

            <div className="p-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/kanban" element={<KanbanPage />} />
                <Route path="/tickets" element={<TicketsPage />} />
                <Route path="/users" element={<UsersPage />} />

                {/* Movies Pages */}
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movies/add" element={<AddMovie />} />
                <Route path="/movies/edit/:id" element={<EditMovie/>} />

              </Routes>
            </div>

          </div>

        </div>

      </Router>
    </div>
  </MoviesProvider>
);
};

export default App;
