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

const Main = () => {
  // const sports = useContext(SportsContext);
  const [sport, setSport] = useState('basketball_nba');
  const [isLoading, setIsLoading] = useState(true)
  const [clickData, setClickData] = useState()
  const [betStatus, setBetStatus] = useState()

  const games = useContext(GamesContext);
  console.log(games);

  return (
    // <GlobalContextProvider>
      <div className='members-page'>
        <UserDashboard />
        <div className='members-section-mid'>
          <Nav passSportData={setSport} passIsLoading={setIsLoading} />
          <ActiveGames data={{sport: sport, loading: isLoading}} passClickData={setClickData} />
          {/* <RenderBetSlips data={clickData} /> */}
          <BetSlipContainer type={betStatus} data={clickData} />
        </div>
        {/* <BetSlip /> */}
      </div>
    // </GlobalContextProvider>
  );
};

export default Main;
