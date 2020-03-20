import React from 'react';
import './App.css';
import Weather from './Components/weather.js';

function App() {
  return (
    
    <div className="container App">
      <main className="main">
        <h1 className="display-3 mt-5">Daily Twelve</h1>
        <p className="lead">Coming Soon! What you do in the first few minutes of the day can help your day be great!</p>
      </main>
      <Weather />
    </div>

    
  );
}

export default App;
