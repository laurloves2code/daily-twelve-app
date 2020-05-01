import React, { Component } from 'react';
import '../App.css';

class Priorities extends Component {

    constructor(props) {
        super(props);

    // this.state will be set with the data input by the user from the form #priorities-form
      
        this.state = {
          prioritiesList: [],  
          listItem: {}
        };

        this.handleChange=this.handleChange.bind(this);
        this.handleSave=this.handleSave.bind(this);

      }


    // local storage methods. Stores the Priorities entries in local storage
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

            //console.log('need list item');

        } else {

            let prioritiesArray = [...this.state.prioritiesList];
            prioritiesArray.unshift(this.state.listItem);


// sets the listItem states back to blank for user

        this.setState({
            prioritiesList: prioritiesArray,
            listItem: {                
                priority: ''}});
        }         
    }    

    handleDone(e) {                       
        console.log(e);

        var prioritiesNew = [...this.state.prioritiesList];

        var removeIndex = prioritiesNew.indexOf(e);

        console.log(removeIndex);

        prioritiesNew.splice(removeIndex, 1);

        this.setState({...this.state, prioritiesList: prioritiesNew}, () => {console.log(this.state.prioritiesList)});

       

    }
                 
       

    render () {   

       // maps through prioritiesList array to render last 3 entered

        const prioritiesList = this.state.prioritiesList.slice(0, 7).map(
            (data) =>             
            <li className="priorities-list" key={data.priority}><p>{data.priority}</p>
            <button type="button" className="btn btn-light btn-sm " onClick={() => this.handleDone(data)}>Done</button>
            </li>            
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

                    {/* // Renders list of 3 recently saved items on priorites list */}

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
