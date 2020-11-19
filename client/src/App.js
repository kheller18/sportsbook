import React from 'react';
import './App.css';
import ActiveSports from './components/ActiveSports';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />      
      <ActiveSports />
    </div>
  );
}

export default App;
