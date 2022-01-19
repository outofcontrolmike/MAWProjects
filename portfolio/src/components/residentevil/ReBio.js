import React from "react";

export default function ReBio(props) {
  let reName,
    reAge,
    reHeight,
    reWeight,
    reGames,
    reBio,
    reGamesList,
    reGamesMenu = "";

  //Grabs all id's and assigns
  function loadStuff() {
    reName = document.getElementById("reName");
    reAge = document.getElementById("reAge");
    reHeight = document.getElementById("reHeight");
    reWeight = document.getElementById("reWeight");
    reGames = document.getElementById("reGames");
    reBio = document.getElementById("reBio");
    reGamesList = document.getElementById("resGames");

    //Grabs each character name and add
    document.querySelectorAll(".reMenuItem").forEach((item) => {
      item.addEventListener("click", swapContent);
    });
  }
  //grabs everything after initial page load
  setTimeout(loadStuff, 1000);

  function swapContent(character) {
    let target = character.target.id;

    switch (target) {
      case "chris":
        characterInfo("chris", 0);
        break;
      case "jill":
        characterInfo("jill", 1);
        break;
      case "leon":
        characterInfo("leon", 2);
        break;
    }
  }

  function changeGameImage(gameTitle) {
    console.log("gameTitle from changGameImage", gameTitle);
    let target = gameTitle.id;
    let characterImage = document.getElementById("resPortrait");
    switch (target) {
      case "RE Chris Redfield":
        characterImage.src = "img/residentEvil/res1_chris.png";
        break;
      case "RE 5 Chris Redfield":
        characterImage.src = "img/residentEvil/res5_chris.png";
        break;
      case "leon":
        characterInfo("leon", 2);
        break;
    }
  }

  //Handles swapping out character content with passed data
  function characterInfo(id, content) {
    selectAllItems();
    let itemId = document.getElementById(id);
    itemId.style.color = "forestgreen";
    setupCharacterContent(content);
  }

  //Changes non-selected main menu items
  function selectAllItems(e) {
    document.querySelectorAll(".reMenuItem").forEach((item) => {
      item.style.color = "white";
    });
  }

  //accepts array array index pointer
  function setupCharacterContent(index) {
    let charInfo = props.data[index];
    console.log("charInfo", charInfo);

    //Set character info
    reName.innerHTML = charInfo.name;
    reAge.innerHTML = charInfo.age;
    reHeight.innerHTML = charInfo.height;
    reWeight.innerHTML = charInfo.weight;
    reGames.innerHTML = charInfo.games;
    reBio.innerHTML = charInfo.bio;

    let gameData = createGameMenu(charInfo.gamesArray, charInfo.name);

    //   reGamesList.innerHTML = createGameMenu(index);
  }

  //Locates Game list for passed in character index and appends to character bio menu
  function createGameMenu(character, characterName) {
    let resGamesList = document.getElementById("resGamesList");
    resGamesList.innerHTML = "";
    character.map((gameTitle) => {
      let resDiv = document.createElement("div");
      resDiv.className = "resMenuItem";
      resDiv.id = gameTitle + " " + characterName;
      resDiv.innerHTML = gameTitle + "&nbsp;";
      resDiv.style.paddingRight = "6rem";
      resGamesList.appendChild(resDiv);
      console.log("res.id", resDiv.id);
      console.log("res className", resDiv.className);

      reGamesMenu = document.querySelectorAll(".resMenuItem");
      reGamesMenu.forEach((item) => {
        console.log("item id", item.id);
        item.addEventListener("click", changeGameImage(item));
      });
    });
  }

  return (
    <div className="ui column" id="reBioContainer">
      <h1 id="reName" style={{ textAlign: "center", color: "red" }}>
        {props.data[0].name}
      </h1>
      <p id="reAge">{props.data[0].age}</p>
      <p id="reHeight">{props.data[0].height}</p>
      <p id="reWeight">{props.data[0].weight}</p>
      <p id="reGames">{props.data[0].games}</p>
      <p id="reBio">{props.data[0].bio}</p>
    </div>
  );
}
