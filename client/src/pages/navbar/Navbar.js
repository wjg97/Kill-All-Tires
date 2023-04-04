import React from "react";

const Navbar = () => {
    return (

<div class="menu-container">
  
      <input type="checkbox" id="openmenu" class="hamburger-checkbox"></input>
      
      <div class="hamburger-icon">
        <label for="openmenu" id="hamburger-label">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </label>    
      </div>
    
        <div class="menu-pane">
          
          <nav>
            <ul class="menu-links">
              <li><a href="###"></a><span id="QC-info">
                <p></p>
              </span>
                
              </li>
              
              <li><a href="###"></a>
               
              </li>
              <li><a href="###"></a></li>
              <li><a href="###"></a></li>
            </ul>
          
             <ul class="menu-links">
                         <li><a href="###">KILL ALL TIRES</a>
                           <span id="DC-info">
                <p>EST 2023</p>
              </span></li>
    
              <li><a href="###">SERVICES</a></li>
              <li><a href="###">
                MY GARAGE           
                </a></li>
              <li><a href="###">CONTACT US</a></li>
              <li><a href="###">LOGIN</a></li>
                <li><a href="###">SIGN UP</a></li>
            </ul>
            
            
            
          </nav>
        </div>
      <div class="body-text">
      </div>
    </div>
    )}

export default Navbar;