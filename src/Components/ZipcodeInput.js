import React from 'react';
import './ZipcodeInput.css';

class ZipcodeInput extends React.Component {
    constructor(props) {
        super(props);

        // Call this when the submit button is pressed
        this.submitFormHandler = this.submitFormHandler.bind(this);
    }

    submitFormHandler(event) {
        // Prevent the page from reloading!
        event.preventDefault();  

        this.props.onChangeZipcode(this.refs.zipcodeValue.value);        
    }

    render() {
        return (
            <div className="zipcodeControlBar">
                <form onSubmit={this.submitFormHandler}>                      
                    <label className="zipcodeLabel">Zip Code:</label>

                    <input className="zipcodeInput" 
                        type="text" 
                        ref="zipcodeValue"          // Access the value as this.refs.zipcodeValue.value
                        pattern="[0-9]{5}"          // 5 digits
                        defaultValue=""             // Since there is no onChange, we need this so React does not make it readonly
                    >
                    </input>

                    <button className="zipCodeLoadButton" type="submit" >Show</button>

                </form>   
            </div>
        );
    }
}

export default ZipcodeInput;