import React from 'react';
import './HomeApp.css';


class HomeApp extends React.Component {
    

    // Called whenever the state changes.
    render() {
        return (
            <div className="HomeApp">
                <h1>Overview</h1>
                <p>This applciaiton is used to preview images that can be accessed by URL to display various peices of information</p>
                
            </div>
        );
    }
}

export default HomeApp;