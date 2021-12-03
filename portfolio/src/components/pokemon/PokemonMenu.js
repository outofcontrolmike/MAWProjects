import React from 'react'
import PokeModal from "./PokemonModal";

function PokemonMenu() {
    var prevUrl = "";
//variables
var list = document.getElementById("test");
var toggleID = document.getElementById("catchOne");
// let input = document.getElementById("searchValue").value;

    setTimeout(windowload, 2000);

    function windowload() {
        //on Page Load
window.onload = invertColors;


//SUPER IMPORTANT
document.getElementById('searchValue').addEventListener('change', fetchStatus);


let search = document.getElementById('search');
search.addEventListener('click', catchSingle)

let collection = document.getElementById('collection');
collection.addEventListener('change', fetchStatus);

let single = document.getElementById('name');
single.addEventListener('change', fetchStatus);



//event listeners
var searchInput = document.getElementById('searchValue');

document.getElementById("clear").addEventListener("click", clearList);


// Execute a function when the user releases a key on the keyboard
searchInput.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    document.getElementById('search').click();
  }
});
    }


    function fetchStatus() {
        let pokeSearch = document.getElementById('search');
        let single = document.getElementById('name');
        let collection = document.getElementById('collection');
        let placeholder = document.getElementById('searchValue');
      
        if (single.checked) {
          pokeSearch.removeEventListener('click', catchList);
          pokeSearch.addEventListener('click', catchSingle);
          placeholder.placeholder = "Enter Name or ID";
        }
      
        if (collection.checked) {
          pokeSearch.removeEventListener('click', catchSingle);
          pokeSearch.addEventListener('click', catchList);
          placeholder.placeholder = "Enter Amount";
        }
      }

      //Fetching Functions //
