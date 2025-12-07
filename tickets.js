import React from "react";
import DynamicTable from "../components/dynamic";

export default function Tickets() {
console.log("Tickets page loaded");
  const sampleData = [
    { name: "John Doe", email: "john@gmail.com", tickets: 2 },
    { name: "Sara Lee", email: "sara@yahoo.com", tickets: 3 },
    { name: "Michael", email: "mike@gmail.com", tickets: 1 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tickets</h1>
      
      {/* 👇 THIS MUST BE RENDERED */}
      <DynamicTable initialData={sampleData} />
    </div>
  );
}
