import React from "react";
import "./about.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("./contactForm/Contact.js");
  };

  return (
    <div className="aboutusContainer">
      <div className="aboutWelcome">
        <h1> Kill All Tires </h1>
      </div>
      <div className="aboutCon">
        <h3 className="intro">
          We are the Kill All Tires Team, we own and operate one the most
          advanced and thorough mechanic shops in Denver, CO. We operate on any
          and all makes and models and gaurentee our work with a 36,000 mile or
          3 year warranty. We are known for our excellent customer service and
          pride ourselves on making sure our customers leave happy after every
          visit.
        </h3>

        <h3 className="employees">
          Our technicians are the most highly trained, professional, and honest
          people in the field. We have state of the art equipment including 3
          alignment racks, the newest and most technologically advanced machines
          for coolant, transmission, brake, and clutch fluid exhanges available
          on the market today. Give us a call and talk to one of our highly
          trained service advisors for any and all questions!
        </h3>

        <Link to="/contact"> Contact Us! </Link>
      </div>
    </div>
  );
};

export default AboutUs;
