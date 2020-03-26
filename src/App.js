import React from 'react';
import './App.css';
import Verse from './Components/Verse.js';
import Gratitude from './Components/Gratitude.js';
import Priorities from './Components/Priorities.js';
import Weather from './Components/Weather.js';

function App() {
  return (
    
    <div className="container App">
      <main className="main">
        <h1 className="display-4 mt-3">Daily Twelve</h1>
        <p className="lead">Tuesday, March 25, 2020</p>
      </main>
      <Verse />
      <Gratitude />
      <Priorities />
      <Weather />
    </div>

    
  );
}

export default App;
