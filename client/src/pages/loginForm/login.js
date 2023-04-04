import React, { useState } from "react";
import { useMutation } from '@apollo/client';
//import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
//import logo from "../../assets/logo.svg";
// import driftGif from "../../assets/drift.png";
const Login = () => {
  console.log("You are logging into an account");

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="main">
      
      
      <div className="loginContainer">
        <h1>Login to an account</h1>
        <form onSubmit={handleFormSubmit}>

        <p>Enter an email</p>
        <input name="email"
        type="email"
        id="email"
        onChange={handleChange}
        placeholder="email" 
        required />
        <p>Enter a password</p>
        <input
          name="password"
          placeholder="password"
          autoComplete="off"
          type="password"
          id="password"
          onChange={handleChange}
          required
        />
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <button type="submit"> Submit </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
