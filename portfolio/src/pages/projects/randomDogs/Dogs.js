import React from "react";
import DogFooter from "../../../components/dogs/DogFooter";
// - https://dog.ceo/dog-api/
export default function Dogs() {
  function handleClick() {
    let url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
      .then((response) => response.json())
      .then((dog) => {
        console.log("dog", dog);
        console.log("this", this);
        console.log("dogs stuff...", dog.message);
        console.log("dogMessage", dog.message.clientHeight);
        let dogImage = document.getElementById("dogImage");
        dogImage.src = dog.message;
        var width = dogImage.clientWidth;
        var height = dogImage.clientHeight;

        console.log(width, height);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div
      className="ui container fluid segment stackable "
      id="dogsProject"
      style={{ backgroundColor: "white", height: "1200px", color: "black" }}
    >
      <p
        className="ui text massive black"
        style={{ textAlign: "center", fontSize: "4.5rem" }}
        id="dogHeader"
      >
        Random Dog Viewer
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
