import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
    render() {
       return <h1>I am a {this.props.color} car!</h1>
    }
}

class Garage extends React.Component {
    render() {
        return (
            <div>
                <h1>Which car is in my garage????</h1>
                <Car />
            </div>
        )
    }
}

export default Garage;