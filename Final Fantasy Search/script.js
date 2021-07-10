document.getElementById('onSubmit').addEventListener('click', submitRequest);
document.getElementById('clear').addEventListener('click', clearList);
document.getElementById('listGames').addEventListener('click', createGameList);
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
    character.map(getJobs);
  })


  //Make sure this works
  function getJobs(character) {
    let option = document.createElement('option')
    option.innerHTML = character.job
    document.getElementById('jobs').append(option);
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
  games.map(populateGameList);
})}

//Create Games
function createGameList() {
    fetch('https://www.moogleapi.com/api/v1/games/')
    .then(response => response.json())
    .then(games => {
      games.map(createGameCard);
    })
}

///Create Game Cards
function createGameCard(game) {

  console.log(game.gameId);

  let card = document.createElement('div');
  card.className = "ui segment";

  
  let title = document.createElement('p');
  title.innerHTML= "<b>Name </b>: " + game.title;

  let platform = document.createElement('p');
  platform.innerHTML= game.platform;

  let releaseDate = document.createElement('p');
  releaseDate.innerHTML= "Origin: " + game.releaseDate;

  let description = document.createElement('p');
  description.innerHTML = game.description;

  let picture = game.picture;
  let imageHolder = document.createElement('img');
  imageHolder.className = "ui image";
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

  column.append(title,platform,releaseDate,description);
  column2.append(imageHolder);
  column3.append(description);
  mainContainer.append(container,divider,column3);
  document.getElementById('list').append(mainContainer);
}

//Create list and append
function populateGameList(game) {
let option = document.createElement('option');

convertTitle(game);
option.innerHTML = game.title;
document.getElementById('game').append(option);
console.log(game.title);
}

function convertTitle(game) {
if(game.title === "Final Fantasy 01") {
  game.title = "Final Fantasy";
}

if(game.title === "Final Fantasy 02") {
  game.title = "Final Fantasy II";
}

if(game.title === "Final Fantasy 03") {
  game.title = "Final Fantasy III";
}

if(game.title === "Final Fantasy 04") {
  game.title = "Final Fantasy IV";
}

if(game.title === "Final Fantasy 05") {
  game.title = "Final Fantasy V";
}

if(game.title === "Final Fantasy 06") {
  game.title = "Final Fantasy VI";
}

if(game.title === "Final Fantasy 07") {
  game.title = "Final Fantasy VII";
}

if(game.title === "Final Fantasy 08") {
  game.title = "Final Fantasy VIII";
}

if(game.title === "Final Fantasy 09") {
  game.title = "Final Fantasy IX";
}

if(game.title === "Final Fantasy 10") {
  game.title = "Final Fantasy X";
}

if(game.title === "Final Fantasy 11") {
  game.title = "Final Fantasy XI";
}

if(game.title === "Final Fantasy 12") {
  game.title = "Final Fantasy XII";
}

if(game.title === "Final Fantasy 13") {
  game.title = "Final Fantasy XIII";
}

if(game.title === "Final Fantasy 13") {
  game.title = "Final Fantasy XIII-2";
}

if(game.title === "Final Fantasy 15") {
  game.title = "Final Fantasy XV";
}

if(game.title === "Final Fantasy Brave Exvius") {
  game.title = "Final Fantasy";
}
}


function submitRequest() {
let searchValue = document.getElementById('searchInput').value;
fetch('https://www.moogleapi.com/api/v1/characters/search?name=' + searchValue + '')
  .then(response => response.json())
  .then(data => 
  data.map(getFFData));
}

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