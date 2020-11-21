import React from 'react';
import './App.css';
import ActiveSports from './components/ActiveSports';
import Header from './components/Header';
import Footer from './components/Footer';
// import Nav from './components/Nav';

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <Nav /> */}
      <ActiveSports />
      <Footer />
    </div>
  );
}

export default App;
