import React, { useEffect, useState, useContext } from 'react';
import API from '../utils/API';
import ActiveLines from './ActiveLines';
import { SportsContext } from './ActiveSports';
export const GamesContext = React.createContext();

function ActiveGames() {
  const [games, setGames] = useState({ moneyline: null, spread: null, total: null });
  const [isLoading, setIsLoading] = useState(true);
  const sports = useContext(SportsContext);

  useEffect(() => {
    const getMoneyLineData = async () => {
      const response = await API.getLines(sports[1], 'moneyline');
      console.log(response)
      return response.data.data;
    };

    const getSpreadData = async () => {
      const response = await API.getLines(sports[1], 'spread');
      console.log(response)
      return response.data.data;
    };

    const getTotalsData = async () => {
      const response = await API.getLines(sports[1], 'totals');
      console.log(response)
      return response.data.data;
    };

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
  }, []);

  return (
    <div>
      {isLoading ? '' :
        <GamesContext.Provider value={games}>
          <ActiveLines />
        </GamesContext.Provider>
      }
    </div>
  );
};

export default ActiveGames;
