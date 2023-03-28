import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

function Appt() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="apptForm">
      <h1 className="calendarHeader"> Select an Appointment Date </h1>
      <div className="calendar">
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className="selectedDate">
        <span className="bold">Selected Date: </span> {date.toDateString()}
      </p>
    </div>
  );
}
export default Appt;
