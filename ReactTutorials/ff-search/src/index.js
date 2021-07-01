import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

/*Components Required 

*Card
*Input
*List
*Header
*App (main)
*
*

*/

function ffFetch () {
  fetch('https://www.moogleapi.com/api/v1/characters/search?name=cloud')
  .then(response => response.json())
  .then(data => console.log(data));
}

ffFetch();

class FFSearch extends React.Component {
  render() {
    return (
      <form
      className={"ui form"}>

        <input
        className={"ui input"}
        id = {"form"}
        label = {"testing"}
        value = {"Input Value"}>
        </input>
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
<button
id={"fetchFF"}
>click me to Fetch</button>
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
