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

  function changeGameImage() {
    let target = this.id;
    let characterImage = document.getElementById("resPortrait");
    switch (target) {
      //Chris Scenarios
      case "RE Chris Redfield":
        characterImage.src = props.imgs[0].src;
        break;
      case "RE 5 Chris Redfield":
        characterImage.src = props.imgs[6].src;
        break;
      case "RE Code Veronica Chris Redfield":
        characterImage.src = props.imgs[5].src;
        break;
      case "RE Village Chris Redfield":
        characterImage.src = props.imgs[8].src;
        break;

      //Jill Scenarios
      case "RE Jill Valentine":
        characterImage.src = props.imgs[1].src;
        break;
      case "RE 3 Jill Valentine":
        characterImage.src = props.imgs[3].src;
        break;
      case "RE 5 Jill Valentine":
        characterImage.src = props.imgs[7].src;
        break;

      //Leon Scenarios
      case "RE 2 Leon S. Kennedy":
        characterImage.src = props.imgs[2].src;
        break;
      case "RE 4 Leon S. Kennedy":
        characterImage.src = props.imgs[4].src;
        break;
    }
  }

  //Handles swapping out character content with passed data
  function characterInfo(id, content) {
    selectAllItems();
    let itemId = document.getElementById(id);
    itemId.style.color = "red";
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

      reGamesMenu = document.querySelectorAll(".resMenuItem");
      reGamesMenu.forEach((item) => {
        console.log("item from forEach reGamesMenu", item);
        item.addEventListener("click", changeGameImage);
      });
    });
  }

  return (
    <div className="ui column" id="reBioContainer">
      <h1 id="reName" style={{ textAlign: "center", color: "red" }}>
        {props.data[0].name}
      </h1>

      <p>
        <span id="bioLabel"> Age: </span>
        <span id="reAge">{props.data[0].age}</span>
      </p>
      <p>
        <span id="bioLabel"> Height: </span>
        <span id="reHeight">{props.data[0].height}</span>
      </p>

      <p>
        <span id="bioLabel"> Weight: </span>
        <span id="reWeight">{props.data[0].weight}</span>
      </p>

      <p>
        <span id="bioLabel"> Related Games: </span>
        <span id="reGames">{props.data[0].games}</span>
      </p>

      <p>
        <span id="bioLabel"> Profile: </span>
        <span id="reBio">{props.data[0].bio}</span>
      </p>
    </div>
  );
}
