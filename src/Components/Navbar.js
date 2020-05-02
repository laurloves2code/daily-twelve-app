import React, { Component } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';


class Navbar extends Component {


    render () {
        return (
            <div className="navDiv">

                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/thoughts">Thoughts</NavLink></li>                    
                    <li><NavLink to="/weather">Weather</NavLink></li>
                </ul>
                                              
            </div>
        );
    }
}

export default Navbar;