import React, {useContext, useState, useEffect} from 'react';
import '../styles/Nav.css';
import { SportsContext } from './ActiveSports';
import Button from './Button';
import ActiveGames from './ActiveGames';
import { GlobalContextProvider } from '../utils/GlobalContext';

import API from '../utils/API';

const Nav = (props) => {
  // const sports = useContext(SportsContext);
  // const sports = useContext(GlobalContextProvider);
  // console.log(props)
  const [sports, setSports] = useState([]);
  const [sportsBtn, setSportsBtn] = useState('');
  const [click, setClick] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  // console.log(props)
  console.log(sports);

  const handleClick = (e, sport) => {
    e.preventDefault();
    e.persist();
    console.log(e);
    console.log(sport);

    setSportsBtn(sport);
    setClick(false)
    setIsLoading(false);
    // return (<ActiveGames data={sport} />)
    props.passSportData(sport.key);
  }

  useEffect(() => {
    // console.log(sports);
    // setIsLoading(false);
    const fetchData = async () => {
      await (API.getSports())
        .then(res => {
          console.log(res.data.data);
          setSports(res.data.data);
          // sports.map((sport) => ({
          //   active: sport.active,
          //   details: sport.details,
          //   group: sport.group,
          //   has_outrights: sport.has_outrights,
          //   key: sport.key,
          //   title: sport.title,
          // }))

          setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
        });
    }
    fetchData();
  }, []);

  return (
    // <GlobalContextProvider>
      <div className='nav-container'>
        <div className='nav-header'>Sports</div>
        {isLoading ? '' :
          sports.map((sport, i) => {
            if (sport.key !== 'aussierules_afl' && sport.key !== 'cricket_test_match') {
              return (
                <div key={sport.key}>
                  <Button
                    onClick={(e) => handleClick(e, sport)}
                    data={sport}
                    className='nav-button'
                    // id='away-moneyline'
                  >
                    {sport.title}
                  </Button>
                </div>
              );
            }
          })
        }
      </div>
      /* {click ? '' : <ActiveGames data={{sport: sportsBtn, loading: isLoading}} />} */

    // </GlobalContextProvider>
  );
};

export default Nav;
