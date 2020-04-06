import React, { Component } from 'react';
import '../App.css';

class Gratitude extends Component {

    // state = {
    //   date: '3/20/20',
    //   input: 'This is a great day for a run'
    // };

    
    // // saveGrat(); adds date and input to the savedGrat array once the save button is clicked

    // saveGrat = (date, input) => {
    //     const gratitem = {date, input};
    //     const savedGrat = [];
        
    // };

    // saveGrat({this.state.date}, {this.state.input});

    render() {            
        return (
            <div className="form-group gratitude-form py-5">
                <label>Thoughts of Gratitude:</label>
                <textarea 
                    className="form-control form-area" 
                    id="gratitudeThoughts" rows="4" 
                    placeholder="Start typing something you are thankful 
                    for. It can be from today or yesterday...">
                </textarea>
                <button type="button" className="btn btn-secondary btn-sm ">Save</button>                
            </div>                                   
        );
      }
}

export default Gratitude;