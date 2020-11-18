import React, { useEffect, useState, useContext } from 'react';
import API from '../utils/API';
import ActiveLines from './ActiveLines';
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
      {/* <ul>
        {sports.map(sport => (
          <li key={sport.key}>{sport.key}</li>
        ))}
      </ul> */}
      <SportsContext.Provider value={sports.map(sport => (sport.key))}>
        <ActiveLines />
      </SportsContext.Provider>
    </div>
  );
};

export default SportsData;
