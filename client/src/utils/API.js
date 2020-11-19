import axios from 'axios';

export default {
  getSports: () => {
    // const key = process.env.REACT_APP_SPORTSBOOK_API_KEY;
    // console.log(key);
    return axios.get(`https://api.the-odds-api.com/v3/sports?apiKey=b1b145ddd8b89c13687841bd27fab349`);
  },

  getLines: (sport) => {
    return axios.get(`https://api.the-odds-api.com/v3/odds?&apiKey=b1b145ddd8b89c13687841bd27fab349&sport=${ sport }&region=us&mkt=h2h&oddsFormat=american`);
  }
};
