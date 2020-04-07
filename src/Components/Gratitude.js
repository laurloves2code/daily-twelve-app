import React, { Component } from 'react';
import '../App.css';

// Gratitude Component contains input form field for each thought message.

class Gratitude extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            items: [],
            currentThought:{
                text: '',
                key: ''
            }                      
        }
        
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleInput(e) {
        this.setState({
            currentThought:{
                text: e.target.value,
                key: Date.now()
            }
        });        
    }

    addItem(e) {
        e.preventDefault();
        const newThought = this.state.currentThought;
        console.log(newThought);
        this.setState({
            currentThought:{
                text: '',
                key: ''
            }
        });       
    }
      
    render() {            
        return (
            <div className='weather-bkg py-4'>
                <h2>Thoughts of Gratitude</h2>
                <form onSubmit={this.addItem}>
                    <input 
                    type="text" 
                    placeholder="Enter Thought"
                    value={this.state.currentThought.text}
                    onChange={this.handleInput}
                    />
                    <button type="submit">Save</button>
                </form>                
            </div>                                   
        );
      }
}

export default Gratitude;