//Need to make a xml request to access this api

//1.  Set up our request to grab data and then return it

//Builds a request for accessing the api. Passes in "Get and the url as a paramter in the Requests open method.  Then sends.  "
const http = new XMLHttpRequest();
const url = "https://pokeapi.co/api/v2/pokemon/141";
http.open("GET", url);
http.send();

// checking the on Ready state, if it's envokable.  Log the response of the object
http.onreadystatechange = (e) => {
    console.log(http.responseText);
}

//*****************************************************************************
//2. We want to get all pokemon and access to their data

//Requires two functions.. one for the fetch and for each

//First function

// create a function name getPokemon.  fetch the following url using the fetch method - https://pokeapi.co/api/v2/pokemon?limit=151
// use the then method to turn that response into json
// use the then method again and pass in an anyonmys function that expects - allPokemon as a parameter
// within the method use the results property of the allPokemon parameter and call a for each method(pass in another anoynmous function(pokemon) and call fetchpkomeon fucntion with pokemon as a parameter)

function getPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(function(allPokemon){
        allPokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon);
        })
    })
}

getPokemon();


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
    .then(response => response.json())
    .then(function(pokeData){
        renderPokemon(pokeData);
    })
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
    let container = document.getElementById('test');
    var pokeContainer = document.createElement("div");
    var pokeName = document.createElement('h3');
    var pokeId = document.createElement('p');

    pokeName.innerHTML = pokeData.name;
    pokeId.innerHTML = `#${pokeData.id}`;

    pokeContainer.append(pokeName,pokeId);
    container.appendChild(pokeContainer);
}