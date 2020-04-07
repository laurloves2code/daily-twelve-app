import React, { Component } from 'react';
import '../App.css';

class Date extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: 'date'
        }
    }
   

    displayDate() {
        const today = 'This is where the date will display';
        // const day = today.toDateString();
        // const time = today.toLocaleTimeString();
        console.log(today);
        // const day = new Date();
        // const today = day.toLocaleTimeString();
        this.setState({date: today});
    }

    componentDidMount() {
        this.displayDate();
      }
    

    render () {
        return (
            <div>
                <h3>{this.state.date}</h3>      
            </div>
        );
    }
}

export default Date;




