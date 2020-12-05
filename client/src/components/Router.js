// import React from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import API from '../utils/API';
// import Login from './Login';
// import SignUp from './SignUp';
// import ActiveLines from './ActiveLines';

// const Router = () => {
//   const PrivateRoute = ({ component, ...options }) => {
//     if (API.getCurrentUser()) {
//       return <Route {...options} component={component} />;
//     }
//     return <Redirect to={'/login'} />;
//   };
  
//   PrivateRoute.propTypes = {
//     options: PropTypes.object,
//     component: PropTypes.func.isRequired
//   };

//   return (
//     <Switch>
//       <PrivateRoute path='/lines' exact component={ActiveLines} />
//       <Route path='/login' exact component={Login} />
//       <Route path='/signup' exact component={SignUp} /> 
//     </Switch>
//   );
// };

// export default Router;
