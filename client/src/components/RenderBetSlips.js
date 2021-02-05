import React, { useEffect, useState } from 'react';
import '../styles/BetSlip.css';
import API from '../utils/API';
import BetSlip from './BetSlip';
import Button from './Button';

const RenderBetSlips = (props) => {
  const [toLose, setToLose] = useState(undefined);
  const [toWin, setToWin] = useState();
  let newSlips = props.data;
  const slipSend = [];
  const [submitSlips, setSubmitSlips] = useState([]);
  const [slipList, setSlipList] = useState([]);

  const handleDelete = (e) => {
    console.log(e);
    console.log(e.target.id)
    console.log(slipList)
    let newList = slipList.filter((slip, id) => id != e.target.id);
    console.log(newList)
    setSlipList(newList);
    newSlips = {};
  }

  const handleClear = () => {
    newSlips = {};
    setSlipList([]);

  }

  const updateSlip = (id, attributes) => {
    let index = slipList.findIndex(x => x.id == id);
    let updateList = slipList.slice()
    console.log(index);
    if (index == -1) {

    } else {
      // setSlipList([...])
    }
  }

  const handleChange = (e, data) => {
    console.log(data);
    
    console.log(e);
    console.log(data.odds.toString()[0]);
    switch (data.odds.toString()[0]) {
      case '-':
        console.log(data.odds)
        let tempCalc = Math.abs(e.target.value * data.odds * .01);
        console.log(tempCalc)
        let finalCalc = tempCalc - e.target.value;
        setToLose(e.target.value)
        data.toLose = e.target.value;
        console.log((e.target.value - finalCalc).toFixed(2))
        setToWin((e.target.value - finalCalc).toFixed(2));
        data.toWin=(e.target.value - finalCalc).toFixed(2);
        console.log(data);
        // return data;
        let index = slipList.findIndex(x => console.log(x));
        if (slipList.length === 1) {
          slipList.map(slip => {
            console.log(slip)
          })
        } else {

        }
        let slice = slipList.slice(0, parseInt(e.target.id));
        console.log(slice);
        console.log(slipList)
        // console.log('slice', slice)
        break;
      default:
        setToLose(e.target.value);
        data.toLose = e.target.value;
        console.log((e.target.value * data.odds * .01).toFixed(2))
        setToWin((e.target.value * data.odds * .01).toFixed(2));
        data.toWin = (e.target.value * data.odds * .01).toFixed(2)
        console.log(slipList)
        break;
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.persist();
    console.log(slipList);
    const userData = JSON.parse(localStorage.getItem('user'));
    // const userId = userData._id;
    // const gameKey = props.data.data.key;
    // const betType = props.data.slipData.type;
    // const team = props.data.slipData.team;
    // const odds = props.data.slipData.odds;
    // const outcome = null;
    // const payout = null;
    // const toLose = null;
    // const toWin = null;
    // let line = null;
    // const status = 'LIVE';

    // function to post slip data based on slip type
    const slipData = async () => {
      // switch (betType) {
      //   case 'MONEYLINE':
      //     await API.submitBetSlip({userId, gameKey, betType, team, line, odds, toLose, toWin, status, outcome, payout})
      //       .then((res) => {
      //         console.log(res);
      //       })
      //       .catch(err => {
      //         console.log(err);
      //       });
      //     break;
      //   case 'SPREAD':
      //     line = props.data.slipData.line;
      //     await API.submitBetSlip({userId, gameKey, betType, team, line, odds, toLose, toWin, status, outcome, payout})
      //       .then((res) => {
      //         console.log(res);
      //       })
      //       .catch(err => {
      //         console.log(err);
      //       });
      //     break;
      //   case 'TOTALS-OVER':
      //     line = props.data.slipData.line;
      //     await API.submitBetSlip({userId, gameKey, betType, team, line, odds, toLose, toWin, status, outcome, payout})
      //       .then((res) => {
      //         console.log(res);
      //       })
      //       .catch(err => {
      //         console.log(err);
      //       });
      //     break;
      //   case 'TOTALS-UNDER':
      //     line = props.data.slipData.line;
      //     await API.submitBetSlip({userId, gameKey, betType, team, line, odds, toLose, toWin, status, outcome, payout})
      //       .then((res) => {
      //         console.log(res);
      //       })
      //       .catch(err => {
      //         console.log(err);
      //       });
      //     break;
      //   default:
      //     console.log('none selected');
      //     break;
      // }

      
      // slipList.map(slip => {
      //   console.log(slip)
      //   setSubmitSlips([...submitSlips, {
      //     userId: userData._id,
      //     gameKey: slip.data.key,
      //     betType: slip.slipData.type,
      //     team: slip.slipData.team,
      //     line: slip.slipData.line,
      //     odds: slip.slipData.odds,
      //     toLose: slip.slipData.toLose,
      //     toWin: slip.slipData.toWin,
      //     status: slip.slipData.status,
      //     outcome: slip.slipData.outcome,
      //     payout: slip.slipData.payout
      //   }])
      // });

      slipList.map(slip => {
        console.log(slip)
        slipSend.push({
          userId: userData._id,
          gameKey: slip.data.key,
          betType: slip.slipData.type,
          team: slip.slipData.team,
          line: slip.slipData.line,
          odds: slip.slipData.odds,
          toLose: slip.slipData.toLose,
          toWin: slip.slipData.toWin,
          status: slip.slipData.status,
          outcome: slip.slipData.outcome,
          payout: slip.slipData.payout
        })
      })

      await API.submitBetSlip(slipSend)
        .then((res) => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      


    };

    slipData();
  };

  

  useEffect(() => {
    // setSlips(slips);
    // const slips = props.data;
    // const [slipList, setSlipList] = useState();
    console.log('mounted')
    console.log(newSlips)
    if (newSlips === undefined || newSlips === {} || newSlips === null) {

    } else {
      setSlipList(slipList => [...slipList, newSlips])
      console.log("added")
      
    }
    console.log(slipList)
    // setSlips(slips)

  }, [newSlips]);

  return (
    <div className='slip'>
      <div className='slip-title'>BET SLIP</div>
      {(slipList === undefined || slipList.length === 0) ? '' :
        slipList.map((slip, i) => {
          return (
            <div>
              <BetSlip data={slip} id={i} onRemove={handleDelete} onSubmit={handleSubmit} onChange={handleChange} onUpdate={updateSlip} toWin={toWin}/>
            </div>
          )
        })
      }
      <div className='slip-buttons'>
        <Button
          onClick={handleClear}
          id={props.id}
          type='button'
          className='slip-button'
        >
          CANCEL
        </Button>
        <Button
          onClick={handleSubmit}
          className='slip-button'
          id='submit-slip'
        >
          PLACE BET
        </Button>
        {/* <button onClick={(event) => handleSubmit(event)} className='slip-button' id='submit-slip'>PLACE BET</button> */}
      </div>

    </div>
  )
};

export default RenderBetSlips;

// take the value from the slip, set it to the array here, then re render the whole page using useffect dependency