import React from 'react'

//Acitivy Chart info
export default function Activity() {

    return (
        <div id="bmrRef" className="ui container segment raised">
        <h1 style={{color: "black"}}>Activity Reference Chart</h1>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Activity Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Name">Sedentary: little or no excercise</td>
            </tr>
            <tr>
              <td data-label="Name">Exercise 1-3 times/week:</td>
            </tr>
            <tr>
              <td data-label="Name">Exercise 4-5 times/week</td>
            </tr>
            <tr>
              <td data-label="Name">Daily exercsising or intense exercise 3-4 times/week</td>
            </tr>
            <tr>
              <td data-label="Name">Intense exercise 6-7 times/week</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}
