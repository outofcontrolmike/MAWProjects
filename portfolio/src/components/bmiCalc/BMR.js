import React from "react";

//BMR calc
export default function BMR() {
  return (
    <div className="ui container">
      <div id="normalCards" className="ui raised very padded text segment">
        <div className="ui large form">
          <h1 style={{ color: "black" }}> Basil Metabolic Rate Calculator</h1>
          <hr />

          <div className="three fields">
            <div className="field">
              <label>Height (in)</label>
              <input
                id="bmrHeight"
                placeholder="Height"
                type="tel"
                maxlength="2"
              />
            </div>
            <div className="field">
              <label>Weight (lbs)</label>
              <input
                id="bmrWeight"
                placeholder="Weight"
                type="text"
                maxLength="3"
              />
            </div>
            <div className="field">
              <label id="bmi">Age</label>
              <input
                type="tel"
                maxlength="2"
                id=""
                maxlength="3"
                max="110"
                placeholder="Age"
                id="bmrAge"
              />{" "}
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <div id="gender">
                <label>Gender</label>
                <select
                  id="genders"
                  style={{ marginBottom: "30px" }}
                  className="ui medium selection dropdown"
                >
                  <option id="male" value="0">
                    Male
                  </option>
                  <option id="female" value="1">
                    Female
                  </option>
                </select>
              </div>
            </div>
            <div className="field">
              <span className="ui">
                {" "}
                <button
                  className="ui button"
                  id="bmrCalc"
                  style={{ marginTop: "1.8rem" }}
                >
                  Calculate BMI
                </button>
              </span>
            </div>
          </div>
          <div className="field">
            <div className="ui column " id="bmrInfo">
              <h3></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
