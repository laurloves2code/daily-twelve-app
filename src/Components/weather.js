import React, { Component } from 'react';
import '../App.css';
import sunshine from '../img/sunshine.png';
import clouds from '../img/clouds.png';
import rain from '../img/rain.png'
//import Background from './Components/Background.js';
//import '../Components/enterapp.js';

class Weather extends Component {

    state = {
        location: '',
        photoBkg: '',
        skyicon: '',
        tempnow: '',
        outside: '',
        look: '',
        realFeel: '',
        bkgImage: {}
    };

    componentDidMount() {
        this.apiWeather();   
        this.apiPhoto();     
      }

    // api data from https://openweathermap.org
    // testing api - will save apikey in another hidden document

    apiWeather = async (
        url = `weatherapi`
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

    apiPhoto = async (
        urlb = `photoapi`
    ) => {        
        const results = await fetch(urlb);
        const infob = await results.json(); 
        const indexB = Math.floor(Math.random() * 20);    
        console.log("index number" + indexB);           
        const urlbkg = infob.hits[indexB].webformatURL;          
        console.log(urlbkg);
        this.setState({bkgImage: {backgroundImage: "url(" + urlbkg + ")"}});     
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
            <div className="weather-bkg bkgApp" style={this.state.bkgImage}>
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