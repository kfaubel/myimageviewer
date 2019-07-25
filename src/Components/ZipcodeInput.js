import React from 'react';
import './ZipcodeInput.css';

class ZipcodeInput extends React.Component {
    constructor(props) {
        super(props);
        console.log("ZipcodeInput::contructor");

        // Intialize the state with the value of the 'sharedZipcode' property
        this.state = { sharedZipcode: props.sharedZipcode };

        // This is the direct function for the low level onChange event on the input field.
        this.handleChange = this.handleChange.bind(this);
    }

    // This is the actual element onChange handler.  It will accept the value and propigate it
    // up to the shared variable via the onChangeSharedZipfile method
    handleChange(event) {
        
        console.log("In ZipcodeInput::handleChange() = " + event.target.value);

        // This updates the local element.  Without it, the change is not really made.
        this.setState({sharedZipcode: event.target.value});

        // Now push it up the the parent via the property method we were given
        this.props.onChangeSharedZipcode(event.target.value);

        // This seems like a good idea but its actual value is unknown
        event.preventDefault();        
    }

    render() {
        console.log("ZipcodeInput::render: " + this.state.sharedZipcode);

        return (
            <input className="zipcode" type="text" value={this.state.sharedZipcode} onChange={this.handleChange}></input>
        );
    }
}

export default ZipcodeInput;



