document.getElementById('onSubmit').addEventListener('click', submitRequest);
document.getElementById('clear').addEventListener('click', clearList);
document.getElementById('listGames').addEventListener('click', getGames);
document.getElementById('random').addEventListener('click',getRandom);

//ON Load functions
getAllCharacters();
getGames();

function getRandom() {
  fetch('https://www.moogleapi.com/api/v1/characters/random')
  .then(response => response.json())
  .then(character => {
    getFFData(character);
  })
}


function getAllCharacters() {
  fetch('https://www.moogleapi.com/api/v1/characters')
  .then(response => response.json())
  .then(character => {
    createRaceList(character);
  })

  function createRaceList(character) {
      character.map(getRaces);
  }

  function getRaces(character) {
    let option = document.createElement('option')
    option.innerHTML = character.race
    document.getElementById('races').append(option);
  }
}

function clearList() {
  document.getElementById('list').innerHTML = "";
}


//Fetch Games List
function getGames() {
fetch('https://www.moogleapi.com/api/v1/games/')
.then(response => response.json())
.then(games => {
  createGameList(games);
})

//Create Games
function createGameList(games) {
  games.map(getList);
  games.map(createGameCard);
}

///Create Game Cards
function createGameCard(game) {
//Title
//Picture
//Release Date
//Description

}

//Create list and append
function getList(game) {
let gameTitle = game.title;
let option = document.createElement('option');
option.innerHTML = gameTitle;


document.getElementById('game').append(option);
}

}


function submitRequest() {
let searchValue = document.getElementById('searchInput').value;
fetch('https://www.moogleapi.com/api/v1/characters/search?name=' + searchValue + '')
  .then(response => response.json())
  .then(data => 
  createCard(data) + console.log(data));

  //There's only about a dozen enemies in the database
  fetch('https://www.moogleapi.com/api/v1/monsters/search?name=' + searchValue + '')
  .then(response => response.json())
  .then(data => 
  createMonster(data) + console.log(data));

}


function createCard(data) 
{
  data.map(getFFData);  
}

function createMonster(data)
{
 data.map(mapMonsters);
}

function mapMonsters(monster)
{
  let list = document.getElementById('list');
  list.append(monster.name);
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

  
  let name = document.createElement('p');
  name.innerHTML= "<b>Name </b>: " + character.name;

  let jName = document.createElement('p');
  jName.innerHTML= "Japanese Name: " + character.japaneseName;

  let origin = document.createElement('p');
  origin.innerHTML= "Origin: " + character.origin;

  let race = document.createElement('p');
  race.innerHTML= "Race: " + character.race;

  let gender = document.createElement('p');
  gender.innerHTML= "Gender: " + character.gender;

  let age = document.createElement('p');
  age.innerHTML= "Age: " + character.age;

  let job = document.createElement('p');
  job.innerHTML= "Job: " + character.job;
  
  let height = document.createElement('p');
  height.innerHTML= "<b>Height<b>: " + character.height;

  let weight = document.createElement('p');
  weight.innerHTML= "Weight: " +  character.weight;

  let description = document.createElement('p');
  description.innerHTML = character.description;

  let picture = character.pictures[0].url;
  let imageHolder = document.createElement('img');
  imageHolder.className = "ui medium image";
  imageHolder.src = picture;

  let mainContainer = document.createElement('div');
  mainContainer.className = "ui segment"
  let container = document.createElement('div');
  container.className = "ui two column doubling stackable grid container";

  let column = document.createElement('div');
  column.className="ui column";
  let column2 = document.createElement('div');
  column2.className="ui column";
  let column3 = document.createElement('div');
  column3.className="ui column";

  let divider = document.createElement('hr');

  container.append(column,column2,divider,column3);

  column.append(name,race,jName,origin,gender,age,job,height,weight);
  column2.append(imageHolder);
  column3.append(description);
  mainContainer.append(container,divider,column3);
  document.getElementById('list').prepend(mainContainer);
}