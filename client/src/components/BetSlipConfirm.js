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

  const [toLose, setToLose] = useState(undefined);
  const [toWin, setToWin] = useState();
  const [allSlips, setAllSlips] = useState({
    userId: null,
    gameKey: props.data.data.key,
    betType: props.data.slipData.type,
    team: props.data.slipData.team,
    odds: props.data.slipData.odds,
    outcome: null,
    payout: null,
    toLose: props.data.slipData.toLose,
    toWin: props.data.slipData.toWin,
    line: null
  })

  console.log(allSlips);


  return(
    <div className='slip-confirm-body' key={props.id} id={props.id}>
      <div className='slip-confirm-away-team'>{props.data.data.awayTeam}</div>
      <div className='slip-confirm-home-team'>vs. {props.data.data.homeTeam}</div>
      {props.data.slipData.type === 'MONEYLINE' ?
        <div className='slip-confirm-bet-info'><b>MONEYLINE:</b> {props.data.slipData.team} ({props.data.slipData.odds})</div> :
      ''
      }
      {props.data.slipData.type === 'SPREAD' ?
        <div className='slip-confirm-bet-info'><b>SPREAD:</b> {props.data.slipData.team} {props.data.slipData.line} ({props.data.slipData.odds})</div> :
      ''
      }
      {props.data.slipData.type === 'TOTALS-UNDER' ?
        <div className='slip-confirm-bet-info'><b>TOTAL:</b> {props.data.slipData.team} U/{props.data.slipData.line} ({props.data.slipData.odds})</div> :
      ''
      }
      {props.data.slipData.type === 'TOTALS-OVER' ?
        <div className='slip-confirm-bet-info'><b>TOTAL:</b> {props.data.slipData.team} O/{props.data.slipData.line} ({props.data.slipData.odds})</div> :
      ''
      }
      <div className='slip-money'>
        <div className='slip-risk-money'>
          <label>RISK</label>
          <br />
          <br />
          {/* <input type='text' className='slip-to-lose' value={props.toLose} placeholder={props.toLose} onChange={(event) => handleChange(event, props.data)} /> */}
          {/* <input type='text' className='slip-to-lose' name='to-lose' id={props.id} value={props.toLose} placeholder={props.toLose} onChange={(event) => handleChange(event, props.data)} /> */}
        </div>
        <div className='slip-win-money'>
          <label>TO WIN</label>
          <br />
          <br />
          {/* <Input
            className='slip-to-win'
            type='text'
            value={toWin}
          /> */}
          <div className='slip-to-win'>{props.data.slipData.toWin}</div>
        </div>
      </div>
    </div>
  );
};

export default BetSlipConfirm;
