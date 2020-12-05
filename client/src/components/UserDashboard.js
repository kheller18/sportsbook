import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import '../styles/UserDashboard.css'

function UserDashboard() {
  const [bets, setBets] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState('');

  useEffect(() => {
    const userData = async () => {
      const userData = JSON.parse(localStorage.getItem('user'));
      console.log(userData);
      setUser(userData.firstName);
      const userId = userData._id;
      await API.getBets(userId)
        .then(res => {
          console.log(res.data);
          setBets(res.data);
          // setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
        })
    }

    userData()
    console.log(bets)
  }, []);

  return (
    <div className='dashboard-container'>
      <div className='dashboard-body'>
        <div className='dashboard-title'>Welcome {user}!</div>
      </div>
    </div>
  );
};

export default UserDashboard;
