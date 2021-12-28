import React from "react";

//Activity Chart info
export default function Activity() {
  return (
    <div id="bmrRef" className="ui container segment raised">
      <h1 style={{ color: "black" }}>Activity Reference Chart</h1>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Activity Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Name">Sedentary: little or no exercise</td>
          </tr>
          <tr>
            <td data-label="Name">Lightly Active: Exercise 1-3 times/week:</td>
          </tr>
          <tr>
            <td data-label="Name">Active: Exercise 4-5 times/week</td>
          </tr>
          <tr>
            <td data-label="Name">
              Moderately Active: Daily exercising or intense exercise 3-4
              times/week
            </td>
          </tr>
          <tr>
            <td data-label="Name">Athletic: Intense exercise 6-7 times/week</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
