import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function ffFetch (value) {
  console.log(value);
  fetch('https://www.moogleapi.com/api/v1/characters/search?name=' + value)
  .then(response => response.json())
  .then(data => console.log(data));

  //Do something with the data
}

class FFSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  

  handleChange(event) {
    this.setState({value: event.target.value});
  }

   handleClick(event) {
    alert ('Characters Name is " ' + this.state.value);
    event.preventDefault();
    ffFetch(this.state.value);
  }

  render() {
    return (
      
      <form
      className={"ui form"}>
        <input
        type='text'
        onChange={this.handleChange}
        className={"ui input"}
        id = {"ffValue"}
        label = {"testing"}>
        </input>
        <button
id={"fetchFF"}
onClick={this.handleClick}
>click me to Fetch</button>  
      </form>
      
    )
  }
}

class Card extends React.Component {
  render() {
    return(
      <div
      className={"ui segment container"}
      id ={"ffCard"}
      >
        <h1>Character Card</h1>
        <p>character detail</p>
      </div>
    )
  }
}

class PageHeader extends React.Component {
  render() {
    return (
      <div
      className={"ui container segment"}
      id={"header"}
      >
<h1>Final Fantasy Character Search</h1>
<FFSearch />
      </div>
      
    )
  }
}

class List extends React.Component {
  render() {
    return (
      <div
      className={'ui segment container'}
      id={'list'}
      >
        <Card />
</div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <PageHeader />
        <List />
      </div>
      )
  }
}

ReactDOM.render(<App /> , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
