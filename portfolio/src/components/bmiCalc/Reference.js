import React from "react";

//BMI Reference Chart
export default function Reference() {
  return (
    <div id="bmrRef" className="ui container segment raised">
      <h1 style={{ color: "black" }}>BMI Reference Chart</h1>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>BMI Value</th>
            <th>Definition</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Name">Less than 18.5</td>
            <td>Thin</td>
          </tr>
          <tr>
            <td data-label="Name">18.6 - 24.9</td>
            <td>Healthy</td>
          </tr>
          <tr>
            <td data-label="Name">25-29.9</td>
            <td>Overweight</td>
          </tr>
          <tr>
            <td data-label="Name">More than 30</td>
            <td>Obese</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
