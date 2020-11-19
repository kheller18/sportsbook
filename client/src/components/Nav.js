import React, { useContext, useEffect, useState } from 'react';
import '../styles/Nav.css';
import { SportsContext } from './ActiveSports';
import NavButton from './NavButton';

const Nav = () => {
  const [leagues, setLeagues] = useState([]);
  const allLeagues = useContext(SportsContext);

  useEffect(() => {
    console.log(allLeagues);
    setLeagues(renderLeagueButtons(allLeagues));
  }, [allLeagues]);

  const renderLeagueButtons = (league) => {
    // return leagues.map((league) => {
    //   // <NavButton value=/>
    // });
  };

  return (
    <div className='nav'>
      <h3 className='nav-header'>Available Leagues</h3>
      {leagues}
    </div>
  );
};

export default Nav;
