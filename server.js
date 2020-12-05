const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose')
const routes = require('./routes/api.js');
const passport = require('passport');
const User = require('./models/user');
const LocalStrategy = require('passport-local').Strategy;

// const db = require('./models');
// const passport = require('./config/passport');
// const routes1 = require('./routes/user-routes.js')


const PORT = process.env.PORT || 3001;
const app = express();
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});



// const jsonParser = bodyParser.json();
// const urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(expressSession);
// const passport = require('./config/passport')(User);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// app.use(routes);


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/sportsbook", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
)
  .then(
    console.log("connected"),
    app.use(routes)
  )
  .catch(err => console.log(err));

// passport.use(User.createStrategy());

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
// app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Send every request to the React app
// app.use(routes1);
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
