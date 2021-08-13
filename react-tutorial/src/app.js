import React, {Component} from 'react'
import Table from './table'

class App extends Component {
  state = {
    characters: [
          {
            name: 'Charlie',
            job: 'Janitor',
          },
          {
            name: 'Mac',
            job: 'Bouncer',
          },
          {
            name: 'Dee',
            job: 'Aspring actress',
          },
          {
            name: 'Dennis',
            job: 'Bartender',
          },
        
    ],

  }

  removeCharacter = (index) => {
    const {characters} = this.state;

    this.setState({
      characters: characters.filter((character,i) => {
        return i !== index;
      }),
    })
  }

    render() 
    {
      const { characters } = this.state;
        //Pass our characterData array to the Table component as a prop
      return (
        <div className="container">
            <Table characterInfo={characters} removeCharacter={this.removeCharacter} />
        </div>
      )
    }
  }

  export default App