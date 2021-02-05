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
      <div className='nav-header'>Sports</div>
        {props.data.loading ? '' : sports.map((sport, i) => {
          return(
            // <div key={sport}>
              <Button
                onClick={(e) => handleClick(e, sport)}
                data={sport}
                className='nav-button'
                // id='away-moneyline'
              >
                {sport}
              </Button>
            
          );
          {/* <div> */}
        })}
      {click ? '' : <ActiveGames data={{sport: sportsBtn, loading: isLoading}} />}
    </div>
  );
};

export default Nav;
