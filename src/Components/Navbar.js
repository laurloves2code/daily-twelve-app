import React, { Component } from 'react';
import '../App.css';


class Navbar extends Component {

    state = {
              
    };    
    
        
   

    render () {
        return (
            <div className="navDiv">

                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Thoughts</li>
                    <li>Priorities</li>
                    <li>Weather</li>
                </ul>
                                              
            </div>
        );
    }
}

export default Navbar;