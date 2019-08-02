import React from 'react';
import './App.css';

import WeatherApp from './WeatherApp';
import BaseballApp from './BaseballApp';
import HomeApp from './HomeApp';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "Home",
            pageView: <HomeApp />
        };

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(event) {
        const newPage = event.target.id;
        
        let newPageView = "";

        if (newPage !== this.state.page) {
            switch(newPage) {
                case "Home":     newPageView  = <HomeApp />;     break;
                case "Weather":  newPageView  = <WeatherApp />;  break;
                case "Baseball": newPageView  = <BaseballApp />; break;
                default:         newPageView  = <HomeApp />;     break;
            }
            this.setState({
                page: newPage,
                pageView: newPageView
            })
        }
    }

    
    // Called whenever the state changes.
    render() {
        return (
            <div className="App">
                <div className="navBar">
                    
                    <button id="Home"     onClick={this.onClickHandler} className = {this.state.page === "Home"     ? "active" : "inactive"} >Home</button>
                    <button id="Weather"  onClick={this.onClickHandler} className = {this.state.page === "Weather"  ? "active" : "inactive"} >Weather</button>
                    <button id="Baseball" onClick={this.onClickHandler} className = {this.state.page === "Baseball" ? "active" : "inactive"} >Baseball</button>                
                </div>
                
                {this.state.pageView}
                
                <div className="appFooter" id="status"></div>
            </div>
        );
    }


}

export default App;