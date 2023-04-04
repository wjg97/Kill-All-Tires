import React from "react";
import logo from "../../assets/logo.svg";
// import driftGif from "../../assets/drift.png";
const login = () => {
  console.log("You are logging into an account");

  return (
    <div className="main">
      
      
      <div className="loginContainer">
        <h1>Login to an account</h1>

        <p>Enter an email</p>
        <input name="email" placeholder="email" required />
        <p>Enter a password</p>
        <input
          name="password"
          placeholder="password"
          autoComplete="off"
          required
        />

        <button> Submit </button>
      </div>
    </div>
  );
};

export default login;
