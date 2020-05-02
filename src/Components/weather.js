
import React, { Component } from 'react';
import '../App.css';
import sunshine from '../img/sunshine.png';
import clouds from '../img/clouds.png';
import rain from '../img/rain.png';
import fewclouds from '../img/fewclouds.png';

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

    apiWeather = async (
        url = 'http://api.openweathermap.org/data/2.5/weather?q=Louisville&appid=' + process.env.REACT_APP_WEATHER_API_KEY
    ) => {        
        const results = await fetch(url);
        const info = await results.json();
        this.toFahrenheit(info.main.temp, info.main.feels_like);        
        this.setState({location: info.name});
        this.setState({outside: info.weather[0].main});
        this.setState({look: info.weather[0].description});
        this.setSkyicon();      
    };

    // landscape photo renders as background of weather component using a random number generator to select from and array on the api

    apiPhoto = async (
        urlb = 'https://pixabay.com/api/?key=' + process.env.REACT_APP_PHOTO_API_KEY + '&q=calm+landscape&image_type=photo'
    ) => {        
        const results = await fetch(urlb);
        const infob = await results.json(); 
        const indexB = Math.floor(Math.random() * 18);                      
        const urlbkg = infob.hits[indexB].webformatURL;        
        this.setState({bkgImage: {backgroundImage: "url(" + urlbkg + ")"}});     
    };

    // toFahrenheit changes the celcius data provided by the api to fahrenheit

    toFahrenheit = (number, realnumber) => {
        const tempF = (number - 273.15) * 9/5 + 32;
        const tempR = (realnumber - 273.15) * 9/5 + 32;       
        this.setState({tempnow: parseInt(tempF)}); 
        this.setState({realFeel: parseInt(tempR)})
    };

    // selects which weather icon to display based on data from api

    setSkyicon = () => {
        if (this.state.look === "few clouds") {            
            this.setState({skyicon: fewclouds});
        }  else if (this.state.look === "scattered clouds") {            
            this.setState({skyicon: fewclouds});
        } else if (this.state.outside === "Clouds") {            
            this.setState({skyicon: clouds});
        } else if (this.state.outside === "Rain") {            
            this.setState({skyicon: rain});
        } else
        // if (this.state.outside === "Clear") 
            {            
            this.setState({skyicon: sunshine});
        } 
    };

    render () {
        return (
            <div className="weather-bkg bkgApp" id="weatherid" style={this.state.bkgImage}>
            <h1 className="py-4">{this.state.location}</h1>
            <h4 className="realFeel">{this.state.look}</h4>
            <img src={this.state.skyicon} alt="Weather"/>            
            <h2>{this.state.tempnow}&deg;</h2>
            <h4 className="realFeel">Real Feel: {this.state.realFeel}&deg;</h4>            
         </div>
        );
    }
}

export default Weather;