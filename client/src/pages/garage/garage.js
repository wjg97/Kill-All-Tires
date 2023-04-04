import React, { useState} from "react";
import { ADD_VEHICLE } from "../../utils/mutations"; // import the mutation
import { ApolloProvider, useMutation } from "@apollo/client"; // import the useMutation hook
import Auth from "../../utils/auth"; // import the Auth utility

import logo from '../../assets/logo.svg'
import './garage.css';


const Garage = () => {
  console.log("You are adding a vehicle to your garage");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "make") {
      setMake(inputValue);
    }
    if (inputType === "model") {
      setModel(inputValue);
    }
    if (inputType === "year") {
      setYear(inputValue);
    }
  };

  const [addVehicle, { error }] = useMutation(ADD_VEHICLE); // use the useMutation hook to execute the ADD_USER mutation in the handleFormSubmit function

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const { data } = await addVehicle({
        variables: { make, model, year },
      });

      Auth.addVehicle(data.addVehicle.token);
    } catch (e) {
      console.error(e);
      setErrorMessage(e.message);
    }

    setMake("");
    setModel("");
    setYear("");
  };


  return (
    <div className="main">
      <div className="content">
        <img className="rotate" src={logo} alt="KAT logo" />
        <h1 className="animate">KILL ALL TIRES</h1>
        <p className="animate2">EST. 2023.</p>
      </div>
      <div className="signupContainer">

        <p>Enter vehicle make</p>
        <form onSubmit={handleFormSubmit}>
        <input name="make" 
        value={make}
        onChange={handleInputChange}
        type="text"
        placeholder="Make" 
        required />

        <p>Enter vehicle model</p>
        <input name="model"
        value={model}
        onChange={handleInputChange}
        type="text"
        placeholder="Model"
        required />

        <p>Enter vehicle year</p>
        <input name="year"
        value={year}
        onChange={handleInputChange}
        type="text"
        placeholder="Year"
        required />

        <button type="submit"> Submit </button>
        </form>
      </div>
    </div>
  );
};

export default Garage;