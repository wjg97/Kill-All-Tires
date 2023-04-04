import React from 'react';
import '../nav.css'
function NavTabs({ currentPage, handlePageChange }) {
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
                <li><a href="#home"
                onClick={() => handlePageChange('Home')}
                 className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                 >KILL ALL TIRES</a>
                <span id="DC-info">
                <p>EST 2023</p>
                </span></li>
      
                <li><a href="#appt"
                onClick={() => handlePageChange('Appt')}
                className={currentPage === 'Appt' ? 'nav-link active' : 'nav-link'}
                >MAKE AN APPOINTMENT</a></li>
                <li><a href="###">
                  MY GARAGE           
                  </a></li>
                <li><a href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >CONTACT US</a></li>
                <li><a href="#login"
                onClick={() => handlePageChange('Login')}
                className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
                >LOGIN</a></li>
                  <li><a href="#signup"
                  onClick={() => handlePageChange('Signup')}
                    className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
                  >SIGN UP</a></li>
                  </ul>
              
              
              
            </nav>
          </div>
        {/* <div class="body-text">
        </div> */}
      </div>
    );
  }
  
  export default NavTabs;