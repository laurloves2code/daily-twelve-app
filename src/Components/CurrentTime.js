import React, { Component } from 'react';
import '../App.css';

class CurrentTime extends Component {

    constructor(props) {
        super(props);
      
        this.state = {
          theDateToday: ''
        };
               
      }
    
      componentDidMount() {
        this.displayDate();
      }
      
      displayDate () {
        const dateNew = new Date();
        const dateWeek = dateNew.getDay();
        const dateMonth = dateNew.getMonth();
        const dateDay = dateNew.getDate();
        const dateYear = dateNew.getFullYear();

        console.log("base date " + dateNew);

        let monthName = "month";
        let weekName = "week";
        const monthNameArray = 
        ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const dayNameArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        if (weekName && dateMonth) {
          monthName = monthNameArray[dateMonth]; 
          weekName = dayNameArray[dateWeek];        
        }

        this.setState({theDateToday: `${weekName}, ${monthName} ${dateDay}, ${dateYear}`});
      }
      

    render () {       
        
        return (
            <div>
                <h3>{this.state.theDateToday}</h3>      
            </div>
        );
    }
}

export default CurrentTime;




