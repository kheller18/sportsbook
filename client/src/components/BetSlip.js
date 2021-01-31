import React, { useEffect, useState } from 'react';
import '../styles/BetSlip.css';
import API from '../utils/API';

const BetSlip = (e) => {
  const [toLose, setToLose] = useState(undefined);
  const [toWin, setToWin] = useState();

  useEffect(() => {

  }, [e]);

  const handleChange = (e, data) => {
    console.log(data);
    console.log(e);
    console.log(data.odds.toString()[0]);
    switch (data.odds.toString()[0]) {
      case '-':
        let tempCalc = Math.abs(e * data.odds * .01);
        let finalCalc = tempCalc - e;
        setToLose(e)
        setToWin((e - finalCalc).toFixed(2));
        break;
      default:
        setToLose(e);
        setToWin((e * data.odds * .01).toFixed(2));
        break;
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.persist();
    const userData = JSON.parse(localStorage.getItem('user'));
    const userId = userData._id;
    const gameKey = e.data.data.key;
    const betType = e.data.slipData.type;
    const team = e.data.slipData.team;
    const odds = e.data.slipData.odds;
    const outcome = null;
    const payout = null;
    let line = null;
    const status = 'LIVE';

    // function to post slip data based on slip type
    const slipData = async () => {
      switch (betType) {
        case 'MONEYLINE':
          await API.submitBetSlip({userId, gameKey, betType, team, line, odds, toLose, toWin, status, outcome, payout})
            .then(() => {
            })
            .catch(err => {
              console.log(err);
            });
          break;
        case 'SPREAD':
          line = e.data.slipData.line;
          await API.submitBetSlip({userId, gameKey, betType, team, line, odds, toLose, toWin, status, outcome, payout})
            .then(() => {
            })
            .catch(err => {
              console.log(err);
            });
          break;
        case 'TOTALS-OVER':
          line = e.data.slipData.line;
          await API.submitBetSlip({userId, gameKey, betType, team, line, odds, toLose, toWin, status, outcome, payout})
            .then(() => {
            })
            .catch(err => {
              console.log(err);
            });
          break;
        case 'TOTALS-UNDER':
          line = e.data.slipData.line;
          await API.submitBetSlip({userId, gameKey, betType, team, line, odds, toLose, toWin, status, outcome, payout})
            .then(() => {
            })
            .catch(err => {
              console.log(err);
            });
          break;
        default:
          console.log('none selected');
          break;
      }
    };

    slipData();
  };

  return (
    <div className='slip'>
      <div className='slip-title'>BET SLIP</div>
      {e.data.isLoading ? '' :
        <div className='slip-body'>
          <div className='slip-exit'>X</div>
          <div className='slip-away-team'>{e.data.data.awayTeam}</div>
          <div className='slip-home-team'>vs. {e.data.data.homeTeam}</div>
          {e.data.slipData.type === 'MONEYLINE' ?
            <div className='slip-bet-info'><b>MONEYLINE:</b> {e.data.slipData.team} ({e.data.slipData.odds})</div> :
          ''
          }
          {e.data.slipData.type === 'SPREAD' ?
            <div className='slip-bet-info'><b>SPREAD:</b> {e.data.slipData.team} {e.data.slipData.line} ({e.data.slipData.odds})</div> :
          ''
          }
          {e.data.slipData.type === 'TOTALS-UNDER' ?
            <div className='slip-bet-info'><b>TOTAL:</b> {e.data.slipData.team} U/{e.data.slipData.line} ({e.data.slipData.odds})</div> :
          ''
          }
          {e.data.slipData.type === 'TOTALS-OVER' ?
            <div className='slip-bet-info'><b>TOTAL:</b> {e.data.slipData.team} O/{e.data.slipData.line} ({e.data.slipData.odds})</div> :
          ''
          }
          <div className='slip-money'>
            <div className='slip-risk-money'>
              <label>TO RISK</label>
              <br />
              <br />
              <input type='text' className='slip-to-lose' value={toLose} placeholder={toLose} onChange={(event) => handleChange(event.target.value, e.data.slipData)} /> 
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
            <button onClick={(event) => handleSubmit(event)} className='slip-button' id='submit-slip'>PLACE BET</button>
          </div>
      </div>
      }
    </div>
  );
};

export default BetSlip;
