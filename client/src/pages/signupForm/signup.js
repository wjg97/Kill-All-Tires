import React from "react";
import driftGif from '../../assets/drift.png'
import logo from '../../assets/logo.svg'

const signup = () => {
  console.log("You are signing up for an account");

  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={driftGif} autoPlay loop muted />
      <div className="content">
        <img className="rotate" src={logo} alt="KAT logo" />
        <h1 className="animate">KILL ALL TIRES</h1>
        <p className="animate2">EST. 2023.</p>
      </div>
      <div className="signupContainer">
        <h1>Signup for an account</h1>

        <p>Enter a username</p>
        <input name="username" placeholder="username" required />

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

export default signup;
