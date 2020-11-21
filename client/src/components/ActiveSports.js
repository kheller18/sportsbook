import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import ActiveGames from './ActiveGames';
// import Nav from './Nav';
export const SportsContext = React.createContext();

function ActiveSports() {
  const [sports, setSports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      await (API.getSports())
        .then(res => {
          console.log(res.data.data);
          setSports(res.data.data);
          setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
        });

      // const getActiveSports = await (API.getSports())
      //   .then(results => {

      //   })

      // setSports(getActiveSports);
      
      
      // .then(res => {
      //   console.log(res.data.data);
      //   setSports(res.data.data);
      //   setIsLoading(false);
      // })
      // .catch(err => {
      //     console.log(err);
      // });

      
    }
    // API.getSports()
    //   .then(res => {
    //     // console.log(res.data.data);
    //     setSports(res.data.data);
    //   })
    //   .catch(err => {
    //       console.log(err);
    //   });
    fetchData();
  }, [setSports]);

  return (
    <div>
      {isLoading ? '' : 
        <SportsContext.Provider value={sports.map(sport => (sport.key))}>
          <ActiveGames />
        </SportsContext.Provider>
      }
    </div>
  );
};

export default ActiveSports;
