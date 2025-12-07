import React from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calen.css";
const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const events = [
    {
      title: "Movie Premiere",
      start: new Date(),
      end: new Date(),
    },
  ];


  return (
    <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-xl">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default CalendarPage;
