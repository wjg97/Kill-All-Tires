import React from "react";
import '../../nav.css';
import topDown from '../../assets/ferrari.png';
import shadow from '../../assets/shadow.png';
import logo from '../../assets/logo.png';
// import driftGif from '../assets/drift.mp4';
import wallpaper from '../../assets/lamborghini.mp4';
import wallpaper2 from '../../assets/wallpaper2.jpg';
import flags from '../../assets/flags.png';
import rims from '../../assets/rims.png';
import mechanic from '../../assets/mechanic.mp4';
import mechanic2 from '../../assets/mechanic2.mp4';
import mechanic4 from '../../assets/mechanic4.mp4';
//import Contact from '../../pages/contactForm/Contact';

const Home = () => {
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
            <video src={wallpaper} autoPlay loop muted className="wallpaper"/>
            <p className="commitment">KILL ALL TIRES is here to make every moment with your car cinematic. The cleaning finish, 
              the shine, the smell, the sound, the feel, the look, the experience. We are here to make your car
              KILL ALL TIRES. </p>
             <p className="commitment2"> ON THE TRACK, THE ROAD, THE MOUNTAINS OR ON THE SHOWROOM FLOOR
             OUR SERVICE, TEAM AND COMMITMENT WILL TAKE YOU AND YOUR CAR TO THE TOP OF EVERY TERRAIN. </p>
              <img src={flags} alt="flags" className="flags"/>
              <img src ={rims} alt="rims" className="rims"/>
        </div>
        <div className="car-brands">
          <h1 className="brands">OUR SPECIALTY SERVICES</h1>',
          <div className="car-brands-parent">
            <div className="car-brands-child">
              <video src= {mechanic} autoPlay loop muted className="mechanic"/>
              <h1 className="service3">01</h1>
              <hr className="service2"></hr>
              <h1 className="service">OIL CHANGE</h1>
              </div>
              <div className="car-brands-child2">
              <video src= {mechanic2} autoPlay loop muted className="mechanic"/>
              <h1 className="service3">02</h1>
              <hr className="service2"></hr>
              <h1 className="service">ENGINE REBUILD</h1>
              </div>
              {/* <div className="car-brands-child3">
              <video src= {mechanic3} autoPlay loop muted className="mechanic"/>
              <h1 className="service3">03</h1>
              <hr className="service2"></hr>
              <h1 className="service">AUTO BODY</h1> */}
              </div>
              <div className="car-brands-child4">
              <video src= {mechanic4} autoPlay loop muted className="mechanic"/>
              <h1 className="service3">04</h1>
              <hr className="service2"></hr>
              <h1 className="service">TUNING</h1>
              </div>
          </div>
          </div>
    )
}

export default Home;
