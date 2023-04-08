import React, { useState} from "react";
import { ADD_VEHICLE } from "../../utils/mutations"; // import the mutation
import { ApolloProvider, useMutation } from "@apollo/client"; // import the useMutation hook
import Auth from "../../utils/auth"; // import the Auth utility


import logo from '../../assets/logo.svg'
import './garage.css';


const Garage = () => {
  console.log("You are adding a vehicle to your garage");
  const [formState, setFormState] = useState({ make: "", model: "", year:"",user:"" });
  const [addVehicle, { error, data }] = useMutation(ADD_VEHICLE);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    
    try {
      const { data } = await addVehicle({
        variables: { ...formState },
      });

      Auth.garage(data.addVehicle.token);
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <div className="main">
      <div className="content">
        <img className="rotate" src={logo} alt="KAT logo" />
        <h1 className="animate">KILL ALL TIRES</h1>
        <p className="animate2">EST. 2023.</p>
      </div>
      <div className="signupContainer">
        <h1>Enter a vehicle to your Garage</h1>
        <form onSubmit={handleFormSubmit}>

        <p className="inputter">Enter the make of the vehicle</p>
        <input name="make" 
        value={formState.make}
        onChange={handleInputChange}
        type="make"
        placeholder="Enter a vehicle make" 
        required />

        <p className="inputter">Enter the model of the vehicle</p>
        <input name="model" 
        value={formState.model}
        onChange={handleInputChange}
        type="model"
        placeholder="Enter a vehicle model" 
        required />


        <p className="inputter">Enter the year of the vehicle</p>
        <input name="year" 
        value={formState.year}
        onChange={handleInputChange}
        type="year"
        placeholder="Enter a vehicle year" 
        required />

        <p className="inputter">Enter your Username</p>
        <input name="user" 
        value={formState.user}
        onChange={handleInputChange}
        type="user"
        placeholder="Enter your Username" 
        required />

        <button type="submit"> Submit </button>
        </form>
      </div>
    </div>
  );
};

export default Garage;