import React, {useContext, useState, useEffect} from 'react';
import '../styles/Nav.css';
import { SportsContext } from './ActiveSports';
import Button from './Button';
import ActiveGames from './ActiveGames';
// import API from '../utils/API';

const Nav = (props) => {
  const sports = useContext(SportsContext);
  const [sportsBtn, setSportsBtn] = useState('');
  const [click, setClick] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  console.log(props)
  console.log(sports);

  const handleClick = (e, sport) => {
    e.preventDefault();
    e.persist();
    console.log(e);
    console.log(sport);

    setSportsBtn(sport);
    setClick(false)
    setIsLoading(false);
    // <ActiveGames data={sport} />
  }

  useEffect(() => {
    // console.log(sports);
    // setIsLoading(false);
  }, [])

  return (
    <div className='nav-container'>
      <div className=''>Sports</div>
        {props.data.loading ? '' : sports.map(sport => {
          return(
            <Button
              onClick={(e) => handleClick(e, sport)}
              // onClick={(e) => <ActiveGames data={e.target.innerHTML} />}
              // value={{
              //     slipInfo: {
              //       team: game.awayTeam,
              //       odds: game.awayMoneyLine
              //     }
              // }}
              data={sport}
              className='nav-button'
              // id='away-moneyline'
              >
              {sport}
            </Button>
          );
        })}
      {click ? '' : <ActiveGames data={{sport: sportsBtn, loading: isLoading}} />}
    </div>
  );
};

export default Nav;
