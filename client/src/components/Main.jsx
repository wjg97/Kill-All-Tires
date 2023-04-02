import React from "react";
import driftGif from '../assets/drift.mp4';
import logo from '../assets/logo.png';
const Main = () => {
  return (

    <div className="main">
        <div className="overlay"></div>
      <video src={driftGif} autoPlay loop muted />
      <div className="content">
      <img className="rotate" src={logo} alt="stock car video"/>
        <h1 className="animate">KILL ALL TIRES</h1>
        
        <p className="animate2">EST. 2023</p>
      </div>

    </div>
  );
}

export default Main;