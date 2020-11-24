import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <div className='header'>
      <div className='header-left header-title'>SportsBook</div>
      <div className='header-right header-links'>
        <li className='header-link'>example</li>
      </div>
      {/* <div className='nav-links'>
        <li className='nav-link'>Logout</li>
      </div> */}
      
    </div>
  );
};

export default Header;
