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
        console.log("In LoadButton::handleClick()")
        alert('A Zipcode was submitted: ' + this.props.sharedZipcode);

        // Clear the field.  This is mostly to prove we can do it.
        this.props.onChangeSharedZipcode("xxx");
        //event.preventDefault();
    }
}

export default LoadButton;


