import React, { useEffect, useState, useContext } from 'react';
import API from '../utils/API';
import { SportsContext } from './ActiveSports';


const ActiveLines = () => {
  const [lines, setLines] = useState([]);
  const sports = useContext(SportsContext);

  useEffect(() => {
    API.getLines(sports[1])
      .then(res => {
        console.log(res.data.data[0].sites[6].odds.h2h[0]);
        setLines(res.data.data[0].sites[6].odds.h2h[0]);
        console.log(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [sports]);

  return (
    <div>
      {lines}
    </div>
  );
};

export default ActiveLines;
