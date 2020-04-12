import React, { Component } from 'react';
import '../App.css';

class Date extends Component {

    constructor(props) {
        super(props);
      
        this.state = {
          date: {}
        };

        this.displayDate=this.displayDate.bind(this);        
      }
    
   

    async displayDate () {  
        //const today = new Date();
        // const year = today.getFullYear();
        const dateToday = new Date();               
        await this.setState({date: {time: dateToday}});
        console.log(this.state.date);        
        //console.log(today);       
     };

    componentDidMount() {
        this.displayDate();
      }
    

    render () {       
        
        return (
            <div>
                <h3>Date Now</h3>      
            </div>
        );
    }
}

export default Date;




