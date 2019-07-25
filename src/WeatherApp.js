import React from 'react';
import './WeatherApp.css';
import ZipcodeInput from './ZipcodeInput';
import LoadButton from './LoadButton';
import WeatherView from './WeatherView';

class WeatherApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sharedZipcode: '02558',
        };

        this.onChangeSharedZipcode = this.onChangeSharedZipcode.bind(this);
    }

    onChangeSharedZipcode(value) {
        console.log("In onChangeSharedZipcode(): " + value); // + JSON.stringify(newZipcode, null, 4));
        this.setState({ sharedZipcode: value });
    }

    render() {
        return (
            <div className="WeatherApp">
                <div className="appHeader">Enter your Zip code and load the forecast for your area.
            </div>

                <div className="controlBar">
                    <label className="zipcodeLabel">Zip Code:</label>
                    <ZipcodeInput sharedZipcode={this.state.sharedZipcode} onChangeSharedZipcode={this.onChangeSharedZipcode}/>
                    <LoadButton   sharedZipcode={this.state.sharedZipcode}/>
                </div>

                <WeatherView />
                <div className="appFooter" id="status">Ready.</div>
            </div>
        );
    }
}

export default WeatherApp;