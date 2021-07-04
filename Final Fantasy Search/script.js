document.getElementById('onSubmit').addEventListener('click', submitRequest);

function submitRequest() {
let searchValue = document.getElementById('searchInput').value;


fetch('https://www.moogleapi.com/api/v1/characters/search?name=' + searchValue + '')
  .then(response => response.json())
  .then(data => 
  createCard(data));
    alert('You are looking for : ' + searchValue);
}

function createCard(data) 
{
  data.map(getFFData);  
}

function getFFData(character) {
  console.log(character.name + character.race);
  let card = document.createElement('div');
  card.className = "ui segment";
  let name = character.name;
  let race = character.race;
  card.append(name,race);
  document.getElementById('list').append(card);
}