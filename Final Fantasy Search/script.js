document.getElementById('onSubmit').addEventListener('click', submitRequest);

function submitRequest() {
let searchValue = document.getElementById('searchInput').value;


fetch('https://www.moogleapi.com/api/v1/characters/search?name=' + searchValue + '')
  .then(response => response.json())
  .then(data => 
  createCard(data[0]));
    alert('You are looking for : ' + searchValue);
}

function createCard(data) {
  data.map(getFFData(data));  
}

function getFFData(character) {
  console.log(character.name + character.race);
  
}