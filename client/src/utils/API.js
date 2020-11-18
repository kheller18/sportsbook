import axios from 'axios';

export default {
  getSports: () => {
    return axios.get(`https://api.the-odds-api.com/v3/sports?apiKey=${ process.env.REACT_APP_SPORTSBOOK_API_KEY }`)
  }
};
