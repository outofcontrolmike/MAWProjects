import React from "react";

//Resident Evil Games List
export default function ReGames(props) {
  let gameData = props.data.data;

  //Locates Game list for passed in character index
  function createGameMenu(character) {
    let resId = 0;
    gameData[character].gamesArray.map((gameTitle) => {
      let resDiv = document.createElement("div");
      resDiv.id = resId;
      resDiv.className = "testing";
      resDiv.innerHTML = gameTitle + "&nbsp;";
      document.getElementById("resGamesList").appendChild(resDiv);
      resId++;
    });
    let menuItems = document.querySelectorAll(".testing");
    menuItems.forEach((item) => {
      item.addEventListener("click", changeGameImage);
    });
  }

  //Initial Page Load image swapping
  function changeGameImage() {
    let target = this.id;
    let characterImage = document.getElementById("resPortrait");
    switch (target) {
      //Chris Scenarios
      case "0":
        characterImage.src = props.data.imgs[0].src;
        break;
      case "1":
        characterImage.src = props.data.imgs[5].src;
        break;
      case "2":
        characterImage.src = props.data.imgs[6].src;
        break;
      case "3":
        characterImage.src = props.data.imgs[8].src;
        break;
    }
  }
  setTimeout(() => {
    //Passing in Chris for original page load
    createGameMenu(0);
  }, 10);

  return (
    <div className="ui secondary menu container column stackable" id="resGamesList">
      {/* Res games should be dynamically set here */}
    </div>
  );
}
