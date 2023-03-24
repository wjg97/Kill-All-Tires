import React from "react";
import driftGif from '../assets/drift.mp4';
import logo from '../assets/logo.png';
const Main = () => {
  return (
    <div className="main">
        <div className="overlay"></div>
      <video src={driftGif} autoPlay loop muted />
      <div className="content">
      <img src={logo} />
        <h1>KILL ALL TIRES.</h1>
        <p>EST. 2023.</p>
      </div>
    </div>
  );
}

export default Main;