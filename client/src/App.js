import React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import './App.css';
// import ActiveSports from './components/ActiveSports';
import Header from './components/Header';
import Footer from './components/Footer';
// import UserDashboard from './components/UserDashboard';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Main from './components/Main';
// import API from './utils/API';
// import Router from './components/Router';
// import Nav from './components/Nav';

function App() {
  // function requireAuth(nextState, replace, next) {
  //   if (!API.isLoggedIn()) {
  //     console.log('not logged in');
  //     replace({
  //       pathname: '/login',
  //       state: {nextPathname: nextState.location.pathname}
  //     });
  //   };
  //   next();
  // };

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/login' exact component={Login} />
          <Route path='/signup' exact component={SignUp} /> 
          {/* <Route path='/members' exact component={ActiveSports} onEnter={requireAuth} /> */}
          {/* <Route path='/members' exact authenticated={API.isLoggedIn}  component={ActiveSports} /> */}
          <PrivateRoute path='/members' exact component={Main} />
          <Route path='*' component={Login} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
