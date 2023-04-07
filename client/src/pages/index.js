import React from "react";
import topDown from '../assets/ferrari.png';
import shadow from '../assets/shadow.png';
import logo from '../assets/logo.png'
import wallpaper from '../assets/lamborghini.mp4';
import wallpaper2 from '../assets/wallpaper2.jpg';
import flags from '../assets/flags.png';
import rims from '../assets/rims.png';
import mechanic from '../assets/mechanic.mp4';
import mechanic2 from '../assets/mechanic2.mp4';
import mechanic3 from '../assets/mechanic3.mp4';
import mechanic4 from '../assets/mechanic4.mp4';
import Garage from "../pages/garage/garage";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Login') {
      return <Login />;
    }
    if (currentPage === 'Signup') {
      return <SignUp />;
    }
    if (currentPage === 'Appt') {
      return <Appt />;
    }
    if (currentPage === 'Garage') {
      return <Garage />;
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