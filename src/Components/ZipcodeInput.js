import React from 'react';
import './ZipcodeInput.css';

class ZipcodeInput extends React.Component {
    constructor(props) {
        super(props);

        // This is the direct function for the low level onChange event on the input field.
        this.handleChange = this.handleChange.bind(this);
    }

    // This is the actual element onChange handler.  It will accept the value and propigate it
    // up to the shared variable via the onChangeSharedZipfile method
    handleChange(event) {
        this.props.onChangeSharedZipcode(event.target.value);

        // This seems like a good idea but its actual value is unknown
        event.preventDefault();        
    }

    render() {
        return (
            <input className="zipcode" type="text" pattern="[0-9]{5}" value={this.props.sharedZipcode} onChange={this.handleChange}></input>
        );
    }
}

export default ZipcodeInput;