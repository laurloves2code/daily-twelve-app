import React from 'react';
import '../App.css';

const Gratitude = () => {
    return ( 
        <div className="form-group gratitude-form py-5">
            <label>Thoughts of Gratitude:</label>
            <textarea 
                className="form-control form-area" 
                id="gratitudeThoughts" rows="4" 
                placeholder="Start typing something you are thankful 
                for. It can be from today or yesterday...">
            </textarea>
            <button type="button" className="btn btn-secondary btn-sm ">Save</button>

        </div>
    );
}

export default Gratitude;