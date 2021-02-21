import React, { useEffect, useState } from 'react';
// import '../styles/BetSlip.css';
import API from '../utils/API';
import Button from './Button';
import Input from './Input';

const BetSlipConfirm = (props) => {
  console.log('inside')
  console.log(props)
  // props.toWin = toWin
  // props.toLose = toLose

  // const [toLose, setToLose] = useState(undefined);
  // const [toWin, setToWin] = useState();
  const slips = props.data;
  console.log(slips)
  // const [allSlips, setAllSlips] = useState({
  //   userId: null,
  //   gameKey: props.data.data.key,
  //   betType: props.data.slipData.type,
  //   team: props.data.slipData.team,
  //   odds: props.data.slipData.odds,
  //   outcome: null,
  //   payout: null,
  //   toLose: props.data.slipData.toLose,
  //   toWin: props.data.slipData.toWin,
  //   line: null
  // })

  // console.log(allSlips);
  useEffect(() => {
      setTimeout(() => {
        props.passSlipState('default');
        props.passSlipData([])
      }, 4000);


  }, []);


  return (
    //key={props.id} id={props.id}
    <div>
      {slips.map(slip => {
        return (
          <div className='slip-confirm-body'>
            <div className='slip-confirm-away-team'>{slip.data.awayTeam}</div>
            <div className='slip-confirm-home-team'>vs. {slip.data.homeTeam}</div>
            {slip.slipData.type === 'MONEYLINE' ?
              <div className='slip-confirm-bet-info'><b>MONEYLINE:</b> {slip.slipData.team} ({slip.slipData.odds})</div> :
            ''
            }
            {slip.slipData.type === 'SPREAD' ?
              <div className='slip-confirm-bet-info'><b>SPREAD:</b> {slip.slipData.team} {slip.slipData.line} ({slip.slipData.odds})</div> :
            ''
            }
            {slip.slipData.type === 'TOTALS-UNDER' ?
              <div className='slip-confirm-bet-info'><b>TOTAL:</b> {slip.slipData.team} U/{slip.slipData.line} ({slip.slipData.odds})</div> :
            ''
            }
            {slip.slipData.type === 'TOTALS-OVER' ?
              <div className='slip-confirm-bet-info'><b>TOTAL:</b> {slip.slipData.team} O/{slip.slipData.line} ({slip.slipData.odds})</div> :
            ''
            }
            <div className='slip-money'>
              <div className='slip-risk-money'>
                <label>RISK</label>
                <br />
                <br />
                <div className='slip-to-lose'>{slip.slipData.toLose}</div>
              </div>
              <div className='slip-win-money'>
                <label>TO WIN</label>
                <br />
                <br />
                <div className='slip-to-win'>{slip.slipData.toWin}</div>
              </div>
            </div>  
          </div>
        )      
      })}
    </div>
  );
};

export default BetSlipConfirm;
