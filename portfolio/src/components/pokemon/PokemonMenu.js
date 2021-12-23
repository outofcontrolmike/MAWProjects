import React from "react";
import PokeModal from "./PokemonModal";

//Function compoment for Pokemon Menu
function PokemonMenu() {
  var prevUrl = "";

  setTimeout(windowload, 10);

  //Basically adds event listeners to page elements
  function windowload() {
    //SUPER IMPORTANT
    document
      .getElementById("pokeSearchValue")
      .addEventListener("change", fetchStatus);

    let search = document.getElementById("search");
    search.addEventListener("click", catchSingle);

    let collection = document.getElementById("collection");
    collection.addEventListener("change", fetchStatus);

    let single = document.getElementById("name");
    single.addEventListener("change", fetchStatus);

    //event listeners
    var searchInput = document.getElementById("pokeSearchValue");

    document.getElementById("pkClear").addEventListener("click", clearList);

    // Execute a function when the user releases a key on the keyboard
    searchInput.addEventListener("keyup", function (event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        document.getElementById("search").click();
      }
    });
  }

  //Configures the status of the user fetching
  function fetchStatus() {
    let pokeSearch = document.getElementById("search");
    let single = document.getElementById("name");
    let collection = document.getElementById("collection");
    let placeholder = document.getElementById("pokeSearchValue");

    if (single.checked) {
      pokeSearch.removeEventListener("click", catchList);
      pokeSearch.addEventListener("click", catchSingle);
      placeholder.placeholder = "Enter Name or ID";
    }

    if (collection.checked) {
      pokeSearch.removeEventListener("click", catchSingle);
      pokeSearch.addEventListener("click", catchList);
      placeholder.placeholder = "Enter Amount";
    }
  }

  //Fetching Functions //
  //****************************************************************************************************************************** */

  //Fetch information for one pokemon
  function catchSingle() {
    var input = document.getElementById("pokeSearchValue").value;
    if (input > 0 && input <= 893) {
      var pURL = input;
      while (prevUrl !== pURL) {
        /////////////////Fetch
        fetch("https://pokeapi.co/api/v2/pokemon/" + input + "/")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not okay");
            }
            return response.json();
          })

          .then((pokemon) => {
            renderPokemon(pokemon);
          })

          .catch((error) => {
            // Handle the error
            alert("error!", error);
          });

        //////////end fetch
        document.getElementById("pokeSearchValue").value = "";
        prevUrl = pURL;
      }
    }
    //if not an interger or empty string
    else if (input !== "") {
      var LowerInput = input.toLowerCase(0);
      while (prevUrl !== input) {
        fetch("https://pokeapi.co/api/v2/pokemon/" + LowerInput + "/")
          .then((response) => response.json())
          .then(function (pokemon) {
            renderPokemon(pokemon);
          });
        document.getElementById("pokeSearchValue").value = "";
        prevUrl = input;
      }
    }
    //error handling
    // else {
    //   alert("Please try again");
    //   //   input.value = "";
    //   //   document.getElementById("pokeSearchValue").value = "";
    // }
  } //end catchSingle

  //Fetch Multiple Pokemon
  function catchList() {
    var input = document.getElementById("pokeSearchValue").value;

    if (input > 0) {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=" + input)
        .then((response) => response.json())
        .then(function (allPokemon) {
          allPokemon.results.forEach(function (pokemon) {
            fetchMultiple(pokemon);
          });
        });
    }
    document.getElementById("pokeSearchValue").value = "";
    prevUrl = input;
  } //end Multi

  //Fetch Random pokemon
  function catchRandom() {
    var alg = Math.floor(Math.random(1) * 898);
    fetch("https://pokeapi.co/api/v2/pokemon/" + alg)
      .then((response) => response.json())
      .then(function (pokemon) {
        renderPokemon(pokemon);
      });
  }

  //Handles fetching multiple pokemon
  function fetchMultiple(pokemon) {
    let url = pokemon.url;
    fetch(url)
      .then((response) => response.json())
      .then(function (pokeData) {
        renderPokemon(pokeData);
      });
  }

  //Rending Pokemon Data//
  //****************************************************************************************************************************** */

  //creates card element for pok
  function renderPokemon(pokeData) {
    var heightMath = (pokeData.height / 3.048).toFixed(2);
    var weightMath = (pokeData.weight / 4.536).toFixed(2);
    var baseStat = pokeData.base_experience;

    let container = document.getElementById("pokeTest");
    let pokeContainer = document.createElement("div");
    pokeContainer.setAttribute("id", "pokeContainer");

    pokeContainer.classList.add("pokeCard");
    container.classList.add("ui");
    var pokeImage = document.createElement("img");
    pokeImage.classList.add("mobileImage");
    var pokeName = document.createElement("h1");
    var pokeId = document.createElement("p");
    var poketypes = document.createElement("p");
    var pokeHeight = document.createElement("p");
    var pokeWeight = document.createElement("p");
    var baseStats = document.createElement("p");
    var abilities = document.createElement("p");

    let paragraphs = [
      pokeName,
      pokeId,
      poketypes,
      pokeHeight,
      pokeWeight,
      baseStats,
      abilities,
    ];

    paragraphs.forEach((element) => {
      element.setAttribute("id", "pokeP");
    });

    pokeName.setAttribute("id", "pokeh1");

    pokeImage.height = "250";
    pokeImage.width = "250";
    pokeImage.style.alignSelf = "center";
    var pkId = pokeData.id;
    var pkImg = (pokeData.srcset =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
      pkId +
      ".png");
    //end image
    pokeImage.src = pkImg;
    pokeContainer.style.backgroundColor = "#d5e0da";
    pokeName.innerHTML = pokeData.name;
    pokeId.innerHTML = `#${pokeData.id}`;
    poketypes.innerHTML = "Types: " + pokeData.types.map((el) => el.type.name);
    abilities.innerHTML =
      "<hr id='pokeHr' <b>Abilities:<br></b> " +
      pokeData.abilities.map((el) => el.ability.name);
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
      abilities
    );

    let colorType = pokeData.types[0].type.name;
    abilities.style.wordWrap = "break-word";
    abilities.style.padding = "20";
    abilities.style.maxWidth = "200";
    setColor(colorType, pokeContainer);

    container.prepend(pokeContainer);
  } //end multi

  //Misc Functions//
  //****************************************************************************************************************************** */

  //Sets color of pokemon card based on type
  function setColor(color, pokeContainer) {
    let x = color;
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
    document.getElementById("pokeTest").innerHTML = "";
    document.getElementById("pokeSearchValue").value = "";
  }

  return (
    <div>
      <div className="ui inverted" id="menu">
        <div id="pokeSearchTools" className="ui stackable container fluid">
          <div className="ui container">
            <div id="inputContainer" className="ui icon input w-75">
              <input
                className="pokeSearchInput"
                type="text"
                id="pokeSearchValue"
                placeholder="Search Pokemon Name..."
              />
              <i
                className="inverted circular search link icon"
                tabindex="0"
                type="submit"
                id="search"
              ></i>
            </div>
            <span
              style={{ float: "right", marginRight: "60px" }}
              onClick={catchRandom}
              id="pokeSpan"
            >
              <img
                className="ui image tiny"
                alt="randomCatch"
                src="img/pk.png"
                style={{ position: "absolute" }}
              />
            </span>
          </div>
          <br />
          <div className="ui container">
            <div className="ui accordion" id="accordion">
              <div className="title">
                <i className="dropdown icon pokemonDropdownIcon"></i>
                <span id="advanced" className="pokeAdvanced">
                  Advanced Options
                </span>
              </div>
              <div className="content">
                <div className="transition hidden">
                  <p></p>
                  <div className="ui form">
                    <div className="grouped fields">
                      <h3 id="pokeH3">Filters</h3>
                      <div className="field">
                        <div className="ui radio checkbox">
                          <input
                            type="radio"
                            name="example2"
                            checked="checked"
                            id="name"
                          />
                          <label id="pokeLabel">Name/ID</label>
                        </div>
                      </div>
                      <div className="field">
                        <div className="ui radio checkbox fluid">
                          <input
                            className="ui fluid"
                            type="radio"
                            name="example2"
                            id="collection"
                          />
                          <label id="pokeLabel">Collection</label>
                        </div>
                      </div>
                      <hr />
                      <h3 id="pokeH3">Other</h3>
                      <button
                        id="pkClear"
                        type="button"
                        style={{
                          backgroundColor: "red",
                          borderRadius: "25px",
                        }}
                        className="ui black button large basic pkBtn"
                      >
                        Reset
                      </button>
                      <PokeModal />
                      <a href="/projects">
                        <button
                          id="pkClear"
                          type="button"
                          style={{
                            backgroundColor: "orange",
                            borderRadius: "25px",
                            float: "right",
                          }}
                          className="ui black button large basic pkBtn"
                        >
                          Back to projects
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonMenu;
