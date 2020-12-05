const router = require('express').Router();
// const passport = require('../config/passport');
const passport = require('passport')
const tokens = require('../config/tokens');
const crypto = require('./crypto');
const BetSlip = require('../models/betSlip');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const connectEnsureLogin = require('connect-ensure-login');
const { createPrivateKey } = require('crypto');

router.post('/api/bet', (req , res) => {
  // console.log(req.body);
  console.log(req.body);
  BetSlip.create(req.body)
    .then(dbBetSlip => {
      console.log(dbBetSlip);
      res.json(dbBetSlip);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

// router.get('/api/bet', (req, res) => {
//   BetSlip.find({})
//     .then(dbBetSlip => {
//       console.log(dbBetSlip);
//       res.json(dbBetSlip);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

router.get('/api/bet', (req, res) => {
  console.log(req.body)
  BetSlip.find({
    // where: {
    //   betInfo.userId: 
    // }
  })
    .then(dbBetSlip => {
      console.log(dbBetSlip);
      res.json(dbBetSlip);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.post('/signup', (req, res) => {
  const Users = new User({
    username: req.body.email,
    firstName: req.body.firstName, 
    lastName: req.body.lastName,
    email: req.body.email, 
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode
  });

  User.register(Users, req.body.password, function(err, user) {
    if (err) {
      res.json({success: false, message:"creation unsuccessful", err})
    } else {
      // passport.authenticate('local')(req, res, function() {
      //   console.log('authenticated');
      // })
      res.json({success: true, message:'creation successful', user});
    }
  });
});

router.post('/login', (req, res) => {
  // console.log(req.body);
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      res.json({success: false, message: err})
    } else if (!user) {
      res.json({success: false, message: 'username or pass incorrect'})
    } else {
      // console.log(user);
      const token = jwt.sign({username: user.username}, 'shhhh', {expiresIn: '1h'});
      // console.log(token);
      res.json({success: true, message: "authentication successful", token, user});
    }
  }) (req, res);
});

module.exports = router;
