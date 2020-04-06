import React from 'react';
import './App.css';
import Verse from './Components/Verse.js';
import Gratitude from './Components/Gratitude.js';
import Priorities from './Components/Priorities.js';
//import Thoughts from './Components/Thoughts.js';
//import Weather from './Components/Weather.js';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      thought: []
    };
  }

  render() {
    return (
    
      <div className="container App">
        <main className="main">
          <h1 className="display-4 mt-3">Daily Twelve</h1>
          <p className="lead">Tuesday, March 25, 2020</p>
        </main>
        <Verse />
        <Gratitude />
        <Priorities />
        {/* <Weather /> */}
      </div>
  
      
    );
  }

  componentDidMount = () => {
    const thoughts = localStorage.getItem('thoughts');
    if(thoughts) {
      const savedThoughts = JSON.parse(thoughts);
      this.setState({thoughts: savedThoughts});
    } else {
      console.log('No thoughts yet');
    }
  }

}

// function App() {
//   return (
    
//     <div className="container App">
//       <main className="main">
//         <h1 className="display-4 mt-3">Daily Twelve</h1>
//         <p className="lead">Tuesday, March 25, 2020</p>
//       </main>
//       <Verse />
//       <Gratitude />
//       <Priorities />
//       {/* <Weather /> */}
//     </div>

    
//   );
// }

export default App;
