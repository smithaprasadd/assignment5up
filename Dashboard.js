import React from "react";
import { Users, Ticket, DollarSign } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const Dashboard = () => {
  const data = [
    { month: "Jan", bookings: 200 },
    { month: "Feb", bookings: 300 },
    { month: "Mar", bookings: 400 },
    { month: "Apr", bookings: 350 },
  ];

  return (
    <div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-white dark:bg-gray-800 shadow rounded-xl flex items-center gap-5">
          <Users size={40} />
          <div>
            <h3 className="text-xl font-semibold">1200</h3>
            <p className="text-gray-500">Users</p>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 shadow rounded-xl flex items-center gap-5">
          <Ticket size={40} />
          <div>
            <h3 className="text-xl font-semibold">3500</h3>
            <p className="text-gray-500">Tickets Sold</p>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 shadow rounded-xl flex items-center gap-5">
          <DollarSign size={40} />
          <div>
            <h3 className="text-xl font-semibold">$42,000</h3>
            <p className="text-gray-500">Revenue</p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-xl">
        <h3 className="text-lg mb-4 text-gray-700 dark:text-gray-200">Monthly Bookings</h3>

        <LineChart width={600} height={300} data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line type="monotone" dataKey="bookings" stroke="#3b82f6" strokeWidth={3} />
        </LineChart>
      </div>

    </div>
  );
};

export default Dashboard;
