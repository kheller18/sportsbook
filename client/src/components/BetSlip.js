import React, { useContext, useEffect, useState } from 'react';
import { RenderLinesContext } from './RenderLines';
import '../styles/BetSlip.css';

const BetSlip = (e) => {
  // const betInformation = useContext(RenderLinesContext);
  const [toWin, setToWin] = useState('10');
  const [toLose, setToLose] = useState(10);
  const [slip, setSlip] = useState({});

  useEffect(() => {

  }, [toLose])

  const handleChange = (e) => {
    setToLose(e);
    setToWin(e*.9);
  }
  // console.log(`dkjald;s ${e}`, e);
  console.log(e)
  // key={e.data.data.key}
  return (
    <div className='slip'>
      <div className='slip-title'>BET SLIP</div>
      {e.data.isLoading ? '' : 
        <div className='slip-body'>
          <div className='slip-exit'>X</div>
          <div className='slip-away-team'>{e.data.data.awayTeam}</div>
          <div className='slip-home-team'>vs. {e.data.data.homeTeam}</div>
          <div className='slip-money'>
            <div className='slip-risk-money'>
              <label>TO RISK</label>
              <br />
              <br />
              <input type='text' className='slip-to-lose' value={toLose} placeholder={toLose} onChange={(e) => handleChange(e.target.value)} /> 
            </div>
            <div className='slip-win-money'>
              <label>TO WIN</label>
              <br />
              <br />
              <div className='slip-to-win'>{toWin}</div>
            </div>
          </div>
          <div className='slip-buttons'>
            <button className='slip-button'>CANCEL</button>
            <button className='slip-button' id='submit-slip'>PLACE BET</button>
          </div>
      </div>
      }      
    </div>
  );
};

export default BetSlip;
