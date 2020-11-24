const router = require('express').Router();
const BetSlip = require('../models/betSlip.js');

router.post('/api/bet', ({body}, res) => {
  BetSlip.create(body)
    .then(dbBetSlip => {
      res.json(dbBetSlip);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

module.exports = router;
