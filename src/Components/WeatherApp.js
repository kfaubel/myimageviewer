import React from 'react';
import axios from 'axios';
import './WeatherApp.css';

import ZipcodeInput from './ZipcodeInput';
//import LoadButton from './LoadButton';
import WeatherView from './WeatherView';

const mapQuestKey = require('../mapquestkey.json');

class WeatherApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: "",
            lon: "",
            title: ''
        };

        this.onChangeZipcode = this.onChangeZipcode.bind(this);
    }

    // This is called directly within subcomponents.  
    // The function is assigned as a property to subcomponents.
    async onChangeZipcode(zipCode) {
        //console.log("Updating image" + zipCode + " - " + JSON.stringify(this.state, null, 4));

        if (mapQuestKey.mapQuestKey !== undefined) {
            const mapQuestUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${mapQuestKey.mapQuestKey}&location=${zipCode}`;
            //console.log("URL: " + mapQuestUrl);

            await axios.get(mapQuestUrl)
                .then((response) => {
                    // handle success
                    //console.log("updating state for lat/lon" + JSON.stringify(response.data.results[0], null, 4));
                    this.setState({ 
                        lat: response.data.results[0].locations[0].latLng.lat,
                        lon: response.data.results[0].locations[0].latLng.lng,
                        title: "Forecast for: " + response.data.results[0].locations[0].adminArea5 + ", " + response.data.results[0].locations[0].adminArea3
                    }); // This will trigger a render()
                    
                })
                .catch((error) => {
                    console.log("Error getting lat/lon from zipcode: " + error);
                    return null;
                });
        } else {
            console.log("Missing zipcode or key");
            return null;
        }
    }

    // Called whenever the state changes.
    render() {
        console.log("WeatherApp::this.render(): " + JSON.stringify(this.state, null,4));
        return (
            <div className="WeatherApp">
                <div className="appHeader">Enter your Zip code and load the forecast for your area.</div>

                <ZipcodeInput 
                    onChangeZipcode={this.onChangeZipcode}
                />
               
                <WeatherView  
                    lat={this.state.lat}
                    lon={this.state.lon}
                    title={this.state.title}
                />
                
                <div className="appFooter" id="status">Ready.</div>
            </div>
        );
    }
}

export default WeatherApp;