import React from 'react'


//BMR calc
export default function BMR() {
    return (
        <div>
             <div id="normalCards" className="ui raised very padded text segment">
        <h1 style={{color: "black"}}>Basil Metabolic Rate Calculation</h1>
        <hr/>
          <div className="ui two column doubling stackable grid container">
            <div className="ui column grid">
            <label id="bmiLabel">Height (in)</label>
            <input id="bmrHeight" type="tel" maxlength="2" className="input"/>
            <div> <label id="bmiLabel">Weight(lbs)</label>
              <input type="tel" id="bmrWeight" maxlength="3" max="3"/></div>
              
          <label id="bmiLabel">Age</label>
          <input type="tel" id="bmrAge" maxlength="3" max="110"/>
          <div id="gender"><label id="bmiLabel">Gender</label>
            <select id="genders" style={{marginBottom: "30px"}} className="ui medium selection dropdown">
              <option id="male" value="0">Male</option>
              <option id="female" value="1">Female</option>
            </select></div>
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
