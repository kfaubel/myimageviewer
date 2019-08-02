import React from 'react';
import './BaseballApp.css';


class BaseballApp extends React.Component {
    

    // Called whenever the state changes.
    render() {
        return (
            <div className="BaseballApp">
                <h1>Baseball</h1>
                <p>This applciaiton is used to preview images that can be accessed by URL to display various peices of information</p>
                
            </div>
        );
    }
}

export default BaseballApp;