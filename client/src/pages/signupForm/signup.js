import React, { useState} from "react";
import { ADD_USER } from "../../utils/mutations"; // import the mutation
import { ApolloProvider, useMutation } from "@apollo/client"; // import the useMutation hook
import Auth from "../../utils/auth"; // import the Auth utility

import logo from '../../assets/logo.svg'
import './signup.css';


const SignUp = () => {
  console.log("You are signing up for an account");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    }
    if (inputType === "password") {
      setPassword(inputValue);
    }
    if (inputType === "username") {
      setUsername(inputValue);
    }
  };

  const [addUser, { error }] = useMutation(ADD_USER); // use the useMutation hook to execute the ADD_USER mutation in the handleFormSubmit function

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const { data } = await addUser({
        variables: { email, password, username },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
      setErrorMessage(e.message);
    }

    setEmail("");
    setPassword("");
    setUsername("");
  };


  return (
    <div className="main">
      <div className="content">
        <img className="rotate" src={logo} alt="KAT logo" />
        <h1 className="animate">KILL ALL TIRES</h1>
        <p className="animate2">EST. 2023.</p>
      </div>
      <div className="signupContainer">
        <h1>Signup for an account</h1>

        <p>Enter a username</p>
        <input name="username" 
        value={username}
        onChange={handleInputChange}
        type="text"
        placeholder="Username" 
        required />

        <p>Enter an email</p>
        <input name="email" 
        value={email}
        onChange={handleInputChange}
        type="email"
        placeholder="Email" 
        required />
        <p>Enter a password</p>
        <input
          name="password"
          value={password}
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
          autoComplete="off"
          required
        />

        <button> Submit </button>
      </div>
    </div>
  );
};

export default SignUp;
