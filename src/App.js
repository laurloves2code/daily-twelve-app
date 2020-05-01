import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import './App.css';

// App Components

import Navbar from './Components/Navbar.js';
import About from './Components/About.js';
import Quote from './Components/Quote.js';
import Gratitude from './Components/Gratitude.js';
import GratitudeFull from './Components/GratitudeFull.js';
import Priorities from './Components/Priorities.js';
import CurrentTime from './Components/CurrentTime.js';
import Weather from './Components/Weather.js';
import Footer from './Components/Footer.js';



function App() {
  return (
    <BrowserRouter>  
      <div  className="container App" >
          
          
            <main className="main">     
              <h1 className="display-4 mt-3">Daily Twelve</h1>
              <CurrentTime />
            </main>
            <nav>
            <Navbar />
            </nav>
            <Route path="/about" component={About}/>
            <Route exact path="/" component={Quote}/>
            <Route exact path="/" component={Gratitude}/>                
            <Route exact path="/" component={Priorities}/>            
            <Route exact path="/" component={Weather}/>
            <Route path="/weather" component={Weather}/>
            <Route path="/thoughts" component={GratitudeFull}/>            
            <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
