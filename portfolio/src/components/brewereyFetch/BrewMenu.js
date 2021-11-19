import React from "react";

function BrewMenu() {
  return (
    <>
      <div className="relaxed grid container stackable">
        <h1>Brewery Fetching</h1>
        <div className="ui two column container grid form">
          <div className="ui column">
            <div className="field">
              <select
                name="state"
                id="stateFilter"
                className="ui compact selection dropdown"
              >
                <option value="" disabled selected="selected">
                  Select a State
                </option>
                <option>All</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="Colorado">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            {/* <!--Brewery Type Select box--> */}
            <div className="field">
              <select className="ui compact selection dropdown" id="brewType">
                <option>Brewery Type</option>
                <option>Nano</option>
                <option>Micro</option>
                <option>Regional</option>
                <option>Brewpub</option>
                <option>Planning</option>
                <option>Contract</option>
                <option>Proprietor</option>
                <option>Closed</option>
              </select>
            </div>
          </div>
          <div className="ui column">
            <div className="container ui">
              <span id="count" className="huge ui text">
                0
              </span>
            </div>
            <span style={{ float: "right" }}>Advanced Filtering</span>
          </div>
          <button id="submitFetch" className="ui button fluid massive twitter">
            Search!!!
          </button>
        </div>
      </div>

      {/************************************************** */}
      {/* <div
        className="ui two column very relaxed grid container stackable"
        id="brewContainer"
      >
        <div className="column container" id="brewContainer">
          <hr />
          <div className="ui action input form" id="input">
            <input
              id="inputValue"
              type="text"
              placeholder="Enter filter value"
            />
            <div id="submitFetch" className="ui button blue field">
              Search
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default BrewMenu;
