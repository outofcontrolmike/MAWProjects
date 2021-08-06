import { Component } from 'react';
import './App.css';
import Characters from './components/characters'

class App extends Component {

  state = {
    //stores output from api
    characters: []
  }


  componentDidMount() {
    let url = "https://xmenapiheroku.herokuapp.com/api/characters";
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      this.setState({ characters: data.results })
    })
    .catch(console.log)
  }

  render() {
    return (
      <Characters characters={this.state.characters} />
    )
  }
}

export default App;
