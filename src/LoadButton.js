import React from 'react';
import './LoadButton.css';

class LoadButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sharedZipcode: props.sharedZipcode };

        this.handleClick = this.handleClick.bind(this);
    }


    render() {
        return (
            <button className="loadButton" onClick={this.handleClick}>Load</button>
        );
    }

    handleClick() {
        console.log("In handleClick()")
        alert('A name was submitted: ' + this.props.sharedZipcode);
        //event.preventDefault();
    }
}

export default LoadButton;


