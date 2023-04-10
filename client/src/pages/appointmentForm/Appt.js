import React, { useState } from "react";
import "./Appt.css";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

import { useMutation } from "@apollo/client";
// import { ADD_APPOINTMENT } from "../../utils/mutations";
// import { QUERY_APPOINTMENTS, QUERY_ME } from "../../utils/queries";

// Temp apptv2 imports
import { ADD_APPOINTMENTV2 } from "../../utils/mutations";
import { QUERY_APPOINTMENTSV2, QUERY_ME } from "../../utils/queries";
// 

import Auth from "../../utils/auth";

function Appt() {
const [ formState, setFormState ] = useState({
    service: "",
    year: "",
    make: "",
    model: "",
    date: new Date(),
    time: "",
  });

  const [ addAppointmentv2, { error, data } ] = useMutation(ADD_APPOINTMENTV2, {
    update(cache, { data: { addAppointmentv2 } }) {
      try {
        const { appointmentsv2 } = cache.readQuery({ query: QUERY_APPOINTMENTSV2 });
        cache.writeQuery({
          query: QUERY_APPOINTMENTSV2,
          data: { appointmentsv2: [ addAppointmentv2, ...appointmentsv2 ] },
        });
      } catch (e) {
        console.error(e);
      }
      // update me object's cache, appending new appointment to the end of the array
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, appointmentsv2: [...me.appointmentsv2, addAppointmentv2] } }, 
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addAppointmentv2({
        variables: { 
          service: formState.service,
          year: formState.year,
          make: formState.make,
          model: formState.model,
          date: formState.date,
          time: formState.time,
        },
      });
      console.log(data);
      // log submitted form data to console
      console.log(formState);
    } catch (e) {
      console.error(e);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };


  // TODO: fix calendar, when selecting a date it will run error `Cannot destructure property 'name' of 'event.target' as it is undefined.`
  // rest of form appears to be working 
  return (
    <div className="apptForm">
      <h1 className="calendarHeader"> Select an Appointment Date </h1>
      <form onSubmit={handleFormSubmit}>
        <div className="appointmentForm">
          <label htmlFor="service">Service:</label>
          <select id="service" name="service" value={formState.service} onChange={handleInputChange}>
            <option value="">Select a service</option>
            <option value="Oil Change">Oil Change</option>
            <option value="Engine Rebuild">Engine Rebuild</option>
            <option value="Body Work">Body Work</option>
            <option value="Tuning">Tuning</option>
          </select>
          <label htmlFor="year">Year:</label>
          <input type="number" id="year" name="year" value={formState.year} onChange={handleInputChange}/>
          <label htmlFor="make">Make:</label>
          <input type="text" id="make" name="make" value={formState.make} onChange={handleInputChange}/>
          <label htmlFor="model">Model:</label>
          <input type="text" id="model" name="model" value={formState.model} onChange={handleInputChange}/>
          <label htmlFor="model">Time(9am-5pm):</label>
      <select id="time" name="time" value={formState.time} onChange={handleInputChange}>
        <option value="9am">9am</option>
        <option value="10am">10am</option>
        <option value="11am">11am</option>
        <option value="12pm">12pm</option>
        <option value="1pm">1pm</option>
        <option value="2pm">2pm</option>
        <option value="3pm">3pm</option>
        <option value="4pm">4pm</option>
        <option value="5pm">5pm</option>
      </select>
        </div>
      <div className="react-calendar">
        <Calendar onChange={handleInputChange} value={formState.date} />
      </div>
      <p className="selectedDate">
        <span className="bold">Selected Date: </span> {formState.date.toString()}
      </p>
          <button className="apptSubmit " type="submit">
            Submit
          </button>
      </form>
    </div>
  );
}

export default Appt;
