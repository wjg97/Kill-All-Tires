import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
      <ul className="navigation">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        </ul>
    );
  }
  
  export default NavTabs;