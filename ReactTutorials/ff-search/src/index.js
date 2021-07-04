import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const List = (props) => (
  <div>
  {props.characters.map(character => console.log(character) + <Card key={character.id} {...character}/>)}
  </div>
);


class Card extends React.Component {
  render() {

    const character = this.props;
    return(
      <div className={"ui segment container"}
      id ={"ffCard"}
      >
      <img src = {character.pictures}
      alt ={"Cool FF character"} />
        <div className = "info">
        <h1 className = "name">{character.name}</h1>
        <p className = "origin">{character.origin}</p>
      </div>
      </div>
    );
  }
}

class Form extends React.Component {
	state = { charName: '' };
	handleSubmit = async (event) => {
  	event.preventDefault();
    const resp = await  fetch(`https://www.moogleapi.com/api/v1/characters/search?name=${this.state.charName}`)
    .then(response => response.json())
    .then(data =>  
      console.log(data)
      );
          this.props.onSubmit(resp);
    this.setState({ charName: '' });
  };

	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
    	  <input 
          type="text" 
          value={this.state.charName}
          onChange={event => this.setState({ charName: event.target.value })}
          placeholder="GitHub charName" 
          required 
        />
        <button>Add card</button>
    	</form>
    );
  }
}


class App extends React.Component {
  state = {
    characters: [],
  };

  addNewCharacter = (characterData) => {
    this.setState(prevState => ({
      characters: [...prevState.characters, characterData],
    }));
  };
render() {
  return(
    <div> 
      <div className="header">{this.props.title}</div>
    <Form onSubmit={this.addNewCharacter}/>
    <List characters={this.state.characters} />
    <h1>Testing</h1>
    </div> 
  );
}

}

ReactDOM.render(<App title="testing" /> , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals