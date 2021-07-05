document.getElementById('onSubmit').addEventListener('click', submitRequest);

function submitRequest() {
let searchValue = document.getElementById('searchInput').value;


fetch('https://www.moogleapi.com/api/v1/characters/search?name=' + searchValue + '')
  .then(response => response.json())
  .then(data => 
  createCard(data) + console.log(data));
}

function createCard(data) 
{
  data.map(getFFData);  
}

/*Character Props
Name
Japanese Name
Origin (The game they originated in)
Race
Gender
Age
Job
Height
Weight
Pictures (an array)
Stats (an array)
Description
*/
function getFFData(character) {
  console.log(character.name + character.race);
  let card = document.createElement('div');
  card.className = "ui segment";

  
  let name = character.name;
  let jName = character.japaneseName;
  let race = character.race;
  
  card.append(name,race);
  document.getElementById('list').append(card);
}