//****************************************************************************************************************************** */
//Fetch information for one pokemon
function catchSingle() {
    var input = document.getElementById("searchValue").value;
    if (input > 0 && input <= 893) {
      var pURL = input;
      while (prevUrl != pURL) {
        /////////////////Fetch
        fetch("https://pokeapi.co/api/v2/pokemon/" + input + "/")
          .then(response => {
            if (!response.ok) {
              throw new Error("Network response was not okay");
            }
            return response.json();
          })
  
          .then((pokemon) => {
            createSingle(pokemon);
          })
  
          .catch((error) => {
            // Handle the error
            console.log("should be an error for a 404");
            console.log(error);
            alert("error!");
          });
  
  
        //////////end fetch
        document.getElementById("searchValue").value = "";
        prevUrl = pURL;
      }
    }
    //if not an interger or empty string
    else if (input != "") {
      var LowerInput = input.toLowerCase(0);
      while (prevUrl != input) {
        fetch("https://pokeapi.co/api/v2/pokemon/" + LowerInput + "/")
          .then((response) => response.json())
          .then(function (pokemon) {
            createSingle(pokemon);
          });
        document.getElementById("searchValue").value = "";
        prevUrl = input;
      }
    }
    //error handling
    else {
      alert("Please try again");
    //   input.value = "";
    //   document.getElementById("searchValue").value = "";
    }
  } //end catchSingle
  
  //Fetch Multiple Pokemon
  function catchList() {
    var input = document.getElementById("searchValue").value;
    if (input > 0) {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=" + input)
        .then((response) => response.json())
        .then(function (allPokemon) {
          allPokemon.results.forEach(function (pokemon) {
            fetchPokemonData(pokemon);
  
          });
        });
      input.value = "";
      document.getElementById("searchValue").value = "";
    } else {
      alert("Please enter a value over 0");
      input.value = "";
      document.getElementById("searchValue").value = "";
    }
  } //end Multi
  
  //Fetch Random Amount
  function catchRandom() {
    var alg = Math.floor(Math.random(1) * 898); {
      fetch("https://pokeapi.co/api/v2/pokemon/" + alg)
        .then((response) => response.json())
        .then(function (pokemon) {
          createSingle(pokemon);
        });
    }
  }
  
  function fetchPokemonData(pokemon) {
    let url = pokemon.url;
    fetch(url)
      .then((response) => response.json())
      .then(function (pokeData) {
        renderPokemon(pokeData);
      });
  }
  
  //Rending Pokemon Data//
  //****************************************************************************************************************************** */
  
  //Render for multiple pokemon
  function renderPokemon(pokeData) {
    var heightMath = (pokeData.height / 3.048).toFixed(2);
    var weightMath = (pokeData.weight / 4.536).toFixed(2);
    var baseStat = pokeData.base_experience;
  
    let container = document.getElementById("test");
    let pokeContainer = document.createElement("div");
    pokeContainer.classList.add("col-m-6", "card", "m-4", "pb-4", "align-content-center", "success");
    container.classList.add("ui");
    var pokeImage = document.createElement("img");
    pokeImage.classList.add('mobileImage');
    var pokeName = document.createElement("h1");
    var pokeId = document.createElement("p");
    var poketypes = document.createElement("p");
    var pokeHeight = document.createElement("p");
    var pokeWeight = document.createElement("p");
    var baseStats = document.createElement("p");
    var abilities = document.createElement('p');
  
    pokeImage.height = "300";
    pokeImage.width = "300";
    pokeImage.style.alignSelf = "center";
    var pkId = pokeData.id;
    var pkImg = (pokeData.srcset =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + pkId + ".png");
    //end image
    pokeImage.src = pkImg;
    pokeContainer.style.backgroundColor = "#d5e0da";
    pokeName.innerHTML = pokeData.name;
    pokeId.innerHTML = `#${pokeData.id}`;
    poketypes.innerHTML = "Types: " + pokeData.types.map((el) => el.type.name);
    abilities.innerHTML = "<hr><b>Abilities:<br></b> " + pokeData.abilities.map((el) => el.ability.name);
    pokeHeight.innerHTML = "Height: " + heightMath + " Feet";
    pokeWeight.innerHTML = "Weight: " + weightMath + " lbs";
    baseStats.innerHTML = "EXP earned:" + baseStat;
    pokeContainer.append(
      pokeImage,
      pokeName,
      pokeId,
      poketypes,
      pokeHeight,
      pokeWeight,
      baseStats,
      abilities,
    );
  
    let colorType = pokeData.types[0].type.name;
    abilities.style.wordWrap = "break-word";
    abilities.style.padding = "20px;"
    abilities.style.maxWidth = "200px;";
    setColor(colorType, pokeContainer);
  
    container.prepend(pokeContainer);
  } //end multi
  
  //Render Single Pokemon
  function createSingle(pokeData) {
  
    var heightMath = (pokeData.height / 3.048).toFixed(2);
    var weightMath = (pokeData.weight / 4.536).toFixed(2);
    var baseStat = pokeData.base_experience;
  
    let container = document.getElementById("test");
    let pokeContainer = document.createElement("div");
    pokeContainer.classList.add("col-m-6", "card", "m-4", "pb-4", "align-content-center");
    var pokeImage = document.createElement("img");
    pokeImage.classList.add('mobileImage');
    var pokeName = document.createElement("h1");
    var pokeId = document.createElement("p");
    var poketypes = document.createElement("p");
    var pokeHeight = document.createElement("p");
    var pokeWeight = document.createElement("p");
    var baseStats = document.createElement("p");
    
    var abilities = document.createElement('p');
  
    pokeImage.height = "300";
    pokeImage.width = "300";
    pokeImage.style.alignSelf = "center";
  
    //image for pokemon
    var pkId = pokeData.id;
    var pkImg = (pokeData.srcset =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + pkId + ".png");
  
    pokeImage.src = pkImg;
    pokeName.innerHTML = pokeData.name + "<hr>";
    pokeId.innerHTML = `#${pokeData.id}`;
    poketypes.innerHTML = "Types: " + pokeData.types.map((el) => el.type.name);
    abilities.innerHTML = "<hr><b>Abilities:<br></b> " + pokeData.abilities.map((el) => el.ability.name);
    pokeHeight.innerHTML = "Height: " + heightMath + " Feet";
    pokeWeight.innerHTML = "Weight: " + weightMath + " lbs";
    baseStats.innerHTML = "EXP earned: " + baseStat;
    pokeContainer.append(
      pokeImage,
      pokeName,
      pokeId,
      poketypes,
      pokeHeight,
      pokeWeight,
      baseStats,
      abilities,
    );
  
    abilities.style.maxWidth = "200px;";
    abilities.style.padding = "20px;"
    abilities.style.wordWrap = "break-word";
    pokeContainer.style.borderRadius = "50px;";
  
    let colorType = pokeData.types[0].type.name;
    setColor(colorType, pokeContainer);
    container.prepend(pokeContainer);
  
  } // end single catch -- Should be able to combine single and multi, pass in a paramter to differ between the two
  
  //Misc Functions//
  //****************************************************************************************************************************** */
  
  //Sets color of pokemon card based on type
  function setColor(color, pokeContainer) {
    let x = color
    switch (x) {
      case "normal":
        pokeContainer.style.backgroundColor = "#A8A77A";
        break;
      case "fire":
        pokeContainer.style.backgroundColor = "#EE8130";
        break;
      case "water":
        pokeContainer.style.backgroundColor = "#6390F0";
        break;
      case "electric":
        pokeContainer.style.backgroundColor = "#F7D02C";
        break;
      case "grass":
        pokeContainer.style.backgroundColor = "#7AC74C";
        break;
      case "ice":
        pokeContainer.style.backgroundColor = "#96D9D6";
        break;
      case "fighting":
        pokeContainer.style.backgroundColor = "#C22E28";
        break;
      case "poison":
        pokeContainer.style.backgroundColor = "#A33EA1";
        break;
      case "ground":
        pokeContainer.style.backgroundColor = "#E2BF65";
        break;
      case "flying":
        pokeContainer.style.backgroundColor = "#A98FF3";
        break;
      case "psychic":
        pokeContainer.style.backgroundColor = "#F95587";
        break;
      case "bug":
        pokeContainer.style.backgroundColor = "#A6B91A";
        break;
      case "rock":
        pokeContainer.style.backgroundColor = "#B6A136";
        break;
      case "ghost":
        pokeContainer.style.backgroundColor = "#735797";
        break;
      case "dragon":
        pokeContainer.style.backgroundColor = "#6F35FC";
        break;
      case "dark":
        pokeContainer.style.backgroundColor = "#705746";
        break;
      case "steel":
        pokeContainer.style.backgroundColor = "#B7B7CE";
        break;
      case "fairy":
        pokeContainer.style.backgroundColor = "#D685AD";
        break;
      default:
        pokeContainer.style.backgroundColor = "ghostwhite";
    }
  }
  
  //Clear out pokemon display and reset values
  function clearList() {
    document.getElementById("test").innerHTML = "";
    document.getElementById("searchValue").value = "";
  }
  
  //Invert colors (Should take in a couple parameters..for some type of functionallity)
  function invertColors() {
    
    //navigation bar
    document.getElementById('background').style.backgroundColor = "black";
    //container that pokemon are held on
    document.getElementById("test").style.backgroundColor = "black";
  }


    return (
        <div>
      <div className="ui inverted" id="menu">
    <div id="searchTools" className="ui stackable segment container">
      <div className="ui container">
        <div id="inputContainer" className="ui icon input w-75">
          <input className="searchInput" type="text" id="searchValue" placeholder="Search Pokemon Name..."/>
          <i className="inverted circular search link icon" tabindex="0" type="submit" id="search"></i>
        </div>
        <span style={{float: "right", marginRight: "60px" }} onlick="catchRandom()"><img className="ui image tiny" alt="randomCatch"
            src="img/pk.png"/></span>
      </div>
      <br />
      <div className="ui container">
        <div className="ui accordion" id="accordion">
          <div className="title" id="">
            <i className="dropdown icon"></i>
            <span id="advanced">Advanced Options</span>
          </div>
          <div className="content">
            <div className="transition hidden">
              <p>
              </p>
              <div className="ui form">
                <div className="grouped fields">
                  <h3>Filters</h3>
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input type="radio" name="example2" checked="checked" id="name"/>
                      <label>Name/ID</label>
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui radio checkbox fluid">
                      <input className="ui fluid" type="radio" name="example2" id="collection"/>
                      <label>Collection</label>
                    </div>
                  </div>
                  <hr />
                  <h3>Other</h3>
                  <button id="clear" type="button"  style={{"backgroundColor": "red"}}className="ui black button large basic">
                    Reset</button>
                <PokeModal/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
</div>
        </div>
    )
}

export default PokemonMenu
