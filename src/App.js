import React from 'react';
import './App.css';
import Quote from './Components/Quote.js';
import Gratitude from './Components/Gratitude.js';
import Priorities from './Components/Priorities.js';
import Date from './Components/Date.js';
import Footer from './Components/Footer.js';
import Weather from './Components/Weather.js';

function App() {
  return (
    
     <div  className="container App" >
        
        
          <main className="main">     
            <h1 className="display-4 mt-3">Daily Twelve</h1>
            <Date />
          </main>
          <Quote />
          <Gratitude />      
          <Priorities />
          <Weather />
          <Footer />
    </div>
    
  );
}

export default App;
