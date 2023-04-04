import React, { useState } from "react";
import "./Appt.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Appt() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="apptForm">
      <h1 className="calendarHeader"> Select an Appointment Date </h1>
      <form>
        <div className="appointmentForm">
          <label htmlFor="service">Service:</label>
          <select id="service" name="service">
            <option value="">Select a service</option>
            <option value="Oil Change">Oil Change</option>
            <option value="Engine Rebuild">Engine Rebuild</option>
            <option value="Body Work">Body Work</option>
            <option value="Tuning">Tuning</option>
          </select>

          <label htmlFor="year">Year:</label>
          <input type="number" id="year" name="year" />

          <label htmlFor="make">Make:</label>
          <input type="text" id="make" name="make" />

          <label htmlFor="model">Model:</label>
          <input type="text" id="model" name="model" />

          <button className="apptSubmit " type="submit">
            Submit
          </button>
        </div>
      </form>

      <div className="react-calendar">
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className="selectedDate">
        <span className="bold">Selected Date: </span> {date.toDateString()}
      </p>
    </div>
  );
}
export default Appt;
