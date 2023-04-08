import React, { useState } from "react";
import "./Appt.css";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

import { useMutation } from "@apollo/client";
import { ADD_APPOINTMENT } from "../../utils/mutations";
import { QUERY_APPOINTMENTS, QUERY_ME } from "../../utils/queries";

import Auth from "../../utils/auth";

function Appt() {
  const [ date, setDate ] = useState(new Date());
  const [ time, setTime ] = useState("12:00PM");

  const [ addAppointment, { error } ] = useMutation(ADD_APPOINTMENT, {
    update(cache, { data: { addAppointment } }) {
      try {
        const { appointments } = cache.readQuery({ query: QUERY_APPOINTMENTS });
        cache.writeQuery({
          query: QUERY_APPOINTMENTS,
          data: { appointments: [ addAppointment, ...appointments ] },
        });
      } catch (e) {
        console.error(e);
      }
      // update me object's cache, appending new appointment to the end of the array
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, appointments: [...me.appointments, addAppointment] } }, 
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addAppointment({
        variables: { 
          date, 
          time
        },
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleTimeChange = (event) => {
    const { name, value } = event.target;
    setTime(value);
  };

  return (
    <div className="apptForm">
      <h1 className="calendarHeader"> Select an Appointment Date </h1>
      <form onSubmit={handleFormSubmit}>
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
        </div>
      <div className="react-calendar">
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className="selectedDate">
        <span className="bold">Selected Date: </span> {date.toDateString()}
      </p>
          <button className="apptSubmit " type="submit">
            Submit
          </button>
      </form>
    </div>
  );
}

export default Appt;
