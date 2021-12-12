import React from 'react'


//BMR calc
export default function BMR() {
    return (
        <div>
             <div id="normalCards" className="ui raised very padded text segment">
        <h1>Basil Metabolic Rate Calculation</h1>
        <hr/>
          <div className="ui two column doubling stackable grid container">
            <div className="ui column grid">
            <label>Height (in)</label>
            <input id="bmrHeight" type="tel" maxlength="2" className="input"/>
            <span> <label>Weight(lbs)</label>
              <input type="tel" id="bmrWeight" maxlength="3" max="3"/></span>
              <p>
          <label>Age</label>
          <input type="tel" id="bmrAge" maxlength="3" max="110"/></p>
          <span id="gender"><label>Gender</label>
            <select id="genders" className="ui medium selection dropdown">
              <option id="male" value="0">Male</option>
              <option id="female" value="1">Female</option>
            </select></span>
          <button id="bmrCalc" className="ui button">Calculate BMR</button>
          </div>
        <div className="ui column grid" id="bmrInfo">
          <h3>
            *Fill out this form to get your BMR
          </h3>
        </div>
      </div>
      </div>
        </div>
    )
}
