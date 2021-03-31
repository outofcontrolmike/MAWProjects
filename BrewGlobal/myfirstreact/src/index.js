import React from 'react';
import ReactDOM from 'react-dom';

//Class componenet && Constructor

class Transfomer extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: "Optimus Primal"};
    }//end constructor


    componentDidMount() {
        setTimeout(() => {
            this.setState({name: "RatTrap"})
        }, 5000)
    }

    render() {
        return (
            <h1>My favorite beast wars character is {this.state.name}</h1>
        )
    }
}


ReactDOM.render(<Transfomer/>,document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
