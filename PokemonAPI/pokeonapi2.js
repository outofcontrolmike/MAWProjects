//variables
var list = document.getElementById("test");
var toggleID = document.getElementById("catchOne");
var toggleCatch = document.getElementById("catchList");
var input = document.getElementById("searchValue").value;
var pCount = document.getElementById("count");
var inputReader = document.getElementById("searchValue");
var btnRand = document.getElementById("catchRandom");
var mainPkCount = 1;
var counter = 1;
var prevUrl = "";

//event listeners
var btnRandom = document
  .getElementById("catchRandom")
  .addEventListener("click", catchRandom);
var btnInvert = document
  .getElementById("night")
  .addEventListener("click", invertColors);
var btnCatchMult = document
  .getElementById("catchList")
  .addEventListener("click", catchList);
document.getElementById("clear").addEventListener("click", clearList);
var btnSingle = document
  .getElementById("catchOne")
  .addEventListener("click", catchSingle);

//Fetching Functions //
//****************************************************************************************************************************** */
//Strech goals functions

//Fetch information for one pokemon
function catchSingle() {
  var input = document.getElementById("searchValue").value;
  console.log(input);
  if (input > 0 && input <= 893) {
    var pURL = input;
    while(prevUrl != pURL) {
 /////////////////Fetch
      fetch("https://pokeapi.co/api/v2/pokemon/" + input + "/")
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })

      .then((pokemon) => {
        createSingle(pokemon) ;
      }).catch((error) => {
        // Handle the error
        console.log("should be an error for a 404");
        console.log(error);
      });
////////////////////end fetch
    pCount.innerHTML = mainPkCount + " Pokemon Caught";
    document.getElementById("searchValue").value = "";
    prevUrl = pURL;
    }
  }
  //if not a number
  else if (input != "") {
    var LowerInput = input.toLowerCase(0);
    while(prevUrl != input) {
    var fetcher = fetch("https://pokeapi.co/api/v2/pokemon/" + LowerInput + "/")
      .then((response) => response.json())
      .then(function(pokemon) {
        createSingle(pokemon);
      });
    document.getElementById("searchValue").value = "";
    disableButtons("");
    prevUrl = input;
    }
  }
  //error handling
  else {
    alert("Please try again");
    input.value = "";
    document.getElementById("searchValue").value = "";
  }
} //end catchSingle

//Fetch Multiple Pokemon
function catchList() {
  console.log("catchList was hit");
  var input = document.getElementById("searchValue").value;
  if (input > 0) {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=" + input)
      .then((response) => response.json())
      .then(function(allPokemon) {
        pCount.innerHTML = input + " Pokemon caught!";
        allPokemon.results.forEach(function(pokemon) {
          fetchPokemonData(pokemon);
        });
      });
    input.value = "";
    document.getElementById("searchValue").value = "";
    disableButtons("true");
  } else {
    alert("Please enter a value over 0");
    input.value = "";
    document.getElementById("searchValue").value = "";
  }
} //end Multi

