/* eslint-disable react-hooks/rules-of-hooks */ // this is to disable the linting warning that says we can't use hooks outside of a function component
import React, { useState } from "react";
import { ADD_VEHICLE } from "../../utils/mutations"; // import the mutation
import { useMutation } from "@apollo/client"; // import the useMutation hook
import Auth from "../../utils/auth"; // import the Auth utility


const Garage = () => {
  const [formState, setFormState] = useState({ vehicle: '' });
  const [addVehicle] = useMutation(ADD_VEHICLE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addVehicle({
      variables: {
        vehicle: formState.vehicle,
      },
    });
    const token = mutationResponse.data.addVehicle.token;
    Auth.garage(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="signupContainer">
      <h1>Add a Vehicle</h1>
      <input 
        
        name="vehicle"
        onChange={handleChange}
        type="text"
        placeholder="Vehicle">
      </input>
      <button type="button" onClick={handleFormSubmit}>Submit</button>
    </div>
  );
};

export default Garage;