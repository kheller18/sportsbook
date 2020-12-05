const mongoose = require('mongoose');
const db = require('../models/betSlip');

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/sportsbook", 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

let betSeed = [
  {
    date: new Date().setDate(new Date().getDate()-10),
    betInfo: 
      {
        type: 'moneyline',
        awayTeam: 'hawks'
      }
    
  },
  {
    date: new Date().setDate(new Date().getDate()-10),
    betInfo: 
      {
        type: 'moneyline',
        awayTeam: '49ers'
      }
    
  }
];

// db.BetSlip.deleteMany({})
//   .then(() => db.BetSlip.collection.insertMany(betSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

db.insertMany(betSeed)
  .then(data => {
    console.log(data);
    // console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
// module.exports = db;
