import React from 'react';
import '../App.css';
import sunshine from '../img/sunshine.png';

const weather = () => {
    return ( 
        <div>
           <h1 className="py-4">Louisville</h1>
           <img src={sunshine} alt="Sunsine"/>
           <h2 className="pt-4">72&deg;</h2>
        </div>
    );
}

export default weather;