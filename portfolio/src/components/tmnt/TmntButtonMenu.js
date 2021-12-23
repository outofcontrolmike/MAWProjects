import React from 'react'

function tmntButtonMenu() {
    return (
        <div>
             <div className="ui column" id="buttonGroup">
        <button className="ui blue inverted button large tmntBtn"id="addLives">Add Lives</button>
        <button className="ui orange inverted button large tmntBtn" id="addPoints">Add Points</button>
        <button className="ui purple inverted button large tmntBtn" id="minusPoints">Minus Points</button>
        <button className="ui red inverted button large tmntBtn" id="resetStats">Reset Stats</button>
        
      
      </div>
        </div>
    )
}

export default tmntButtonMenu
