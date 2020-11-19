import React from 'react';
import './App.css';
import ActiveSports from './components/ActiveSports';
import Header from './components/Header';
// import Nav from './components/Nav';

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <Nav /> */}
      <ActiveSports />
    </div>
  );
}

export default App;
