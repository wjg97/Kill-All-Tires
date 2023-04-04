import React, { useState} from "react";
import { ADD_VEHICLE } from "../../utils/mutations"; // import the mutation
import { ApolloProvider, useMutation } from "@apollo/client"; // import the useMutation hook
import Auth from "../../utils/auth"; // import the Auth utility

import logo from '../../assets/logo.svg'
import './garage.css';


const Garage = () => {
  console.log("You are adding a vehicle to your garage");
  const [vehicle, setVehicle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "Vehicle") {
      setVehicle(inputValue);
    }
  };

  const [addVehicle, { error }] = useMutation(ADD_VEHICLE); // use the useMutation hook to execute the ADD_USER mutation in the handleFormSubmit function

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const { data } = await addVehicle({
        variables: { vehicle },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
      setErrorMessage(e.message);
    }

    setVehicle("");
  };


  return (
    <div className="main">
      <div className="content">
        <img className="rotate" src={logo} alt="KAT logo" />
        <h1 className="animate">KILL ALL TIRES</h1>
        <p className="animate2">EST. 2023.</p>
      </div>
      <div className="signupContainer">

        <p>Enter a vehicle</p>
        <input name="email" 
        value={vehicle}
        onChange={handleInputChange}
        type="vehicle"
        placeholder="Enter a Vehicle" 
        required />

        <button type="submit"> Submit </button>
      </div>
    </div>
  );
};

export default Garage;