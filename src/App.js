import React from 'react';
import './App.css';
import Weather from './Components/weather.js';

function App() {
  return (
    
    <div className="container App">
      <main className="main">
        <h1 className="display-3 mt-5">Daily Twelve</h1>
        <p className="lead">Coming Soon! Set aside a few minutes of your day to recharge.</p>
      </main>
      <Weather />
    </div>

    
  );
}

export default App;
