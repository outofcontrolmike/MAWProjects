import React from "react";

//Daily Caloric Needs Component
export default function DailyCaloricNeeds() {
  return (
    <div className="ui container">
      <div id="normalCards" className="ui raised very padded text segment">
        <div className="ui large form">
          <h1 style={{ color: "black" }}> Daily Needs Caclulation</h1>
          <hr />
          <div className="two fields">
            <div className="field">
              <label id="bmiLabel">Activity Level</label>
              <select id="activity" className="ui medium selection dropdown">
                <option value="0">Sedentary</option>
                <option value="1">Lightly Active</option>
                <option value="2">Active</option>
                <option value="3">Moderatly Active</option>
                <option value="4">Athletic</option>
              </select>
            </div>
            <div className="field">
              <div className="ui column">
                <h3 id="dailyNeeds" style={{color: "black"}}></h3>
              </div>
            </div>
          </div>
          <div className="field">
            <button
              className="ui button"
              id="calorieBtn"
              style={{ width: "49%" }}
            >
              Daily Needs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
