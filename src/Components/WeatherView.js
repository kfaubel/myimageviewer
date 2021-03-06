import React from 'react';
import './WeatherView.css';

class WeatherView extends React.Component {

    render() {
        let imageUrl = "";
        if (this.props.lat !== "" && this.props.lon !== "") {
            imageUrl = `http://glimmerhub.com/weather/forecast/lat/${this.props.lat}/lon/${this.props.lon}/title/${this.props.title}`;
            console.log("WeatherView: " + imageUrl);
        }
        
        return (
            <div className="WeatherView">
                <img className="weatherViewImage" src={imageUrl} alt=""></img>
            </div>
        );
    }
}

export default WeatherView;