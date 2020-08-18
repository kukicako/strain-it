import React from 'react';
import './App.css';
import Nav from './components/nav.js'
import IndicaGrid from './components/races/indicaGrid.js'
import SativaGrid from './components/races/sativaGrid.js'
import HybridGrid from './components/races/hybridGrid.js'
function App() {
  return (
    <div className="app">
      <Nav />
      <IndicaGrid />
      <SativaGrid />
      <HybridGrid />
    </div>
  );
}

export default App;
