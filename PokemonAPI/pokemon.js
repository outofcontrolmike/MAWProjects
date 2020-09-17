
//Request Grabs the 809th pokemon
const Http = new XMLHttpRequest();
const url='https://pokeapi.co/api/v2/pokemon/809';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}

//********************************************************************************************* */

//fetch all pokemon
function getPokemon() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  //then this variable has a variable that contains json data
  .then(response => response.json())
  .then(function(allPokemon){
    allPokemon.results.forEach(function(pokemon){
      fetchPokemonData(pokemon);
    })
  })
  //Testing of fetch to console
}


// creating a function that accepts a custom url for each fetch
function fetchPokemonData(pokemon) {
  let url = pokemon.url;
  fetch(url)
  .then(response => response.json())
  .then(function(pokeData){
    renderPokemon(pokeData)
  })
}


//Render Pokemon Data!
function renderPokemon(pokeData)
{
  let container = document.getElementById('test');
  let pokeContainer = document.createElement("div");
  let pokeName = document.createElement('h4');
  console.log(pokeData.name);
  pokeName.innerText = pokeData.name;
  console.log(pokeName);

  let pNum = document.createElement('p');
  pNum.innerText = `#${pokeData.id}`;

  let types = document.createElement('ul');

  //helper function to go through the types array and create li tags
  createTypes(pokeData.types, types)

  //add details to array
  pokeContainer.append(pokeName,pNum,types);
  
  //add that array to the actual container for the pokemon
  container.appendChild(pokeContainer);
}

//renderPokemon();

//function for creating Types
function createTypes(types,ul) {
  types.forEach(function(type){
    let typeLi = document.createElement('li');
    typeLi.innerText = type['type']['name'];

    ul.append(typeLi);
  })
}


function getLicky()
{
  fetch('https://pokeapi.co/api/v2/pokemon/108')
  .then(response => response.json())
  .then(getLicky => console.log(getLicky))
}


function calling(){
  getPokemon();
  renderPokemon();
}

calling();