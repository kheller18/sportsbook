import axios from 'axios';
const aws = require('aws-sdk');

export default {
  // getSports: () => {
  //   // const key = process.env.REACT_APP_SPORTSBOOK_API_KEY;
  //   return axios.get(`https://api.the-odds-api.com/v3/sports?apiKey=c5e2d28e6740946d4477ea4d7107dbe6`);
  // },

  // getLines: (sport, lineType) => {
  //   switch(lineType) {
  //     case 'moneyline':
  //       return axios.get(`https://api.the-odds-api.com/v3/odds?&apiKey=830ac2ee276b5d7d96c261fb3ed3028d&sport=${ sport }&region=us&mkt=h2h&oddsFormat=american`);
  //     case 'spread':
  //       return axios.get(`https://api.the-odds-api.com/v3/odds?&apiKey=830ac2ee276b5d7d96c261fb3ed3028d&sport=${ sport }&region=us&mkt=spreads&oddsFormat=american`);
  //     case 'totals':
  //       return axios.get(`https://api.the-odds-api.com/v3/odds?&apiKey=830ac2ee276b5d7d96c261fb3ed3028d&sport=${ sport }&region=us&mkt=totals&oddsFormat=american`);
  //     default:
  //       return axios.get(`https://api.the-odds-api.com/v3/odds?&apiKey=830ac2ee276b5d7d96c261fb3ed3028d&sport=${ sport }&region=us&mkt=h2h&oddsFormat=american`);
  //     }
  // },

  getSports: () => {
    let s3 = new aws.S3({
      apiKey: process.env.REACT_APP_API_KEY
    });
    console.log(s3);
    return axios.get(`https://api.the-odds-api.com/v3/sports?apiKey=${ process.env.REACT_APP_API_KEY }`);
  },

  getLines: (sport, lineType) => {
    let s3 = new aws.S3({
      apiKey: process.env.REACT_APP_API_KEY
    });
    console.log(s3);
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


  submitBetSlip: (betInfo) => {
    console.log(betInfo);
    return axios.post('/api/bet', {
      betInfo
    });
  },

  // getBets: () => {
  //   return axios.get('/api/bet');
  // },

  getBets: (userId) => {
    return axios.get('/api/bet', {
      userId
    });
  },


  signup: (userData) => {
    console.log(userData);
    return axios.post('/signup', userData);
  },

  login: (username, password) => {
    // console.log(email);
    // console.log(password);
    return axios.post('/login', {
      username,
      password
    })
      .then((response) => {
        console.log(response);
        // console.log(response.data.accessToken);
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
          // console.log('logged in wheres user');
        }
        return response;
      })
      .catch(err => {
        console.log(err);
      });
  },

  isLoggedIn: () => {
    // const checkLogin = JSON.parse(localStorage.getItem('user'));
    if (localStorage.getItem('user') === null) {
      // console.log('false');
      return false;
    }
    return true;
  },

  logout: () => {
    localStorage.removeItem('user');
  }
};
