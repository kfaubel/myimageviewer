import React from 'react';
import './LoadButton.css';

class LoadButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('Click: A Zipcode was submitted: ' + this.props.sharedZipcode);

        this.props.updateImage();

        // Clear the field.  This is mostly to prove we can do it.
        //this.props.onChangeSharedZipcode("xxx");
    }

    render() {
        return (
            <button className="loadButton" onClick={this.handleClick}>Load</button>
        );
    }
}

export default LoadButton;