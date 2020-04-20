import React from 'react';
import './App.css';
import Quote from './Components/Quote.js';
import Gratitude from './Components/Gratitude.js';
import Priorities from './Components/Priorities.js';
import CurrentTime from './Components/CurrentTime.js';
//import Background from './Components/Background.js';
import Weather from './Components/Weather.js';
import Footer from './Components/Footer.js';


function App() {
  return (
    
     <div  className="container App" >
        
        
          <main className="main">     
            <h1 className="display-4 mt-3">Daily Twelve</h1>
            <CurrentTime />
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
