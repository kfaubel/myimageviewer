import React from 'react';
import './WeatherApp.css';

import ZipcodeInput from './ZipcodeInput';
import LoadButton from './LoadButton';
import WeatherView from './WeatherView';

class WeatherApp extends React.Component {
    constructor(props) {
        super(props);
        console.log("WeatherApp::contructor");
        this.state = {
            sharedZipcode: '',     // This state is shared among the subcomponents of this component.
        };

        this.onChangeSharedZipcode = this.onChangeSharedZipcode.bind(this);
    }

    // This is called directly within subcomponents.  
    // The function is assigned as a property to subcomponents.
    onChangeSharedZipcode(value) {
        console.log("WeatherApp::onChangeSharedZipcode(): Setting sharedZipcode to: " + value); 
        
        this.setState({ sharedZipcode: value }); // This will trigger a render()

        //console.log("Zip is: " + this.state.sharedZipcode);
        // this.setState((state, props) => ({
        //     sharedZipcode: value
        // }));
          
    }

    // Called whenever the state changes.
    render() {
        console.log("WeatherApp::this.render(): " + this.state.sharedZipcode);
        return (
            <div className="WeatherApp">
                <div className="appHeader">Enter your Zip code and load the forecast for your area.</div>

                <div className="controlBar">
                    <label className="zipcodeLabel">Zip Code:</label>
                    <ZipcodeInput sharedZipcode={this.state.sharedZipcode} getSharedZipcode={this.getSharedZipcode} onChangeSharedZipcode={this.onChangeSharedZipcode}/>
                    <LoadButton   sharedZipcode={this.state.sharedZipcode} onChangeSharedZipcode={this.onChangeSharedZipcode}/>
                </div>

                <WeatherView />
                <div className="appFooter" id="status">Ready.</div>
            </div>
        );
    }
}

export default WeatherApp;