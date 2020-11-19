import React, { useContext, useEffect } from 'react';
import { ActiveLinesContext } from './ActiveLines';
import '../styles/RenderLines.css'

const RenderLines = () => {
  // const [sportsLines, renderSportsLines] = useState
  const sportsLines = useContext(ActiveLinesContext);

  useEffect(() => {
    console.log(sportsLines);
  }, [sportsLines]);



  return (
  <div>
    <h2>NFL Lines</h2>
    {sportsLines.map(line => 
      <div className='render-games' key={line.key}>
        <div className='render-game'>
          <div className='render-team'>{line.awayTeam}</div>
          <button className='render-moneyline'>{line.awayMoneyLine.toString().charAt(0)==='-' ? line.awayMoneyLine : `+${ line.awayMoneyLine }`}</button>
        </div>
        <div className='render-game'>
          <div className='render-team'>{line.homeTeam}</div>
          <button className='render-moneyline'>{line.homeMoneyLine.toString().charAt(0)==='-' ? line.homeMoneyLine : `+${ line.homeMoneyLine }`}</button>
        </div>
      </div>
    )}
  </div>
  );
};

export default RenderLines;
