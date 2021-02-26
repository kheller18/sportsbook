import axios from 'axios';

export default {
  //call to get active sports to call for "getLines"
  getSports: () => {
    return axios.get(`https://api.the-odds-api.com/v3/sports?apiKey=${ process.env.REACT_APP_API_KEY }`);
  },

  // call to get different api lines depending on sports and linetype
  getLines: (sport, lineType) => {
    switch(lineType) {
      case 'moneyline':
        return axios.get(`https://api.the-odds-api.com/v3/odds?&apiKey=${ process.env.REACT_APP_API_KEY }&sport=${ sport }&region=us&mkt=h2h&oddsFormat=american`);
      case 'spread':
        return axios.get(`https://api.the-odds-api.com/v3/odds?&apiKey=${ process.env.REACT_APP_API_KEY }&sport=${ sport }&region=us&mkt=spreads&oddsFormat=american`);
      case 'totals':
        return axios.get(`https://api.the-odds-api.com/v3/odds?&apiKey=${ process.env.REACT_APP_API_KEY }&sport=${ sport }&region=us&mkt=totals&oddsFormat=american`);
      default:
        return axios.get(`https://api.the-odds-api.com/v3/odds?&apiKey=${ process.env.REACT_APP_API_KEY }&sport=${ sport }&region=us&mkt=h2h&oddsFormat=american`);
      }
  },

  // submits a bet
  submitBetSlip: (betInfo) => {
    return axios.post('/api/bet', {
      betInfo
    }); 
  },

  // gets bets per user
  getBets: (userId) => {
    return axios.get('/api/bet', {
      userId
    });
  },

  // getUserBets: (userId) => {
  //   return axios.get('/api/bet', {
  //     userId
  //   });
  // },

  // post for a new user
  signup: (userData) => {
    return axios.post('/signup', userData);
  },

  // posts for logging in
  login: (username, password) => {
    return axios.post('/login', {
      username,
      password
    })
      .then((response) => {
        if (response.data.token) {
          console.log(response.data)
          localStorage.setItem('user', JSON.stringify(response.data.user)); // define what is passed back
        }
        return response;
      })
      .catch(err => {
        console.log(err);
      });
  },

  // checks if user is logged in
  isLoggedIn: () => {
    if (localStorage.getItem('user') === null) {
      return false;
    }
    return true;
  },

  // logs user out
  logout: () => {
    localStorage.removeItem('user');
  }
};
