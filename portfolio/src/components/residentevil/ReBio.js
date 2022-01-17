import React from 'react'

export default function ReBio(props) {

    let reName, reAge, reHeight, reWeight, reGames, reBio, reGamesList = "";

    //Grabs all id's and assigns 
  function loadStuff() {
    reName = document.getElementById('reName');
    reAge = document.getElementById('reAge');
    reHeight = document.getElementById('reHeight');
    reWeight = document.getElementById('reWeight');
    reGames = document.getElementById('reGames');
    reBio = document.getElementById('reBio');
    reGamesList = document.getElementById('resGames')

    //Grabs each character name
    document.querySelectorAll('.reMenuItem').forEach(item => {
      item.addEventListener('click', swapContent);
    })
  }
  //grabs everything after initial page load
  setTimeout(loadStuff, 1000);

  function swapContent(character) {
    let target = character.target.id;

    switch (target) {
      case 'chris':
        characterInfo("chris", 0);
        break;
      case 'jill':
        characterInfo("jill", 1);
        break;
      case 'leon':
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

      function selectAllItems(e) {
        document.querySelectorAll('.reMenuItem').forEach(item => {
          item.style.color = "white";
        })
      }

      //accepts array array index pointer
      function setupCharacterContent(index) {

        let charInfo = props.data[index];
        console.log("charInfo", charInfo);
    
        //Set character info
         reName.innerHTML = charInfo.name;
          reAge.innerHTML = charInfo.age;
          reHeight.innerHTML = charInfo.height;
          reWeight.innerHTML = charInfo.weight
          reGames.innerHTML = charInfo.games;
          reBio.innerHTML = charInfo.bio;

          let gameData = createGameMenu(charInfo.gamesArray)
          console.log(gameData, "gameData from rebio")


        //   reGamesList.innerHTML = createGameMenu(index);
      }

    //Locates Game list for passed in character index
    function createGameMenu(character) {
        let resDiv = document.getElementById('resGamesList');
        resDiv.innerHTML = "";
        character.map(gameTitle => {
            resDiv.append(gameTitle);
        })
    }



    return (
        <div className='ui column'>
        <h1  id="reName"style={{ textAlign: "center" }} >{props.data[0].name}</h1>
        <p id="reAge">{props.data[0].age}</p>
        <p id="reHeight">{props.data[0].height}</p>
        <p id="reWeight">{props.data[0].weight}</p>
        <p id="reGames">{props.data[0].games}</p>
        <p id="reBio">{props.data[0].bio}</p> 
        </div>
    )
}
