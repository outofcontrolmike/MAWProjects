import React from "react";

//Profile Component
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

  //Handles swapping character image and Age
  function changeGameImage() {
    let target = this.id;
    let age = document.getElementById('reAge');
    let characterImage = document.getElementById("resPortrait");
    switch (target) {
      //Chris Scenarios
      case "RE Chris Redfield":
        characterImage.src = props.imgs[0].src;
        age.innerHTML = "23"
        break;
      case "RE 5 Chris Redfield":
        characterImage.src = props.imgs[6].src;
        age.innerHTML = "35"
        break;
      case "RE Code Veronica Chris Redfield":
        characterImage.src = props.imgs[5].src;
        age.innerHTML = "25"
        break;
      case "RE Village Chris Redfield":
        characterImage.src = props.imgs[8].src;
        age.innerHTML = "48"
        break;

      //Jill Scenarios
      case "RE Jill Valentine":
        characterImage.src = props.imgs[1].src;
        age.innerHTML = "23"
        break;
      case "RE 3 Jill Valentine":
        characterImage.src = props.imgs[3].src;
        age.innerHTML = "23"
        break;
      case "RE 5 Jill Valentine":
        characterImage.src = props.imgs[7].src;
        age.innerHTML = "32"
        break;

      //Leon Scenarios
      case "RE 2 Leon S. Kennedy":
        characterImage.src = props.imgs[2].src;
        age.innerHTML = "21"
        break;
      case "RE 4 Leon S. Kennedy":
        characterImage.src = props.imgs[4].src;
        age.innerHTML = "27"
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

  //accepts array index pointer
  function setupCharacterContent(index) {
    let charInfo = props.data[index];

    //Set character info
    reName.innerHTML = charInfo.name;
    reAge.innerHTML = charInfo.age;
    reHeight.innerHTML = charInfo.height;
    reWeight.innerHTML = charInfo.weight;
    reGames.innerHTML = charInfo.games;
    reBio.innerHTML = charInfo.bio;

    createGameMenu(charInfo.gamesArray, charInfo.name);
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
        <br></br>
        <span id="reAge">{props.data[0].age}</span>
      </p>
      <p>
        <span id="bioLabel"> Height: </span>
        <br></br>

        <span id="reHeight">{props.data[0].height}</span>
      </p>

      <p>
        <span id="bioLabel"> Weight: </span>
        <br></br>

        <span id="reWeight">{props.data[0].weight}</span>
      </p>

      <p>
        <span id="bioLabel"> Related Games: </span>
        <br></br>

        <span id="reGames">{props.data[0].games}</span>
      </p>

      <p>
        <span id="bioLabel"> Profile: </span>
        <br></br>

        <span id="reBio">{props.data[0].bio}</span>
      </p>
    </div>
  );
}
