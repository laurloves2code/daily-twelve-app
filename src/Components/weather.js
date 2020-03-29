import React, { Component } from 'react';
import '../App.css';
import sunshine from '../img/sunshine.png';
//import '../Components/enterapp.js';

class Weather extends Component {

    state = {
        location: '',
        photoBkg: '',
        skyicon: '',
        tempnow: ''
    };

    componentDidMount() {
        this.apiWeather();        
      }

    // api data from https://openweathermap.org
    // testing api - will save apikey in another hidden document

    apiWeather = async (
        url = `http://api.openweathermap.org/data/2.5/weather?q=Louisville&appid={enter}`
    ) => {        
        const results = await fetch(url);
        const info = await results.json();
        this.toFahrenheit(info.main.temp);
        this.setState({location: info.name});        
        console.log(info);
        console.log(this.state.location);
    };

    toFahrenheit = (number) => {
        const tempFar = (number - 273.15) * 9/5 + 32;
        this.setState({tempnow: parseInt(tempFar)}); 
    };

    render () {
        return (
            <div className="weather-bkg">
            <h1 className="py-4">{this.state.location}</h1>
            <img src={sunshine} alt="Sunsine"/>
            <h2 className="py-4">{this.state.tempnow}&deg;</h2>
         </div> 
        );
    }
}

export default Weather;