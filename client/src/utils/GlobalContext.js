import React, { createContext, useEffect } from 'react';
import API from './API';

const GlobalContext = createContext();
// let aSports;
// const liveSports = API.getSports()
//   .then(res => {
//     console.log(res);
//   })
// console.log(liveSports)
// let userId = 0;
// if (currentUser) {
//     userId = currentUser.id;
// }

// const io = require('socket.io-client');
// const socket = io({
//     withCredentials: true,
//     extraHeaders: {
//         'hand-me-ups': 'header-content',
//         'x-current-user': userId,
//     },
// });
// const fetchData = async () => {
//   let sports;
//   await (API.getSports())
//     .then(res => {
//       console.log(res.data.data);
//       sports = res.data.data;
//       // setSports(res.data.data);
//       // setIsLoading(false);
//       // return res.data.data;
//     })
//     .catch(err => {
//         console.log(err);
//     });

//   return sports;

// }


export const GlobalContextProvider = (props) => {
    // const sports = fetchData();
    // let aSports;
    // console.log(sports)
    // fetchData()
    // const fetchData = async () => {
    //   await (API.getSports())
    //     .then(res => {
    //       console.log(res.data.data);
    //       sports = res.data.data;
    //       return res.data.data;
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // }
    useEffect(() => {

    }, [])
    // const sports = API.getSports()
    //   .then(res => {
    //     console.log(res)
    //     aSports = res.data.data;
    //     return res.data.data;
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })

    // console.log(aSports)
    // console.log()
    const liveSports = API.getSports()
      .then(res => {
        console.log(res);
      })
    console.log(liveSports)

    console.log(liveSports)
    return (
        <GlobalContext.Provider
          value={
              liveSports
          }
        >
            {/* eslint-disable-next-line react/prop-types*/}
          {props.children}
        </GlobalContext.Provider>
    );
};

// import PropTypes from 'prop-types';

// GlobalContext.propTypes = {
//     children: PropTypes.node,
// };

import PropTypes from 'prop-types';

GlobalContext.propTypes = {
  children: PropTypes.node,
};

export default GlobalContext;