import { Component } from 'react';
import './App.css';
import Characters from './components/characters';

class App extends Component {

  state = {
    //stores output from api
    characters: [],
    episodes: [],
    data: [],
  }

  componentDidMount() {
    let  url = "https://xmenapiheroku.herokuapp.com/api/characters";
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      this.setState({ characters: data.results})
      console.log(data);
    })
  }

    componentWillUnmount() {
      this._isMounted = false;
    }

    // componentDidUpdate() {
    //   let  url = "https://xmenapiheroku.herokuapp.com/api/episodes";
    //   fetch(url)
    //   .then(res => res.json())
    //   .then((data) => {
    //     this.setState({ episodes: data.results})
    //     console.log(data);
    //   })
    // }


  // fetchCharacters() {
  //   console.log("we made it to fetch characters");
  //   let url = "https://xmenapiheroku.herokuapp.com/api/characters";
  //   fetch(url)
  //   .then(res => res.json())
  //   .then((data) => {
  //     this.forceUpdate({ characters: data.results})
  //     this.state = this;
  //   })
  //   .catch(console.log)
  // }

  

  render() {
    return (
      <Characters characters={this.state.characters} />
      )
  }
}

export default App;
