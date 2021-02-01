import React, { useEffect, useState } from 'react';
import '../styles/BetSlip.css';
import API from '../utils/API';

const BetSlip = (props) => {
  const [toLose, setToLose] = useState(undefined);
  const [toWin, setToWin] = useState();
  // const [slip, setSlip] = useState([]);
  const slips = props.data;
  console.log(slips);
  console.log(props);

  useEffect(() => {

  }, [props]);

  const handleDelete = () => {
    
  }

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
    const gameKey = props.data.data.key;
    const betType = props.data.slipData.type;
    const team = props.data.slipData.team;
    const odds = props.data.slipData.odds;
    const outcome = null;
    const payout = null;
    let line = null;
    const status = 'LIVE';

    // function to post slip data based on slip type
    const slipData = async () => {
      switch (betType) {
        case 'MONEYLINE':
          await API.submitBetSlip({userId, gameKey, betType, team, line, odds, toLose, toWin, status, outcome, payout})
            .then((res) => {
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
          break;
        case 'SPREAD':
          line = e.data.slipData.line;
          await API.submitBetSlip({userId, gameKey, betType, team, line, odds, toLose, toWin, status, outcome, payout})
            .then((res) => {
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
          break;
        case 'TOTALS-OVER':
          line = e.data.slipData.line;
          await API.submitBetSlip({userId, gameKey, betType, team, line, odds, toLose, toWin, status, outcome, payout})
            .then((res) => {
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
          break;
        case 'TOTALS-UNDER':
          line = e.data.slipData.line;
          await API.submitBetSlip({userId, gameKey, betType, team, line, odds, toLose, toWin, status, outcome, payout})
            .then((res) => {
              console.log(res);
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
      {(slips === undefined || slips.length === 0) ? '' :
        slips.map(slip => {
          return(
            <div className='slip-body'>
              <button type='button' className='slip-exit'>X</button>
              <div className='slip-away-team'>{slip.data.awayTeam}</div>
              <div className='slip-home-team'>vs. {slip.data.homeTeam}</div>
              {slip.slipData.type === 'MONEYLINE' ?
                <div className='slip-bet-info'><b>MONEYLINE:</b> {slip.slipData.team} ({slip.slipData.odds})</div> :
              ''
              }
              {slip.slipData.type === 'SPREAD' ?
                <div className='slip-bet-info'><b>SPREAD:</b> {slip.slipData.team} {slip.slipData.line} ({slip.slipData.odds})</div> :
              ''
              }
              {slip.slipData.type === 'TOTALS-UNDER' ?
                <div className='slip-bet-info'><b>TOTAL:</b> {slip.slipData.team} U/{slip.slipData.line} ({slip.slipData.odds})</div> :
              ''
              }
              {slip.slipData.type === 'TOTALS-OVER' ?
                <div className='slip-bet-info'><b>TOTAL:</b> {slip.slipData.team} O/{slip.slipData.line} ({slip.slipData.odds})</div> :
              ''
              }
              <div className='slip-money'>
                <div className='slip-risk-money'>
                  <label>TO RISK</label>
                  <br />
                  <br />
                  <input type='text' className='slip-to-lose' value={toLose} placeholder={toLose} onChange={(event) => handleChange(event.target.value, slip.slipData)} />
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

            // <div>{slip.data.key}</div>

          )
        })
      }
    </div>
  );
      //   <div className='slip-body'>
      //     <div className='slip-exit'>X</div>
      //     <div className='slip-away-team'>{props.data.data.awayTeam}</div>
      //     <div className='slip-home-team'>vs. {props.data.data.homeTeam}</div>
      //     {props.data.slipData.type === 'MONEYLINE' ?
      //       <div className='slip-bet-info'><b>MONEYLINE:</b> {props.data.slipData.team} ({props.data.slipData.odds})</div> :
      //     ''
      //     }
      //     {props.data.slipData.type === 'SPREAD' ?
      //       <div className='slip-bet-info'><b>SPREAD:</b> {props.data.slipData.team} {props.data.slipData.line} ({props.data.slipData.odds})</div> :
      //     ''
      //     }
      //     {props.data.slipData.type === 'TOTALS-UNDER' ?
      //       <div className='slip-bet-info'><b>TOTAL:</b> {props.data.slipData.team} U/{props.data.slipData.line} ({props.data.slipData.odds})</div> :
      //     ''
      //     }
      //     {props.data.slipData.type === 'TOTALS-OVER' ?
      //       <div className='slip-bet-info'><b>TOTAL:</b> {props.data.slipData.team} O/{props.data.slipData.line} ({props.data.slipData.odds})</div> :
      //     ''
      //     }
      //     <div className='slip-money'>
      //       <div className='slip-risk-money'>
      //         <label>TO RISK</label>
      //         <br />
      //         <br />
      //         <input type='text' className='slip-to-lose' value={toLose} placeholder={toLose} onChange={(event) => handleChange(event.target.value, props.data.slipData)} /> 
      //       </div>
      //       <div className='slip-win-money'>
      //         <label>TO WIN</label>
      //         <br />
      //         <br />
      //         <div className='slip-to-win'>{toWin}</div>
      //       </div>
      //     </div>
      //     <div className='slip-buttons'>
      //       <button className='slip-button'>CANCEL</button>
      //       <button onClick={(event) => handleSubmit(event)} className='slip-button' id='submit-slip'>PLACE BET</button>
      //     </div>
      // </div>
  //     }
  //   </div>
  // );

};

export default BetSlip;
