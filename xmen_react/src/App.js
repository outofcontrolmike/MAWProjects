import { Component } from 'react';
import './App.css';
import Characters from './components/characters';
import Episodes from './components/episodes';

class App extends Component {

  state = {
    //stores output from api
    characters: [],
    episodes: [],
    data: [],
  }

  componentDidMount() {
    let url = "https://xmenapiheroku.herokuapp.com/api/characters";
    let  url2 = "https://xmenapiheroku.herokuapp.com/api/episodes";
    fetch(url2)
    .then(res => res.json())
    .then((data) => {
      this.setState({ episodes: data.results})
    })
    .catch(console.log)
  }

  render() {
    return (   
      // <Characters characters={this.state.characters} />
      <Episodes episodes={this.state.episodes} />
    )
  }
}

export default App;
