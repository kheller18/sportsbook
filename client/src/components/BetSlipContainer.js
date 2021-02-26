import React, {useContext, useState, useEffect} from 'react';
import BetSlipConfirm from './BetSlipConfirm';
import Button from './Button';
import RenderBetSlips from './RenderBetSlips'
import '../styles/BetSlipContainer.css';
import API from '../utils/API';
// import API from '../utils/API';

// have to control the slips here otherwise you can't pass back and forth correctly.. pass to RenderBetSlips for the list 
const BetSlipContainer = (props) => {
  console.log(props)
  console.log(props.data)
  const [slipState, setSlipState] = useState('cart')
  const [slipData, setSlipData] = useState();
  const [betStatus, setBetStatus] = useState();
  const [activeSlips, setActiveSlips] = useState([]);
  const [clickedData, setClickedData] = useState(props.data)
  // let clickedData = props.data
  console.log(clickedData)

  // if (slipData === [] || slipData.length < 1) {
  //   console.log('slipped')
  //   clickedData=[]
  //   // slipData=[]
  // }
  
  console.log(slipState);
  console.log(slipData);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e)
    console.log(e.target)
    const userData = JSON.parse(localStorage.getItem('user'));
    API.getBets(userData._id)
      .then(res => {
        // setActiveSlips(res)
        console.log(res)
      })
      .catch(err => {
        console.log(err )
      })
    setSlipState('active')

  }

  useEffect(() => {
    // console.log(sports);
    // setIsLoading(false);
    // console.log(slipState)
    // console.log('update')
    // if (slipState === 'submitted') {
    //   console.log('inside here')
    //   // setSlipState('default')
    //   // setTimeout(() => {
    //   //   setSlipState('default');
    //   // }, 4000);
    // }
    // props.data=[];

    // props.updateClickData([])
    // console.log(clickedData)
    // // setSlipData([])
    // setClickedData() /////
    // console.log(slipData)
    setClickedData(props.data)
    if (slipData === null) {
      props.data=[]
      console.log('null')
    }
    // props.
    if (slipState === 'submitted') {
      console.log('correct')
      props.data = [];
    }
  }, [setSlipState, props.data]) //setSlipState props.data

  return (
    <div className='slip-container'>
      <div className='slip-title'>BET SLIP</div>
      <div className='slip-tabs'>
        <Button
          onClick={handleClick}
          id='slip-tab-cart'
          type='button'
          className='slip-tab'
        >
        CART
        </Button>
        <Button
          onClick={handleClick}
          id='slip-tab-active'
          type='button'
          className='slip-tab'
        >
        ACTIVE
        </Button>
      </div>

      {slipState === 'cart' ?
       <RenderBetSlips passSlipState={setSlipState} passSlipData={setSlipData} passClickedData={setClickedData} data={clickedData} />
      :
      ''
      }

      {
        slipState === 'active' ?
          <BetSlipConfirm data={slipData} passSlipState={setSlipState} passSlipData={setSlipData} />
        : ''
      }
    </div>
  );
};

export default BetSlipContainer;
