import React, { Component } from 'react';
import '../App.css';

// Gratitude Component contains input form field for each thought message.

class Gratitude extends Component {

    constructor(props) {
        super(props);
      
        this.state = {
          savedThoughts: [],  
          gratValue: {}
        };

        this.handleChange=this.handleChange.bind(this);
        this.handleSave=this.handleSave.bind(this);

      }
    
       
    async updateThought() {
        console.log(this.state.gratValue);
        await this.setState({gratValue: 'This is the new input'});
        console.log(this.state.gratValue);
        return this.state.gratValue;
    };

    handleChange(event) {
        //const timeNow = Date();
        this.setState({gratValue: {
            date: Date.now(),
            message: event.target.value}});
        }

    handleSave() {
        //this.setState({gratValue: event.target.value});
        console.log(this.state.gratValue);       
        
        this.state.savedThoughts.unshift(this.state.gratValue);

        console.log(this.state.savedThoughts);

        this.setState({gratValue: {
            date: '',
            message: ''}});
      }
    

       

    render () {         
                        
        return (            
            <div className="gratitude-form py-5">                
                <form className="form-area">
                    <div className="form-group">
                        <label htmlFor="gratitude-message">Thoughts of Gratitude</label>
                        <textarea 
                            className="form-control" 
                            id="gratitude-message" 
                            rows="4"
                            value={this.state.gratValue.message}
                            onChange={this.handleChange}>
                        </textarea>
                    </div>
                    <button type="button" 
                        className="btn btn-secondary btn-sm "
                        onClick={this.handleSave}>Save</button>
                </form>     
            </div>
        );
    }

}

export default Gratitude;