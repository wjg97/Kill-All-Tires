import React from "react";
import topDown from '../assets/ferrari.png';
import shadow from '../assets/shadow.png';
// import logo from '../assets/logo.png'
// import driftGif from '../assets/drift.mp4';
import wallpaper from '../assets/wallpaper.jpg';
import wallpaper2 from '../assets/wallpaper2.jpg';
import login from "../pages/loginForm/index";
import signup from "../pages/signupForm/index";

module.exports = {login, signup};
const Index = () => {
    return (
      <div>
      <div className="body">
        <h1 className="title">KILL ALL TIRES | EST 2023</h1>
    
        <img className="ferrari" src={topDown} alt="top down car"/>
        <img className="shadow" src={shadow} alt="shadow"/>
        <h1 className="slogan" >KILL ALL TIRES</h1>
        <h1 className="slogan2" >KILL ALL TIRES</h1>
        </div>
        <div className="information">
          <div className="overlay"> </div>
          <h2 className="about">ABOUT</h2>
          <hr className="line"/>
          <h2 className="services">KILL ALL TIRES SERVICES</h2>
          <p className="bio">Colorado's premier award winning car mechanic shop from daily drivers to the worlds most exotic super cars, 
            we have the knowledge and experience to get the job done right the first time. We use OEM parts and the latest
            diagnostic equipment to ensure your vehicle is in the best hands possible. We are a full service shop with a
            full service detail shop. We offer a wide range of services from oil changes to full engine rebuilds. We also
            offer a wide range of detailing services from a simple wash and wax to a full paint correction and ceramic coating.
            Everything you need to make your vehicle yours, we have it here at Kill All Tires.</p>
            <img src={wallpaper2} alt="wallpaper" className="wallpaper2"/>
            <img src={wallpaper} alt="wallpaper" className="wallpaper"/>
        </div>
        </div>
    );
  }
  
  export default Index;