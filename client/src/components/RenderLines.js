import React, { useContext, useEffect } from 'react';
import { ActiveLinesContext } from './ActiveLines';
import '../styles/RenderLines.css'

const RenderLines = () => {
  // const [sportsLines, renderSportsLines] = useState
  const sportsLines = useContext(ActiveLinesContext);

  useEffect(() => {
    // console.log(sportsLines);
  }, [sportsLines]);

  return (
  <div>
    <h2>NFL Lines</h2>
    {sportsLines.map(game => 
      <div className='render-games' key={game.key}>
        <div className='render-gamedate'>{game.gameDate}</div>
        <div className='render-gametime'>{game.gameTimeEst}</div>
        <div className='render-game'>
          <div className='render-team'>{game.awayTeam}</div>
          <button className='render-moneyline'>{game.awayMoneyLine.toString().charAt(0)==='-' ? game.awayMoneyLine : `+${ game.awayMoneyLine }`}</button>
          <button className='render-spread'>{game.awaySpread.toString().charAt(0)==='-' ? game.awaySpread : `+${ game.awaySpread }`}</button>
          <button className='render-over'>O/{game.overUnder}</button>
        </div>
        <div className='render-game'>
          <div className='render-team'>{game.homeTeam}</div>
          <button className='render-moneyline'>{game.homeMoneyLine.toString().charAt(0)==='-' ? game.homeMoneyLine : `+${ game.homeMoneyLine }`}</button>
          <button className='render-spread'>{game.homeSpread.toString().charAt(0)==='-' ? game.homeSpread : `+${ game.homeSpread }`}</button>
          <button className='render-under'>U/{game.overUnder}</button>
        </div>
      </div>
    )}
  </div>
  );
};

export default RenderLines;
