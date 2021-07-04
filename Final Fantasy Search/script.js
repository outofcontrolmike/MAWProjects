document.getElementById('onSubmit').addEventListener('click', submitRequest);

function submitRequest() {
let searchValue = document.getElementById('searchInput').value;


fetch('https://www.moogleapi.com/api/v1/characters/search?name=' + searchValue + '')
  .then(response => response.json())
  .then(data => 
  createCard(data));
  alert('You are looking for : ' + searchValue);
}

function createCard(data) {
console.log("CreateCard: " + data[0].name);
document.getElementById('list').innerHTML = data[0].name
}