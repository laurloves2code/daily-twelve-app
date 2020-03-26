import React, { Component } from 'react';
import '../App.css';

class Priorities extends Component {

    state = {

    };

    render () {
        return (
            <div className="form-group priorities-form py-5">
                <label>Top 3 Priorites for Today:</label>
                <form className="form-area">
                    <input type="text" className="form-control" 
                        id="formGroupExampleInput2">
                    </input>
                    <button type="button" className="btn btn-secondary btn-sm ">Add to List</button>
                </form>     
            </div>
        );
    }
}

export default Priorities;
