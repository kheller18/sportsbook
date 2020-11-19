import React, { useEffect, useState, useContext } from 'react';
import API from '../utils/API';
import ActiveLines from './ActiveLines';
import { SportsContext } from './ActiveSports';
export const GamesContext = React.createContext();

const ActiveGames = () => {
  const [games, setGames] = useState([]);
  const sports = useContext(SportsContext);

  useEffect(() => {
    API.getLines(sports[1])
      .then(res => {
        console.log(res.data.data)
        // console.log(res.data.data[0].sites[6].odds.h2h[0]);
        setGames(res.data.data);
      })
      .catch(err => {
        console.log(err)
      })
  }, [sports]);

  return (
    <div>
      {/* {games.map(game => <div key={game.home_team}>{game.teams[0]} vs. {game.teams[1]}</div>)} */}
      <GamesContext.Provider value={games}>
        <ActiveLines />
      </GamesContext.Provider>
    </div>
  );
};

export default ActiveGames;
