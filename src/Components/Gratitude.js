import React, { Component } from 'react';
import '../App.css';

class Gratitude extends Component {

    state = {
      thoughts: ''
    };
      

    

    render() {            
        return (
            <div className="form-group gratitude-form py-5">
                <label>Thoughts of Gratitude:</label>
                <input 
                    className="form-control form-area" 
                    id="gratitudeThoughts" rows="4" 
                    placeholder="Whay am I thankful for?"
                    // value={this.state.thoughts}
                    ref="thoughtinput"/>                
                <button type="button" className="btn btn-secondary btn-sm ">Save</button>                
            </div>                                   
        );
      }
}

export default Gratitude;