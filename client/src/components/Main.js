import React from 'react';
import UserDashboard from './UserDashboard';
import ActiveSports from './ActiveSports';
import Nav from './Nav';
import '../styles/Main.css';

function Main() {
  return (
    <div className='members-page'>
      <UserDashboard />
      <ActiveSports />
      {/* <Nav /> */}
    </div>
  );
};

export default Main;
