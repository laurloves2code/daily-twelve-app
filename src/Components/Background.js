import React, { Component } from 'react';
import '../App.css';

class Background extends Component {

    state = {
        background: ''        
    };

    componentDidMount() {
        this.randomPhoto();
        this.apiPhoto();
        console.log('url info received');                
      }

    randomPhoto = () => {
        console.log('random number here');
    };

    // api data from https://openweathermap.org
    // testing api - will save apikey in another hidden document

    apiPhoto = async (
        url = `https://pixabay.com/api/?key=16094226-1e7dd4150d1a0d4d8c4708596&q=calm+sunshine&image_type=photo`
    ) => {        
        const results = await fetch(url);
        const info = await results.json();                
        console.log(info);
        console.log(this.state.location);
    };

    

    render () {

        return (

            <div 
            
            style={{  
                backgroundImage: "url(" + "https://pixabay.com/get/57e1d54a4b5aac14f6da8c7dda7936781536dae751576c4870277cd59345c751bd_1280.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}

             > this is the background</div>              
        );
    }
}

export default Background;