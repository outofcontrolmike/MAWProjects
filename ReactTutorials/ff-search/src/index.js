import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


class PageHeader extends React.Component {
  render() {
    return (
      <div
      className={"ui container segment"}
      id={"header"}
      >
<h1>Final Fantasy Character Search</h1>
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
        <h1>List</h1>
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
