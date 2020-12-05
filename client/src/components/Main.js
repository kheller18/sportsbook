import React from 'react';
import UserDashboard from './UserDashboard';
import ActiveSports from './ActiveSports';
import '../styles/Main.css';

function Main() {
  return (
    <div className='members-page'>
      <UserDashboard />
      <ActiveSports />
    </div>
  );
};

export default Main;
