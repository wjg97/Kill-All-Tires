import React, { useState } from "react";
import Home from './home/Home'
//import Navbar from "./navbar/Navbar";
import NavTabs from "../pages/NavTabs";
import Contact from '../pages/contactForm/Contact';
import Login from '../pages/loginForm/login';
import SignUp from '../pages/signupForm/signup';
import Appt from "./appointmentForm/Appt";
import Garage from "../pages/garage/garage";


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('Home'); // This will redirect the user to the home page after they log in
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('Home'); // This will redirect the user to the home page after they log out
  }

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Login' && !isLoggedIn) {
      return <Login handleLogin={handleLogin}/>;
    }
    if (currentPage === 'Signup' && !isLoggedIn) {
      return <SignUp />;
    }
    if (currentPage === 'Appt' && isLoggedIn) {
      return <Appt />;
    }
    if (currentPage === 'Garage' && isLoggedIn) {
      return <Garage />;
    }
  };

  // Here we are setting the state for the currentPage. We pass this value and a function to update it to the Navbar component.

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}