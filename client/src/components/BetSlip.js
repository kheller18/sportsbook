import React, { useEffect, useState } from 'react';
import '../styles/BetSlip.css';
import API from '../utils/API';
import Button from './Button';
import Input from './Input';
import SlipMoney from './SlipMoney';

const BetSlip = (props) => {
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
  // const handleChange = (e, data) => {
    
  //   console.log(data);
  //   console.log(e);
  //   console.log(data.slipData.odds.toString()[0]);
  //   switch (data.slipData.odds.toString()[0]) {
  //     case '-':
  //       console.log(data.slipData.odds)
  //       let tempCalc = Math.abs(e.target.value * data.slipData.odds * .01);
  //       console.log(tempCalc)
  //       let finalCalc = tempCalc - e.target.value;
  //       setToLose(e.target.value)
  //       console.log((e - finalCalc).toFixed(2))
  //       setToWin((e.target.value - finalCalc).toFixed(2));

  //       // setAllSlips({
  //       //   ...allSlips,
  //       //   toWin,
  //       //   toLose

  //       // })
  //       break;
  //     default:
  //       setToLose(e.target.value);
  //       console.log((e * data.slipData.odds * .01).toFixed(2))
  //       setToWin((e.target.value * data.slipData.odds * .01).toFixed(2));
  //       break;
  //   };
  //   console.log(allSlips);
  // };

  // const handleDelete = (e) => {
  //   console.log(e);
  //   console.log(e.target.id)
  //   console.log(slipList)
  //   let newList = slipList.filter((slip, id) => id != e.target.id);
  //   console.log(newList)
  //   setSlipList(newList);
  //   newSlips = {};
  // }


  // useEffect(() => {
  //   setAllSlips({
  //     ...allSlips,
  //     toWin,
  //     toLose
  //   })
  //   console.log(allSlips)
  // }, [handleChange])


  return(
    <div className='slip-body' key={props.id} id={props.id}>
      <Button
        onClick={props.onRemove}
        // onClick={() => props.onRemove(props.id)}
        id={props.id}
        type='button'
        className='slip-exit'
      >
        X
      </Button>
      <div className='slip-away-team'>{props.data.data.awayTeam}</div>
      <div className='slip-home-team'>vs. {props.data.data.homeTeam}</div>
      {props.data.slipData.type === 'MONEYLINE' ?
        <div className='slip-bet-info'><b>MONEYLINE:</b> {props.data.slipData.team} ({props.data.slipData.odds})</div> :
      ''
      }
      {props.data.slipData.type === 'SPREAD' ?
        <div className='slip-bet-info'><b>SPREAD:</b> {props.data.slipData.team} {props.data.slipData.line} ({props.data.slipData.odds})</div> :
      ''
      }
      {props.data.slipData.type === 'TOTALS-UNDER' ?
        <div className='slip-bet-info'><b>TOTAL:</b> {props.data.slipData.team} U/{props.data.slipData.line} ({props.data.slipData.odds})</div> :
      ''
      }
      {props.data.slipData.type === 'TOTALS-OVER' ?
        <div className='slip-bet-info'><b>TOTAL:</b> {props.data.slipData.team} O/{props.data.slipData.line} ({props.data.slipData.odds})</div> :
      ''
      }
      <div className='slip-money'>
        <div className='slip-risk-money'>
          <label>TO RISK</label>
          <br />
          <br />
          {/* <input type='text' className='slip-to-lose' value={props.toLose} placeholder={props.toLose} onChange={(event) => handleChange(event, props.data)} /> */}
          
          {/* <input type='text' className='slip-to-lose' name='to-lose' id={props.id} value={props.toLose} placeholder={props.toLose} onChange={(event) => handleChange(event, props.data)} /> */}
          <Input
              // onChange={(event) => handleChange(event.target.value, props.data.slipData)}
              // onChange={(e) => handleChange(e, props.data)}
              onChange={(event) => props.onChange(event, props.data.slipData)}
              className='slip-to-lose'
              id={props.id}
              type='text'
              value={props.data.slipData.toLose}
              placeholder={props.data.slipData.toLose}
          /> 
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
      
      {/* <div className='slip-buttons'>
        <Button
          onClick={props.onRemove}
          id={props.id}
          type='button'
          className='slip-button'
        >
          CANCEL
        </Button>
        <Button
          onClick={(event) => props.onSubmit(event)}
          className='slip-button'
          id='submit-slip'
        >
          PLACE BET
        </Button>
        {/* <button onClick={(event) => handleSubmit(event)} className='slip-button' id='submit-slip'>PLACE BET</button> */}
      {/* </div>  */}
    </div>
  );
};

export default BetSlip;
