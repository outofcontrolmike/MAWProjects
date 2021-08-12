import React, {Component} from 'react'
import Table from './table'

class App extends Component {
    render() 
    {
        const characters = [
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
        ]

        //Pass our characterData array to the Table component as a prop
      return (
        <div className="container">
            <Table characterInfo={characters} />
        </div>
      )
    }
  }

  export default App