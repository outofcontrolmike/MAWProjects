//variables
var list = document.getElementById("test");
var toggleID = document.getElementById("catchOne");
var toggleCatch = document.getElementById("catchList");
var input = document.getElementById("searchValue").value;
var pCount = document.getElementById('count');

var mainPkCount = 1;
var counter = 1;
//event listeners
var btnRandom = document.getElementById("catchRandom").addEventListener("click", catchRandom);
var btnInvert = document.getElementById("invertColors").addEventListener("click", invertColors);
var btnCatchMult =document.getElementById("catchList").addEventListener("click", catchList);
document.getElementById("clear").addEventListener("click", clearList);
var btnSingle = document.getElementById("catchOne").addEventListener("click", catchSingle);



//Need to make a xml request to access this api
//1.  Set up our request to grab data and then return it

//*****************************************************************************
//2. We want to get all pokemon and access to their data

//Requires two functions.. one for the fetch and for each

//First function

// create a function name getPokemon.  fetch the following url using the fetch method - https://pokeapi.co/api/v2/pokemon?limit=151
// use the then method to turn that response into json
// use the then method again and pass in an anyonmys function that expects - allPokemon as a parameter
// within the method use the results property of the allPokemon parameter and call a for each method(pass in another anoynmous function(pokemon) and call fetchpkomeon fucntion with pokemon as a parameter

function catchSingle() {
  var input = document.getElementById("searchValue").value;
  console.log(input);
  if (input > 0 && input <= 893) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + input + "/")
      .then((response) => response.json())
      .then(function(pokemon) {
        createSingle(pokemon);
      });
      pCount.innerHTML = mainPkCount + " Pokemon Caught";
    disableButtons("true");
  }

  else if (input != "") {
    var LowerInput = input.toLowerCase(0);
    var fetcher = fetch("https://pokeapi.co/api/v2/pokemon/" + LowerInput + "/")
      .then((response) => response.json())
      .then(function(pokemon) {
        createSingle(pokemon);
      }); 
    document.getElementById("searchValue").value = "";
      disableButtons("");

  }//usually never hits this unless search is a integer
   else {
    
    if (input <= 0) {
      alert("Please enter a value over 0");
    } else if (input >= 894) {
      alert("Please enter a value lesser than 893");
    } else {
      alert("Please enter pokemons name correctly.");
    }
    input.value = "";
    document.getElementById("searchValue").value = "";
  }
} //end catchSingle

//Catch up to a certain value
function catchList() {
  console.log("catchList was hit");
  var input = document.getElementById("searchValue").value;
  console.log(input.value);
  if (input > 0) {
     
    fetch("https://pokeapi.co/api/v2/pokemon?limit=" + input)
      .then((response) => response.json())
      .then(function(allPokemon) {
        console.log(input);
        pCount.innerHTML = input + " Pokemon caught!";
        console.log("catchList worked");
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
}

//randomized list
function catchRandom() {
  var alg = Math.floor(Math.random(1) * 650);
  console.log(alg);
  pCount.innerHTML = alg + " Pokemon caught!";
  console.log("catchRandom Works");
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
function renderPokemon(pokeData) {
  var heightMath = (pokeData.height / 3.048).toFixed(2);
  var weightMath = (pokeData.weight / 4.536).toFixed(2);
  var baseStat = pokeData.base_experience;

  let container = document.getElementById("test");
  let pokeContainer = document.createElement("div");
  pokeContainer.classList.add("col-6-m","card", "m-4");
  var pokeImage = document.createElement("img");
  var pokeName = document.createElement("h3");
  var pokeId = document.createElement("p");
  var poketypes = document.createElement("p");
  var pokeHeight = document.createElement("p");
  var pokeWeight = document.createElement("p");
  var baseStats = document.createElement("p");

  pokeImage.height = "300";
  pokeImage.width = "300";
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
}


function createSingle(pokeData) {
  console.log(pokeData);
  var heightMath = (pokeData.height / 3.048).toFixed(2);
  var weightMath = (pokeData.weight / 4.536).toFixed(2);
  var baseStat = pokeData.base_experience;

  let container = document.getElementById("test");
  let pokeContainer = document.createElement("div");
  pokeContainer.classList.add("col-3","card","m-4");
  var pokeImage = document.createElement("img");
  var pokeName = document.createElement("h3");
  var pokeId = document.createElement("p");
  var poketypes = document.createElement("p");
  var pokeHeight = document.createElement("p");
  var pokeWeight = document.createElement("p");
  var baseStats = document.createElement("p");

  pokeImage.height = "250";
  pokeImage.width = "250";

  //image
  //image for pokemon
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
 
  console.log(container.innerHTML);
}// end single catch -- Should be able to combine single and multi, pass in a paramter to differ between the two




//misc functions 
function clearList() {
  document.getElementById("test").innerHTML = "";
  document.getElementById("searchValue").value = "";
  document.getElementById("catchRandom").disabled = false;
  document.getElementById('catchList').disabled = false;
  document.getElementById('catchOne').disabled = false;

  pCount.innerHTML = "";
  counter = 1;
  mainPkCount = 1;
}
function setButtons() {
  toggleCatch, (toggleID.disabled = false);
}

function invertColors() {
  console.log("hello");
  document.getElementById("background").style.backgroundColor = "black";
  document.getElementById("background2").style.backgroundColor = "black";
  document.getElementById("h1").style.color = "red";
  var change = document.getElementById("invertColors");
  change.id = "invertBack";
  console.log(change.id);
  pCount.innerHTML = "You inverted the colors!";
}

function invertBack() {
  console.log("made it here");
  var change = document.getElementById("invertBack");
  change.id = "invertColors";
  document.getElementById("background").style.backgroundColor = "white";
  document.getElementById("background2").style.backgroundColor = "white";
  document.getElementById("h1").style.color = "black";
}

 function disableButtons(status) {
  document.getElementById('catchRandom').disabled = status;
  document.getElementById('catchList').disabled = status;
  document.getElementById('catchOne').disabled = status;
 }

