import React from 'react';
import './App.css';
import Nav from './components/nav.js'
import IndicaGrid from './components/races/indicaGrid.js'

function App() {
  return (
    <div className="app">
      <Nav />
      <IndicaGrid />
    </div>
  );
}

export default App;
