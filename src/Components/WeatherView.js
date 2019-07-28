import React from 'react';
//import axios from 'axios';//= require('axios');
import './WeatherView.css';

class WeatherView extends React.Component {

    render() {
        const imageUrl = `http://glimmerhub.com/weather/forecast/lat/${this.props.lat}/lon/${this.props.lon}/title/${this.props.title}`;
        return (
            <div className="WeatherView">
                <img className="WeatherView-image" id="image" src={imageUrl} alt=""></img>
            </div>
        );
    }
}

export default WeatherView;