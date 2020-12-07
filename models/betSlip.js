const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const betSlipSchema = new Schema(
  {
    betInfo: {
      type: Object
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);

const BetSlip = mongoose.model("BetSlip", betSlipSchema);

module.exports = BetSlip;
