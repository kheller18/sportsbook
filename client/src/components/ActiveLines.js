import React, { useEffect, useState, useContext } from 'react';
import { GamesContext } from './ActiveGames';

const ActiveLines = () => {
  const [lines, setLines] = useState([]);
  const games = useContext(GamesContext);
  
  useEffect(() => {
    setLines(gameInfo(games));
  }, [games]);

  const gameInfo = (gameData) => {
    const gameInfoArray = [];
    let i;
    for (i = 0; i < gameData.length; i++) {
      gameInfoArray.push({
        key: `${ gameData[i].home_team }-${ gameData[i].sites[0].commence_time }`,
        awayTeam: gameData[i].teams[0],
        homeTeam: gameData[i].teams[1],
        awayMoneyLine: gameData[i].sites[0].odds.h2h[0],
        homeMoneyLine: gameData[i].sites[0].odds.h2h[1],
        lastUpdated: gameData[i].sites[0].last_update,
        siteRetrieved: gameData[i].sites[0].site_key,
        gameTimeGmt: gameData[i].sites[0].commence_time
      });
    };
    return gameInfoArray;
  };

  return (
    <div>
      {lines.map(line => <div key={line.key}>{line.awayTeam} ({line.awayMoneyLine.toString().charAt(0)==='-' ? line.awayMoneyLine : `+${ line.awayMoneyLine }`}) VS. {line.homeTeam} ({line.homeMoneyLine.toString().charAt(0)==='-' ? line.homeMoneyLine : `+${ line.homeMoneyLine }`})</div>)}
    </div>
  );
};

export default ActiveLines;
