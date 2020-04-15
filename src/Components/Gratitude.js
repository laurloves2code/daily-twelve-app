import React, { Component } from 'react';
import '../App.css';

// Gratitude Component contains input form field for each thought message.

class Gratitude extends Component {

    //userThoughts;

    constructor(props) {
        super(props);

    // this.state will be set with the data input by the user from the form #gratitude-message
      
        this.state = {
          savedThoughts: [],  
          gratValue: {}
        };

        this.handleChange=this.handleChange.bind(this);
        this.handleSave=this.handleSave.bind(this);

      }


    // local storage methods. Stores the Gratitude entries in local storage
    // componentDidMount will check for local storage data immediately after compoment is rendered

    componentDidMount() {
        let thoughtsFromStorage = JSON.parse(localStorage.getItem("thoughts"));

    // if there is data in local storage it will update the state with the data
    
      if(thoughtsFromStorage) {
          this.setState(thoughtsFromStorage);
      }
    }
      
    UNSAFE_componentWillUpdate(gratitudeData, nextThought) {
        localStorage.setItem("thoughts", JSON.stringify(nextThought));
      }
    
// updateThought() method used in early stages for testing the gratValue state.
    
    // async updateThought() {
    //     console.log(this.state.gratValue);
    //     await this.setState({gratValue: 'This is the new input'});
    //     console.log(this.state.gratValue);
    //     return this.state.gratValue;
    // };

//handleChange() sets the state with the new input from the user

    handleChange(event) {
        //const timeNow = Date();
        this.setState({gratValue: {
            date: Date.now(),
            message: event.target.value}}
            );
        }

//handleSave() saves the current gratValue state when the Save button is clicked
// this new data is added to thebeginning of an array of gratValue objects - savedThoughts

    handleSave() {           

        let thoughtsArray = [...this.state.savedThoughts];
        thoughtsArray.unshift(this.state.gratValue);

// attempting to display the date in new Gratitude post

        // console.log(this.state.gratValue.date);
        // let theTime = this.state.gratValue.date;
        // console.log(theTime.getHours());

// sets the gratValue states back to blank for user

        this.setState({
            savedThoughts: thoughtsArray,
            gratValue: {
                date: '',
                message: ''}});
        }
    

// displayList() used to test what will be displayed through savedThoughts state

      displayList () {
        console.log(this.state.savedThoughts);
    }
       

    render () {   
        
        
                        
        return (            
            <div className="gratitude-form py-5">                
                <form className="form-area">
                    <div className="form-group">
                        <label htmlFor="gratitude-message">Thoughts of Gratitude</label>

            {/* // Renders list of 3 recently saved gratitude thoughts */}
                    <div>
                    <p>{this.userThoughts}</p>
                    </div>
                        


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