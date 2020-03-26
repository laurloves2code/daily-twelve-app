import React, { Component } from 'react';
import '../App.css';
import sunshine from '../img/sunshine.png';

class Weather extends Component {

    state = {
        location: '',
        photoBkg: '',
        skyicon: '',
        temp: ''
    };

    componentDidMount() {
        this.apiWeather();        
      }

    // api data from https://openweathermap.org
    // testing api - will save apikey in another hidden document

    apiWeather = async (
        url = "http://api.openweathermap.org/data/2.5/weather?q=Louisville&appid={apikey}"
    ) => {
        const results = await fetch(url);
        const info = await results.json();
        this.setState({location: "Atlanta"}); 
        console.log(info);
        console.log(this.state.location);
    };

    render () {
        return (
            <div className="weather-bkg">
            <h1 className="py-4">Louisville</h1>
            <img src={sunshine} alt="Sunsine"/>
            <h2 className="py-4">72&deg;</h2>
         </div> 
        );
    }
}

export default Weather;