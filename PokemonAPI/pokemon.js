
//Builds a request for accessing the api. Passes in "Get and the url as a paramter in the Requests open method.  Then sends.  "
const Http = new XMLHttpRequest();
const url='https://pokeapi.co/api/v2/pokemon/809';
Http.open("GET", url);
Http.send();
//When the readysteate is envokable, log the objects responseText property
Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}

//********************************************************************************************* */
// create a function name getPokemon.  fetch the following url using the fetch method - https://pokeapi.co/api/v2/pokemon?limit=151
// use the then method to turn that response into json
// use the then method again and pass in an anyonmys function that excepcts - allPokemon as a parameter
// within the method use the results property of the allPokemon parameter and call a for each method(pass in another anoynmous function(pokemon) and call fetchpkomeon fucntion with pokemon as a parameter)

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

//create a function that will fetch the url of a pokemon
// start with defining a function that accepts a pokemon parameter
//create a variable that will store that pokemon parameter url property
// use the fetch method and pass in the url
// turn that fetch into json
// create an anonomys function that calls renderPokemon data - * be sure to create renderPokemon

// creating a function that accepts a custom url for each fetch
function fetchPokemonData(pokemon) {
  let url = pokemon.url;
  fetch(url)
  .then(response => response.json())
  .then(function(pokeData){
    renderPokemon(pokeData)
  })
}

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