import React, { Component } from 'react';
import '../App.css';

class Date extends Component {

        state = {
            date: ''
        }
    
   

    displayDate = () => {  
        //const today = new Date();
        // const year = today.getFullYear();
        console.log(this.state.date);
        this.setState({date: new Date().getFullYear()});
        console.log(this.state.date);
        //console.log(today);
        console.log(this.state.date);
     };

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




