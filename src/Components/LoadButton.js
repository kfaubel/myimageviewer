import React from 'react';
import './LoadButton.css';

class LoadButton extends React.Component {
    constructor(props) {
        super(props);
        console.log("LoadButton::contructor");
        this.state = { sharedZipcode: props.sharedZipcode };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("LoadButton::handleClick(): sharedZipcode = " + this.state.sharedZipcode + " ****");

        alert('A Zipcode was submitted: ' + this.props.sharedZipcode);

        // Clear the field.  This is mostly to prove we can do it.
        this.props.onChangeSharedZipcode("xxx");
        //event.preventDefault();
    }

    render() {
        console.log("LoadButton::render() - sharedZipcode: " + this.state.sharedZipcode);
        return (
            <button className="loadButton" onClick={this.handleClick}>Load</button>
        );
    }
}

export default LoadButton;


