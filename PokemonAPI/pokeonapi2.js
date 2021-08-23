//on Page Load
window.onload = invertColors;

//variables
var list = document.getElementById("test");
var toggleID = document.getElementById("catchOne");
var input = document.getElementById("searchValue").value;
var pCount = document.getElementById("count");
var mainPkCount = 0;
var counter = 1;
var prevUrl = "";


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
      mainPkCount += 1;
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
      pCount.innerHTML = mainPkCount + " Pokemon Fetched";
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
      mainPkCount += 1;
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
  var input = document.getElementById("searchValue").value;
  if (input > 0) {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=" + input)
      .then((response) => response.json())
      .then(function (allPokemon) {
        pCount.innerHTML = input + " Pokemon Fetched!";
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
  var alg = Math.floor(Math.random(1) * 650); {
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
  var pokeName = document.createElement("h1");
  var pokeId = document.createElement("p");
  var poketypes = document.createElement("p");
  var pokeHeight = document.createElement("p");
  var pokeWeight = document.createElement("p");
  var baseStats = document.createElement("p");
  var abilities = document.createElement('p');
  var gameIndices = document.createElement('p');

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
  abilities.innerHTML = "<hr><b>Abilities:</b><hr> " + pokeData.abilities.map((el) => el.ability.name);
  gameIndices.innerHTML = "<b>Game Indices:</b> <hr>" + pokeData.game_indices.map((el) => el.version.name);
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
    gameIndices
  );

  let colorType = pokeData.types[0].type.name;
  gameIndices.style.maxWidth = "350px";
  abilities.style.maxWidth = "350px;";
  setColor(colorType, pokeContainer);

  container.append(pokeContainer);
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
  var pokeName = document.createElement("h1");
  var pokeId = document.createElement("p");
  var poketypes = document.createElement("p");
  var pokeHeight = document.createElement("p");
  var pokeWeight = document.createElement("p");
  var baseStats = document.createElement("p");
  
  var abilities = document.createElement('p');
  var gameIndices = document.createElement('p');

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
  abilities.innerHTML = "<hr><b>Abilities:</b><hr> " + pokeData.abilities.map((el) => el.ability.name);
  gameIndices.innerHTML = "<b>Game Indices:</b> <hr>" + pokeData.game_indices.map((el) => el.version.name);
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
    gameIndices
  );

  gameIndices.style.maxWidth = "350px";
  abilities.style.maxWidth = "350px;";
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
  pCount.innerHTML = "";
  counter = 1;
  mainPkCount = 0;
}

//Invert colors (Should take in a couple parameters..for some type of functionallity)
function invertColors() {
  //navigation bar
 
  document.getElementById('background').style.backgroundColor = "black";
  //change display pokemon count color
  document.getElementById("displayCount").style.backgroundColor = "black";
  pCount.style.color = "white";
  //container that pokemon are held on
  document.getElementById("test").style.backgroundColor = "black";
}
//Accordion 
$('.ui.accordion')
  .accordion()
  ;