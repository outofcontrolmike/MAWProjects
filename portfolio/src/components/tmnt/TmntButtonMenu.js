import React from 'react'

function tmntButtonMenu() {
    return (
        <div>
             <div className="ui column" id="buttonGroup">
        <button className="ui grey basic button large inverted" id="addLives">Add Lives</button>
        <button className="ui inverted positive basic button large" id="addPoints">Add Points</button>
        <button className="ui negative basic button large inverted" id="minusPoints">Minus Points</button>
        <button className="ui blue basic button large" id="resetStats">Reset Stats</button>
      
      </div>
        </div>
    )
}

export default tmntButtonMenu
