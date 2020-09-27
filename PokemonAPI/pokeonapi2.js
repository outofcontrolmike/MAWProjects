//variables
var list = document.getElementById("test");
var toggleID = document.getElementById("catchOne");
var toggleCatch = document.getElementById("catchList");
var input = document.getElementById("searchValue").value;
//event listeners
document.getElementById("catchRandom").addEventListener("click", catchRandom);
document.getElementById("invertColors").addEventListener("click", invertColors);
document.getElementById("catchList").addEventListener("click", catchList);
document.getElementById("clear").addEventListener("click", clearList);
document.getElementById("catchOne").addEventListener("click", catchSingle);

//Need to make a xml request to access this api
//1.  Set up our request to grab data and then return it

//*****************************************************************************
//2. We want to get all pokemon and access to their data

//Requires two functions.. one for the fetch and for each

//First function

// create a function name getPokemon.  fetch the following url using the fetch method - https://pokeapi.co/api/v2/pokemon?limit=151
// use the then method to turn that response into json
// use the then method again and pass in an anyonmys function that expects - allPokemon as a parameter
// within the method use the results property of the allPokemon parameter and call a for each method(pass in another anoynmous function(pokemon) and call fetchpkomeon fucntion with pokemon as a parameter)

function catchSingle() {
  var input = document.getElementById("searchValue").value;
  console.log(input);
  if(input > 0) {
  fetch("https://pokeapi.co/api/v2/pokemon/" + input + "/")
    .then((response) => response.json())
    .then(function(pokemon) {
      createSingle(pokemon);
    });
    document.getElementById("searchValue").value = "";

}
else {
  alert("Please enter a value over 0",)
  input.value = "";
  document.getElementById("searchValue").value = "";

}
}

//Catch up to a certain value
function catchList() {
  console.log("catchList was hit");
  var input = document.getElementById("searchValue").value;
  console.log(input.value);
  if(input > 0 ) {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=" + input)
    .then((response) => response.json())
    .then(function(allPokemon) {
      console.log(input);
      console.log("catchList worked");
      allPokemon.results.forEach(function(pokemon) {
        fetchPokemonData(pokemon);
      });
    });
      input.value = "";
      document.getElementById("searchValue").value = "";

}
else {
  alert("Please enter a value over 0",)
  input.value = "";
  document.getElementById("searchValue").value = "";

}
}

//randomized list
function catchRandom() {
  var alg = Math.floor(Math.random(1) * 650);
  console.log(alg);
  console.log("catchRandom Works");
  fetch("https://pokeapi.co/api/v2/pokemon?limit=" + alg)
    .then((response) => response.json())
    .then(function(allPokemon) {
      allPokemon.results.forEach(function(pokemon) {
        fetchPokemonData(pokemon);
      });
    });
}

//2nd function

//create a function that will fetch the url of a pokemon
// start with defining a function that accepts a pokemon parameter
//create a variable that will store that pokemon parameter url property
// use the fetch method and pass in the url
// turn that fetch into json
// create an anonomys function that calls renderPokemon data - * be sure to create renderPokemon

function fetchPokemonData(pokemon) {
  let url = pokemon.url;
  fetch(url)
    .then((response) => response.json())
    .then(function(pokeData) {
      renderPokemon(pokeData);
    });
}

function fetchSingle(pokemon) {
  let url = pokemon.url;
  fetch(url)
    .then((response) => response.json())
    .then(function(pokeData) {
      createSingle(pokeData);
    });
}

//Functionallity for rendering the pokemon data

//first we want to create a function for rendering data that gets passed the pokedata
// We'll be creating some html elements through javascript
// a whole container for all of the pokemon
// a individual container for pokemon
// a field for a name of the pokemon
// create a field for Id of the pokemon

//set the inner text of the name field with the parameter property of name
// set the inner text of the id as well, should be able to pass by reference `#${}`
// add the variables to the pokecontainer
// append the pokecontainer to the container variable

function renderPokemon(pokeData) {
  let container = document.getElementById("test");
  var pokeContainer = document.createElement("div");
  var pokeName = document.createElement("h3");
  var pokeId = document.createElement("p");
  pokeName.innerHTML = pokeData.name;
  pokeId.innerHTML = `#${pokeData.id}`;

  pokeContainer.append(pokeName, pokeId);
  container.appendChild(pokeContainer);
}

function createSingle(pokeData) {
  document.getElementById("pImg").src = "";
  document.getElementById("pName").innerHTML = pokeData.name;
  document.getElementById("pkId").innerText = `#${pokeData.id}`;
  document.getElementById("height").innerHTML = `${pokeData.base_experience}`;
  document.getElementById("pType").innerHTML = pokeData.type;
  document.getElementById("generation").innerHTML = pokeData.generation;
  document.getElementById("bestMoves").innerHTML = "Fire Punch";
}

function clearList() {
  document.getElementById("test").innerHTML = "";
  document.getElementById("searchValue").value = "";
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
}

function invertBack() {

    console.log("made it here");
    var change = document.getElementById("invertBack");
  change.id = "invertColors";
  document.getElementById("background").style.backgroundColor = "white";
  document.getElementById("background2").style.backgroundColor = "white";
  document.getElementById("h1").style.color = "black";
}