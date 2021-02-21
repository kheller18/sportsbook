import React, {useContext, useState, useEffect} from 'react';
import BetSlipConfirm from './BetSlipConfirm';
import Button from './Button';
import RenderBetSlips from './RenderBetSlips'
// import API from '../utils/API';

const BetSlipContainer = (props) => {
  console.log(props)
  const [slipState, setSlipState] = useState('active')
  const [slipData, setSlipData] = useState()
  const [betStatus, setBetStatus] = useState()
  // const sports = useContext(SportsContext);
  // const [sportsBtn, setSportsBtn] = useState('');
  // const [click, setClick] = useState(true);
  // const [isLoading, setIsLoading] = useState(true);
  // console.log(props)
  // console.log(sports);

  // const handleClick = (e, sport) => {
  //   e.preventDefault();
  //   e.persist();
  //   console.log(e);
  //   console.log(sport);

  //   setSportsBtn(sport);
  //   setClick(false)
  //   setIsLoading(false);
  //   // <ActiveGames data={sport} />
  // }
  console.log(slipState);
  console.log(slipData);
  useEffect(() => {
    // console.log(sports);
    // setIsLoading(false);
    console.log(slipState)
    console.log('update')
    if (slipState === 'submitted') {
      console.log('inside here')
      // setSlipState('default')
      // setTimeout(() => {
      //   setSlipState('default');
      // }, 4000);
    }
  }, [setSlipState]) //setSlipState

  return (
    <div className='slip-container'>
      <div className='slip-title'>BET SLIP</div>
      <div className='slip-tabs'>
        <div className='slip-tab'>CART</div>
        <div className='slip-tab'>PENDING</div>
      </div>
      {slipState === 'active' ?
       <RenderBetSlips passSlipState={setSlipState} passSlipData={setSlipData} data={props.data} />
      :
      ''
      }
      {
        slipState === 'submitted' ?
          <BetSlipConfirm data={slipData} passSlipState={setSlipState} passSlipData={setSlipData} />
        : ''
      }
    </div>
  );
};

export default BetSlipContainer;
