import React, { useState } from "react";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import NavTabs from "../pages/NavTabs";
import Contact from "../pages/contactForm/Contact";
import Login from "../pages/loginForm/login";
import SignUp from "../pages/signupForm/signup";
import Appt from "./appointmentForm/Appt";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Login") {
      return <Login />;
    }
    if (currentPage === "Signup") {
      return <SignUp />;
    }
    if (currentPage === "Appt") {
      return <Appt />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
