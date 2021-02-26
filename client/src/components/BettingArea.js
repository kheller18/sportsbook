import React, { useEffect, useState } from 'react';
// import '../styles/BetSlip.css';
import API from '../utils/API';
import ActiveGames from './ActiveGames';
import BetSlipContainer from './BetSlipContainer';

const BettingArea = (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [clickData, setClickData] = useState([])

  // useEffect(() => {

  // }, [])
  // updateClickData={setClickData}
  return(
    <div className='betting-container'>
      <ActiveGames {...props} updateLoading={setIsLoading} passClickData={setClickData} />
      <BetSlipContainer data={clickData}  />

    </div>
  );
};

export default BettingArea;
