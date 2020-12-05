import React, { useState } from 'react';
import '../styles/Header.css';
import API from '../utils/API';
// import { Redirect } from 'react-router-dom';

function Header() {
  // const [isLoggedOut, setIsLoggedOut] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    console.log(event);
    API.logout();
    // setIsLoggedOut(true);
  }
  
  // if (isLoggedOut) {
  //   return <Redirect to='/login' />;
  // }

  return (
    <div className='header'>
      <div className='header-left header-title'>SportsBook</div>
      <div className='header-right header-links'>
        {/* <li className='header-link' onClick={handleClick}>Logout</li> */}
      </div>
      {/* <div className='nav-links'>
        <li className='nav-link'>Logout</li>
      </div> */}
      
    </div>
  );
};

export default Header;
