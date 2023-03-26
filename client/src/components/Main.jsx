import React from "react";
import driftGif from '../assets/drift.mp4';
import logo from '../assets/logo.png';
const Main = () => {
  return (
    <div className="main">
        <div className="overlay"></div>
      <video src={driftGif} autoPlay loop muted />
      <div className="content">
      <img classname="rotate" src={logo} alt="stock car video"/>
        <h1 className="animate">KILL ALL TIRES</h1>
        <p className="animate2">EST. 2023.</p>
      </div>
      {/* <div className="signupContainer">
        <h1>Signup for an account!</h1>

        <input
            name="username"
            placeholder="username"
            required
        > 
        Enter a username
        </input>
        <input
            name="email"
            placeholder="email"
            required
        > 
        Enter an email
        </input>
        <input
            name="password"
            placeholder="password"
            required
        > 
        Enter a password
        </input>
    </div> */}
    </div>
  );
}

export default Main;