import React from 'react'

//Final Calculation of caloric needs
export default function DailyCaloricNeeds() {
    return (
        <div id="normalCards" className="ui raised very padded text segment">
        <h1 style={{color: "black"}} >Daily Caloric Needs</h1>
        <hr/>
        <div className="ui two column doubling stackable grid">
          <div className='ui column grid'>
          <label id="bmiLabel">Activity Level</label>
          <select id="activity" style={{marginBottom: "30px"}} className="ui medium selection dropdown">
            <option value="0">Sedentary</option>
            <option value="1">Lightly Active</option>
            <option value="2">Active</option>
            <option value="3">Moderatly Active</option>
            <option value="4">Athletic</option>
          </select>
          <span>
            <button className="ui button" id="calorieBtn">Daily Needs</button>
          </span>
          </div>
          <div className="ui column grid">
        <h3 id="dailyNeeds">*Be sure to determine your BMR first</h3>
            </div>  
      </div>
      </div>
    )
}
