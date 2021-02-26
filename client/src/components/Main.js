import React, {useContext, useState, useEffect} from 'react';
import UserDashboard from './UserDashboard';
import ActiveSports from './ActiveSports';
import Nav from './Nav';
import BetSlip from './BetSlip';
import '../styles/Main.css';
import BetSlipContainer from './BetSlipContainer';
import ActiveGames from './ActiveGames'
import { SportsContext } from './ActiveSports';
import { GlobalContextProvider } from '../utils/GlobalContext';
import RenderBetSlips from './RenderBetSlips';
import { GamesContext } from './ActiveGames';
import ActiveLines from './ActiveLines';
import BettingArea from './BettingArea'

const Main = () => {
  // const sports = useContext(SportsContext);
  const [sport, setSport] = useState('basketball_nba');
  const [isLoading, setIsLoading] = useState(true)
  const [clickData, setClickData] = useState()
  // const [slipState, setSlipState] = useState('empty')
  console.log(sport)
  // const games = useContext(GamesContext);
  // console.log(games);

  return (
    // <GlobalContextProvider>
      <div className='members-page'>
        <div className='members-section-top'>
          <UserDashboard />
        </div>
        <div className='members-section-mid'>
          <Nav passSportData={setSport} passIsLoading={setIsLoading} />
          {/* <ActiveGames data={{sport: sport, loading: isLoading}} passClickData={setClickData} /> */}
          {/* <RenderBetSlips data={clickData} /> */}
          <BettingArea data={{sport: sport, loading: isLoading}} />
          {/* <BetSlipContainer data={clickData} updateClickData={setClickData} /> */}
        </div>
        {/* <BetSlip /> */}
      </div>
    // </GlobalContextProvider>
  );
};

export default Main;
