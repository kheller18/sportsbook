import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import ActiveGames from './ActiveGames';
// import Nav from './Nav';
export const SportsContext = React.createContext();

const SportsData = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    API.getSports()
      .then(res => {
        // console.log(res.data.data);
        setSports(res.data.data);
      })
      .catch(err => {
          console.log(err);
      });
  }, []);

  return (
    <div>
      <SportsContext.Provider value={sports.map(sport => (sport.key))}>
        <ActiveGames />
        {/* <Nav /> */}
      </SportsContext.Provider>
    </div>
  );
};

export default SportsData;
