import React from 'react';
import './ZipcodeInput.css';

class ZipcodeInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sharedZipcode: props.sharedZipcode };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        
        console.log("In handleChange() = " + event.target.value)
        this.setState({sharedZipcode: event.target.value});
        this.props.onChangeSharedZipcode(event.target.value);
        
    }

    render() {
        return (
            <input className="zipcode" type="text" value={this.state.sharedZipcode} onChange={this.handleChange}></input>




            //https://stackoverflow.com/questions/44939313/how-does-one-react-component-call-a-method-in-another-react-component






        );
    }
}

export default ZipcodeInput;



