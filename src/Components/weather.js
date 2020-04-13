import React, { Component } from 'react';
import '../App.css';
import sunshine from '../img/sunshine.png';
import clouds from '../img/clouds.png';
import rain from '../img/rain.png'
//import '../Components/enterapp.js';

class Weather extends Component {

    state = {
        location: '',
        photoBkg: '',
        skyicon: '',
        tempnow: '',
        outside: '',
        look: '',
        realFeel: ''
    };

    componentDidMount() {
        this.apiWeather();        
      }

    // api data from https://openweathermap.org
    // testing api - will save apikey in another hidden document

    apiWeather = async (
        url = `http://api.openweathermap.org/data/2.5/weather?q=Louisville&appid=key`
    ) => {        
        const results = await fetch(url);
        const info = await results.json();
        this.toFahrenheit(info.main.temp, info.main.feels_like);        
        this.setState({location: info.name});
        this.setState({outside: info.weather[0].main});
        this.setState({look: info.weather[0].description});
        this.setSkyicon();        
        console.log(info);
        console.log(this.state.location);
    };

    toFahrenheit = (number, realnumber) => {
        const tempF = (number - 273.15) * 9/5 + 32;
        const tempR = (realnumber - 273.15) * 9/5 + 32;       
        this.setState({tempnow: parseInt(tempF)}); 
        this.setState({realFeel: parseInt(tempR)})
    };

    setSkyicon = () => {
        if (this.state.outside === "Clouds") {
            console.log("it is cloudy out");
            this.setState({skyicon: clouds});
        } else if (this.state.outside === "Rain") {
            console.log("it is rainy");
            this.setState({skyicon: rain});
        } else
        // if (this.state.outside === "Clear") 
            {
            console.log("Sky is not cloudy");
            this.setState({skyicon: sunshine});
        } 
    };

    render () {
        return (
            <div className="weather-bkg">
            <h1 className="py-4">{this.state.location}</h1>
            <h4 className="realFeel">{this.state.look}</h4>
            <img src={this.state.skyicon} alt="Weather"/>
            {/* <img src="/img/clouds.png" alt="Weather"/> */}
            <h2>{this.state.tempnow}&deg;</h2>
            <h4 className="realFeel">Real Feel: {this.state.realFeel}&deg;</h4>            
         </div>
        );
    }
}

export default Weather;