import React from 'react'
import PokeModal from "./PokemonModal";

function PokemonMenu() {
    return (
        <div>
      <div className="ui inverted" id="menu">
    <div id="searchTools" className="ui stackable segment container">
      <div className="ui container">
        <div id="inputContainer" className="ui icon input w-75">
          <input className="searchInput" type="text" id="searchValue" placeholder="Search Pokemon Name..."/>
          <i className="inverted circular search link icon" tabindex="0" type="submit" id="search"></i>
        </div>
        <span style={{float: "right", marginRight: "60px" }} onlick="catchRandom()"><img className="ui image tiny" alt="randomCatch"
            src="img/pk.png"/></span>
      </div>
      <br />
      <div className="ui container">
        <div className="ui accordion" id="accordion">
          <div className="title" id="">
            <i className="dropdown icon"></i>
            <span id="advanced">Advanced Options</span>
          </div>
          <div className="content">
            <div className="transition hidden">
              <p>
              </p>
              <div className="ui form">
                <div className="grouped fields">
                  <h3>Filters</h3>
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input type="radio" name="example2" checked="checked" id="name"/>
                      <label>Name/ID</label>
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui radio checkbox fluid">
                      <input className="ui fluid" type="radio" name="example2" id="collection"/>
                      <label>Collection</label>
                    </div>
                  </div>
                  <hr />
                  <h3>Other</h3>
                  <button id="clear" type="button"  style={{"backgroundColor": "red"}}className="ui black button large basic">
                    Reset</button>
                <PokeModal/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
</div>
        </div>
    )
}

export default PokemonMenu
