/*
*Title: Random Dog Viewer
*Purpose: Display random dogs based on button click
*Date: 01/29/2022
*Author: Michael Wilson
*/

import React from "react";
import DogFooter from "../../../components/dogs/DogFooter";
// Main component for Dogs Project

export default function Dogs() {
  function handleClick() {
    let url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
      .then((response) => response.json())
      .then((dog) => {
        let dogImage = document.getElementById("dogImage");
        dogImage.src = dog.message;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div
      className="ui container fluid stackable"
      id="dogsProject"
      style={{ backgroundColor: "white", color: "black" }}
    >
      <p
        className="ui text massive black"
        style={{ textAlign: "center"}}
        id="dogHeader"
      >
        Random Dog Generator
      </p>

      <div id="dogContainer" className="ui container">
        <img
          className="ui image centered rounded"
          id="dogImage"
          src="img/redDog.PNG"
          alt="dog image"
        ></img>

        <div className="ui container" id="dogBtnContainer">
          <button
            className="ui button huge black fluid circular"
            id="dogBtn"
            onClick={handleClick}
          >
            <i className="paw icon huge" style={{ paddingLeft: "1.5rem" }}></i>
          </button>
        </div>
      </div>
      <DogFooter />
    </div>
  );
}