//Fetch Random Amount
function catchRandom() {
  var alg = Math.floor(Math.random(1) * 650);
  pCount.innerHTML = alg + " Pokemon caught!";
  fetch("https://pokeapi.co/api/v2/pokemon?limit=" + alg)
    .then((response) => response.json())
    .then(function(allPokemon) {
      allPokemon.results.forEach(function(pokemon) {
        fetchPokemonData(pokemon);
      });
    });
  disableButtons("true");
}
function fetchPokemonData(pokemon) {
  let url = pokemon.url;
  fetch(url)
    .then((response) => response.json())
    .then(function(pokeData) {
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
  pokeContainer.classList.add("col-lg-3", "m-4","pb-4", "card", "align-content-center");
  container.classList.add("ui", "segment");
  var pokeImage = document.createElement("img");
  var pokeName = document.createElement("h3");
  var pokeId = document.createElement("p");
  var poketypes = document.createElement("p");
  var pokeHeight = document.createElement("p");
  var pokeWeight = document.createElement("p");
  var baseStats = document.createElement("p");
  pokeImage.height = "300";
  pokeImage.width = "300";
  pokeImage.style.alignSelf = "center";
  var pkId = pokeData.id;
  var pkImg = (pokeData.srcset =
    "https://pokeres.bastionbot.org/images/pokemon/" + pkId + ".png");
  //end image
  pokeImage.src = pkImg;
  pokeName.innerHTML = pokeData.name;
  pokeId.innerHTML = `#${pokeData.id}`;
  poketypes.innerHTML = "Types: " + pokeData.types.map((el) => el.type.name);
  pokeHeight.innerHTML = "Height: " + heightMath + " Feet";
  pokeWeight.innerHTML = "Weight: " + weightMath + " lbs";
  baseStats.innerHTML = "Base Stat: " + baseStat;
  pokeContainer.append(
    pokeImage,
    pokeName,
    pokeId,
    poketypes,
    pokeHeight,
    pokeWeight,
    baseStats
  );
  container.appendChild(pokeContainer);
} //end multi

//Render Single Pokemon
function createSingle(pokeData) {
  var heightMath = (pokeData.height / 3.048).toFixed(2);
  var weightMath = (pokeData.weight / 4.536).toFixed(2);
  var baseStat = pokeData.base_experience;

  let container = document.getElementById("test");
  let pokeContainer = document.createElement("div");
  pokeContainer.classList.add("col-lg-3", "card", "m-4", "pb-4" ,"align-content-center");
  var pokeImage = document.createElement("img");
  var pokeName = document.createElement("h3");
  var pokeId = document.createElement("p");
  var poketypes = document.createElement("p");
  var pokeHeight = document.createElement("p");
  var pokeWeight = document.createElement("p");
  var baseStats = document.createElement("p");

  pokeImage.height = "250";
  pokeImage.width = "250";
  pokeImage.style.alignSelf = "center";


  //image for pokemon
  var pkId = pokeData.id;
  var pkImg = (pokeData.srcset =
    "https://pokeres.bastionbot.org/images/pokemon/" + pkId + ".png");

  pokeImage.src = pkImg;
  pokeName.innerHTML = pokeData.name;
  pokeId.innerHTML = `#${pokeData.id}`;
  poketypes.innerHTML = "Types: " + pokeData.types.map((el) => el.type.name);
  pokeHeight.innerHTML = "Height: " + heightMath + " Feet";
  pokeWeight.innerHTML = "Weight: " + weightMath + " lbs";
  baseStats.innerHTML = "Base Stat: " + baseStat;
  pokeContainer.append(
    pokeImage,
    pokeName,
    pokeId,
    poketypes,
    pokeHeight,
    pokeWeight,
    baseStats
  );
  container.appendChild(pokeContainer);

  console.log(container.innerHTML);
} // end single catch -- Should be able to combine single and multi, pass in a paramter to differ between the two

//Misc Functions//
//****************************************************************************************************************************** */

//Clear out pokemon display and reset values
function clearList() {
  document.getElementById("test").innerHTML = "";
  document.getElementById("searchValue").value = "";
  document.getElementById("catchRandom").disabled = false;
  document.getElementById("catchList").disabled = false;
  document.getElementById("catchOne").disabled = false;

  pCount.innerHTML = "";
  counter = 1;
  mainPkCount = 1;
}

//Invert colors (Should take in a couple parameters..for some type of functionallity)
function invertColors() {
  console.log("hello");
  document.getElementById("content").style.backgroundColor = "black";
  document.getElementById("background2").style.backgroundColor = "black";
  document.getElementById("h1").style.color = "red";
  pCount.innerHTML = "You inverted the colors!";
}

//Invert back to normal UI
function invertBack() {
  document.getElementById("background").style.backgroundColor = "white";
  document.getElementById("background2").style.backgroundColor = "white";
  document.getElementById("h1").style.color = "black";
}

//Disabling buttons
function disableButtons() {
  document.getElementById("catchRandom").disabled = false;
  document.getElementById("catchList").disabled = status;
  document.getElementById("catchOne").disabled = status;
}

function disableRandomButton(status) {
  document.getElementById("catchRandom").disabled = status;
}
