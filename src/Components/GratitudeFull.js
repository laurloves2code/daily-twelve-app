import React, { Component } from 'react';
//import CurrentTime from './CurrentTime.js';
import '../App.css';

// Gratitude Component contains input form field for each thought message.

class GratitudeFull extends Component {

    constructor(props) {
        super(props);

    // this.state will be set with the data input by the user from the form #gratitude-message
      
        this.state = {
          savedThoughts: [],  
          gratValue: {},
          displayStyle: {display: "none"},
          displayStyleHide: {display: "none"},
          displayStyleView: {display: "inline-block"}
        };

        this.handleChange=this.handleChange.bind(this);
        this.handleSave=this.handleSave.bind(this);
        this.handleView=this.handleView.bind(this);
        this.handleHide=this.handleHide.bind(this);
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
            message: event.target.value
            }}
            );
        }

//handleSave() saves the current gratValue state when the Save button is clicked
// this new data is added to thebeginning of an array of gratValue objects - savedThoughts

    handleSave() {           

        if (this.state.gratValue.message === '') {

            console.log('need input');

        } else {

            let thoughtsArray = [...this.state.savedThoughts];
            thoughtsArray.unshift(this.state.gratValue);

// sets the gratValue states back to blank for user

        this.setState({
            savedThoughts: thoughtsArray,
            gratValue: {
                message: ''
                }});

        }         
    }    

    handleX(e) {                       
        console.log(e);

        var thoughtsNew = [...this.state.savedThoughts];

        var removeIndex = thoughtsNew.indexOf(e);

        console.log(removeIndex);

        thoughtsNew.splice(removeIndex, 1);

        this.setState({...this.state, savedThoughts: thoughtsNew}, () => {console.log(this.state.savedThoughts)});
    }

    handleView() {
        this.setState({displayStyle: {display: "flex"}});
        this.setState({displayStyleHide: {display: "inline-block"}});
        this.setState({displayStyleView: {display: "none"}});
    }

    handleHide() {
        this.setState({displayStyle: {display: "none"}});
        this.setState({displayStyleHide: {display: "none"}});
        this.setState({displayStyleView: {display: "inline-block"}});
    }

       

    render () {   

       // maps through savedThoughts array to render

        const thoughtsList = this.state.savedThoughts.map(
            (data) =>             
            <li className="thoughts-list" key={data.message}><p>{data.message}</p>
            <button type="button" className= "xbtn" onClick={() => this.handleX(data)}>X</button>
            {/* <p>{this.props.state.theDateToday}</p> */}
            </li>
            );            
            
        
                        
        return (            
            <div className="gratitude-form py-5">                
                <form className="form-area">
                    
                       

                   

                <div className="your-thoughts">
                        <h3>Your Thoughts of Gratitude</h3>
                        <ul className="ul-Thoughts">
                        
                        {thoughtsList} 
                        
                        </ul>
                        
                    
                 </div>
                        
                </form>                 

            </div>
        );
    }

}

export default GratitudeFull;