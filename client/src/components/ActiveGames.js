import React, { useEffect, useState, useContext } from 'react';
import API from '../utils/API';
import ActiveLines from './ActiveLines';
import Nav from './Nav';
import { SportsContext } from './ActiveSports';
export const GamesContext = React.createContext();

const ActiveGames = (props) => {
  const [games, setGames] = useState({ moneyline: null, spread: null, total: null });
  const [isLoading, setIsLoading] = useState(true);
  const sports = useContext(SportsContext);
  // console.log(props);

  useEffect(() => {
    console.log(props);
    // gets moneyline data
    const getMoneyLineData = async () => {
      const response = await API.getLines(props.data.sport, 'moneyline');
      return response.data.data;
    };

    // gets spread data
    const getSpreadData = async () => {
      const response = await API.getLines(props.data.sport, 'spread');
      return response.data.data;
    };

    // gets totals data
    const getTotalsData = async () => {
      const response = await API.getLines(props.data.sport, 'totals');
      return response.data.data;
    };

    // promise all for all functions to run
    Promise.all([getMoneyLineData(), getSpreadData(), getTotalsData()])
      .then(values => {
        setGames({
          ...games,
          moneyline: values[0],
          spread: values[1],
          total: values[2],
        })
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false)
      });
  }, [props]);

  return (
    <div>
      {(isLoading) ? '' :
        <GamesContext.Provider value={games}>
          <ActiveLines />
          {/* <Nav /> */}
        </GamesContext.Provider>
      }
    </div>
  );
};

export default ActiveGames;
