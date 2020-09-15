//Request
const Http = new XMLHttpRequest();
const url='https://pokeapi.co/api/v2/pokemon/809';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}

function fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(allpokemon => console.log(allpokemon))
  }

  console.log(fetchKantoPokemon());