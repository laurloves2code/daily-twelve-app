import React, { Component } from 'react';
import '../App.css';

// Gratitude Component contains input form field for each thought message.

class Gratitude extends Component {

    state = {
        savedThoughts: [],
        currentThought: 'this is the first text'
    };

    
    async updateThought() {
        console.log(this.state.currentThought);
        await this.setState({currentThought: 'This is the new input'});
        console.log(this.state.currentThought);
        return this.state.currentThought;
    };

    

    componentDidMount() {
        this.updateThought();        
      }

    

    render () {         
                        
        return (            
            <div className="gratitude-form py-5">                
                <form className="form-area">
                    <div className="form-group">
                        <label htmlFor="gratitude-message">Thoughts of Gratitude</label>
                        <textarea className="form-control" id="gratitude-message" rows="4"></textarea>
                    </div>
                    <button type="button" className="btn btn-secondary btn-sm ">Save</button>
                </form>     
            </div>
        );
    }

}

export default Gratitude;