import React from 'react';
import '../App.css';
import sunshine from '../img/sunshine.png';

const weather = () => {
    return ( 
        <div className="weather-bkg">
           <h1 className="py-4">Louisville</h1>
           <img src={sunshine} alt="Sunsine"/>
           <h2 className="py-4">72&deg;</h2>
        </div>
    );
}

export default weather;