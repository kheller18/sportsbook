import React from 'react';
import './App.css';
import ActiveSports from './components/ActiveSports';

import Header from './components/Header';
import Footer from './components/Footer';
import BetSlip from './components/BetSlip';
// import Nav from './components/Nav';

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <Nav /> */}
      <ActiveSports />
      {/* <BetSlip /> */}
      <Footer />
    </div>
  );
}

export default App;
