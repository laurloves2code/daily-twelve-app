import React, { Component } from 'react';
import '../App.css';

// GratitudeFull Component used to render a full list of thought items 

class GratitudeFull extends Component {

    constructor(props) {
        super(props);
        
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
    

//handleChange() sets the state with the new input from the user

    handleChange(event) {        
        this.setState({gratValue: {
            message: event.target.value
            }}
            );
        }


    handleSave() {           

        if (this.state.gratValue.message === '') {

            console.log('need input');

        } else {

            let thoughtsArray = [...this.state.savedThoughts];
            thoughtsArray.unshift(this.state.gratValue);

        this.setState({
            savedThoughts: thoughtsArray,
            gratValue: {
                message: ''
                }});

        }         
    }    

    handleX(e) {                       
        let thoughtsNew = [...this.state.savedThoughts];
        let removeIndex = thoughtsNew.indexOf(e);
        thoughtsNew.splice(removeIndex, 1);
        this.setState({...this.state, savedThoughts: thoughtsNew});
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