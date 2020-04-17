import React, { Component } from 'react';
import '../App.css';

class Priorities extends Component {

    constructor(props) {
        super(props);

    // this.state will be set with the data input by the user from the form #gratitude-priority
      
        this.state = {
          prioritiesList: [],  
          listItem: {}
        };

        this.handleChange=this.handleChange.bind(this);
        this.handleSave=this.handleSave.bind(this);

      }


    // local storage methods. Stores the Gratitude entries in local storage
    // componentDidMount will check for local storage data immediately after compoment is rendered

    componentDidMount() {
        let itemsFromStorage = JSON.parse(localStorage.getItem("priorities"));

    // if there is data in local storage it will update the state with the data
    
      if(itemsFromStorage) {
          this.setState(itemsFromStorage);
      }
    }
      
    UNSAFE_componentWillUpdate(prioritiesData, nextThought) {
        localStorage.setItem("priorities", JSON.stringify(nextThought));
      }
    
// updateThought() method used in early stages for testing the listItem state.
    
    // async updateThought() {
    //     console.log(this.state.listItem);
    //     await this.setState({listItem: 'This is the new input'});
    //     console.log(this.state.listItem);
    //     return this.state.listItem;
    // };

//handleChange() sets the state with the new input from the user

    handleChange(event) {
        //const timeNow = Date();
        this.setState({listItem: {
            priority: event.target.value}}
            );
        }

//handleSave() saves the current listItem state when the Save button is clicked
// this new data is added to thebeginning of an array of listItem objects - prioritiesList

    handleSave() {           

        if (this.state.listItem.priority === '') {

            console.log('need list item');

        } else {

            let prioritiesArray = [...this.state.prioritiesList];
        prioritiesArray.unshift(this.state.listItem);

// attempting to display the date in new Gratitude post

        // console.log(this.state.listItem.date);
        // let theTime = this.state.listItem.date;
        // console.log(theTime.getHours());

// sets the listItem states back to blank for user

        this.setState({
            prioritiesList: prioritiesArray,
            listItem: {                
                priority: ''}});
        }         
    }    

       

    render () {   

       // maps through prioritiesList array to render

        const prioritiesList = this.state.prioritiesList.slice(0, 3).map(
            (data) =>             
            <li className="priorities-list" key={data.priority}>{data.date}<p>{data.priority}</p></li>
            );     

            
        
                        
        return (            
            <div className="form-group priorities-form py-5">                
                <form className="form-area">
                    <div className="form-group">
                        <h4 htmlFor="gratitude-priority">Top Priorities for Today</h4>           
                        <textarea 
                            className="form-control" 
                            id="gratitude-priority" 
                            rows="1"
                            value={this.state.listItem.priority}
                            onChange={this.handleChange}>
                        </textarea>
                    </div>
                    <button type="button" 
                        className="btn btn-secondary btn-sm "
                        onClick={this.handleSave}>Add to List</button>

                    {/* // Renders list of 3 recently saved gratitude thoughts */}

                <div className="your-thoughts">                        
                        <ul className="ul-Thoughts">
                        
                        {prioritiesList}                            

                        </ul>
                        
                    
                 </div>
                        
                </form>                 

            </div>
        );
    }

}

export default Priorities;

// render () {
//     return (
//         <div className="form-group priorities-form py-5">
//             <label>Top 3 Priorites for Today:</label>
//             <form className="form-area">
//                 <input type="text" className="form-control" 
//                     id="formGroupExampleInput2">
//                 </input>
//                 <button type="button" className="btn btn-secondary btn-sm ">Add to List</button>
//             </form>     
//         </div>
//     );
// }