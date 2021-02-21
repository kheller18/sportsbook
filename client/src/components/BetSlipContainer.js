import React, {useContext, useState, useEffect} from 'react';
import Button from './Button';
// import API from '../utils/API';

const BetSlipContainer = (props) => {
  console.log(props)
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

  useEffect(() => {
    // console.log(sports);
    // setIsLoading(false);
  }, [])

  return (
    <div className='slip-container'>
      <div className='slip-title'>BET SLIP</div>
      <div className='slip-tabs'>
        <div className='slip-tab'>CART</div>
        <div className='slip-tab'>PENDING</div>
      </div>
    </div>
  );
};

export default BetSlipContainer;
