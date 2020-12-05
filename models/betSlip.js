const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const betSlipSchema = new Schema(
  {
    // type: {
    //   type: String,
    //   trim: true
    // },
    betInfo: {
      type: Object
    },
    // homeTeam: {
    //   type: String,
    //   trim: true
    // },
    // lineValue: {
    //   type: Number,
    //   trim: true
    // },
    // toRisk: {
    //   type: Number,
    //   trim: true
    // },
    // toWin: {
    //   type: Number,
    //   trim: true
    // },
    date: {
      type: Date,
      default: Date.now
    }
  }
);

const BetSlip = mongoose.model("BetSlip", betSlipSchema);

module.exports = BetSlip;
