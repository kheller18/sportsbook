import axios from 'axios';
// import env from 'dotenv';

export default {
  getSports: () => {
    // const key = process.env.REACT_APP_SPORTSBOOK_API_KEY;
    // console.log(key);
    return axios.get(`https://api.the-odds-api.com/v3/sports?apiKey=`);
  },

  getLines: (sport) => {
    return axios.get(`https://api.the-odds-api.com/v3/odds?sport=${ sport }&region=us&apiKey=`);
  }
};
