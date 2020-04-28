import React, { Component } from 'react';
import '../App.css';


class Footer extends Component {

    state = {
        greeting: [
            'Have a Great Day', 
            'You are Awesome', 
            'It is a Good Day',
            "You're Doing Great",
            'Keep up the Good Work'
        ],
        writegreeting: ''       
    };    

    componentDidMount() {
        this.displayGreeting();    
      }

    displayGreeting () {
        let randomNum = Math.floor(Math.random() * this.state.greeting.length);

        this.setState({
            writegreeting: this.state.greeting[randomNum]
        });

        //console.log('this is the number: ' + randomNum)
    }
   

    render () {
        return (
            <div className="footerDiv">

                <h2>{this.state.writegreeting}</h2>
                                              
            </div>
        );
    }
}

export default Footer;