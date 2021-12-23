import React from "react";

//BMI Calculator
export default function BMI() {
  return (
    <div className="ui container">
      <div id="normalCards" className="ui raised very padded text segment">
        <div className="ui large form">
          <h1 style={{ color: "black" }}>Body Mass Index Calculator</h1>
          <hr />
          <div className="three fields">
            <div className="field">
              <label>Height (in)</label>
              <input
                id="bmiHeight"
                placeholder="Height"
                type="tel"
                maxlength="2"
              />
            </div>
            <div className="field">
              <label>Weight (lbs)</label>
              <input
                id="bmiWeight"
                placeholder="Weight"
                type="tel"
                maxlength="3"
                max={3}
              />
            </div>
            <div className="field">
              <h3 id="bmiInfo" style={{ color: "black" }}>
                {null}
              </h3>
            </div>
          </div>
          <span className="ui">
            {" "}
            <button className="ui button" style={{ width: "66%" }} id="bmiCalc">
              Calculate BMI
            </button>
          </span>{" "}
        </div>
      </div>
    </div>
  );
}
