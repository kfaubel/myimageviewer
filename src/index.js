import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherApp from './Components/WeatherApp';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(<WeatherApp />, document.getElementById('root'));

//serviceWorker.unregister(); // switch to register for offline use
