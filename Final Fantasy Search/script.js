//Refactoring
//Use String interporlation for Parameter on filters
//Use URL variables instead of the whole url
//Cut down on repetive code - such as when creating paragraph elements.. should be able to $_ -> 
//
//

document.getElementById('onSubmit').addEventListener('click', submitRequest);
document.getElementById('advancedSearch').addEventListener('click', advancedRequest);

//Possible input event listner to pull cards without searching
document.getElementById('searchInput').addEventListener('change',submitRequest);

document.getElementById('clear').addEventListener('click', clearList);
document.getElementById('listGames').addEventListener('click', createGameList);
document.getElementById('random').addEventListener('click',getRandom);
document.getElementById('reset').addEventListener('click', resetfilters);
let count = 0;
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

function resetfilters() {
let game = document.getElementById('games');
let job = document.getElementById('jobSelect');
let race = document.getElementById('raceSelect');
let gender = document.getElementById('genderSelect');

job.selectedIndex = "Job Select";
race.selectedIndex = "Race Select";
gender.selectedIndex = "Gender Select";
game.selectedIndex = "Game Select";
clearList();
}


function getAllCharacters() {
  fetch('https://www.moogleapi.com/api/v1/characters')
  .then(response => response.json())
  .then(character => {
    character.sort();
    console.log("sorted characters ", character);
  })
}

function clearList() {
  document.getElementById('list').innerHTML = "";
  count = 0;
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
  let card = document.createElement('div');
  card.className = "ui segment";

  
  let title = document.createElement('p');
  title.innerHTML= "<b>Name </b>: " + game.title;

  let platform = document.createElement('p');
  platform.innerHTML= "<b>Platform:</b> " +  game.platform;

  let releaseDate = document.createElement('p');
  releaseDate.innerHTML= "<b>Origin:</b> " + game.releaseDate;

  let description = document.createElement('p');
  description.innerHTML = game.description;

  let picture = game.picture;
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

  column.append(title,platform,releaseDate,description);
  column2.append(imageHolder);
  column3.append(description);
  mainContainer.append(container,divider,column3);
  document.getElementById('list').append(mainContainer);
}

// //Create list and append
function populateGameList(game) {
let option = document.createElement('option');
convertTitle(game);
option.innerHTML = game.title;
document.getElementById('games').append(option);
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

if(game.title === "Final Fantasy 10-2") {
  game.title = "Final Fantasy X-2";
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

if(game.title === "Final Fantasy 13-2") {
  game.title = "Final Fantasy XIII-2";
}

if(game.title === "Final Fantasy 15") {
  game.title = "Final Fantasy XV";
}

if(game.title === "Final Fantasy Brave Exvius") {
  game.title = "Final Fantasy BE";
}
}

function submitRequest() {
let searchValue = document.getElementById('searchInput').value;

  fetch('https://www.moogleapi.com/api/v1/characters/search?name=' + searchValue).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      window.alert('No Results found.. Please try again');
    }
  })
  .then(data => {
    data.map(getFFData);
    })
  .catch((error) => {
    console.log(error)
  });
}

function getFFData(character) {

  let name = document.createElement('h1');
  let line = document.createElement('hr');
  line.className = "line";
  name.innerHTML = character.name;

  let jName = document.createElement('p');
  jName.innerHTML= "Japanese Name: " + character.japaneseName;

  let origin = document.createElement('p');
  origin.innerHTML= "Origin: " + character.origin;

  let race = document.createElement('p');
  race.innerHTML= "<br>Race: " + character.race;

  let gender = document.createElement('p');
  gender.innerHTML= "Gender: " + character.gender;

  let age = document.createElement('p');
  age.innerHTML= "Age: " + character.age;

  let job = document.createElement('p');
  job.innerHTML= "Job: " + character.job;
  
  let height = document.createElement('p');
  height.innerHTML = "Height: " + character.height;

  //Weight
  let weight = document.createElement('p');
  weight.innerHTML= "Weight: " +  character.weight + "<br>";


  let description = document.createElement('p');
  description.innerHTML = '<br>' + character.description;

  let picture = character.pictures[0].url;
  let imageHolder = document.createElement('img');
  imageHolder.className = "ui medium image";
  imageHolder.src = picture;

  let mainContainer = document.createElement('div');
  mainContainer.className = "ui segment raised padded"
  let container = document.createElement('div');
  container.className = "ui two column doubling stackable grid container";

  let column = document.createElement('div');
  column.className="ui column";
  let column2 = document.createElement('div');
  column2.className="ui column";
  let column3 = document.createElement('div');
  column3.className="ui column";

  let divider = document.createElement('hr');
  divider.className = "divider";

  container.append(column,column2,divider,column3);

  column.append(name,line,race,jName,origin,gender,age,job,height,weight);
  column2.append(imageHolder);
  column3.append(description);
  mainContainer.append(container,divider,column3);

  document.getElementById('list').prepend(mainContainer);

  count++;
}

//Advanced Search functions
function advancedRequest() {
   let genderParam,raceParam,jobParam,origin = "";
  
   let game = document.getElementById('games');
   let gameText = game.options[game.selectedIndex].value;

   let job = document.getElementById('jobSelect');
   let jobText = job.options[job.selectedIndex].value;
   
   let race = document.getElementById('raceSelect');
   let raceText = race.options[race.selectedIndex].value;

   let gender = document.getElementById('genderSelect');
   let genderText = gender.options[gender.selectedIndex].value;


   //gameTExt
   if(gameText != "Game Select")
   {
    origin = "&origin=" + gameText;
    
   }
   else {
     origin = ""
   }

   //jobText
   if(jobText != "Job Select")
   {
    jobParam ="&job=" + jobText;
    
   }
   else {
     jobParam =  "";
   }

   //raceText
   if(raceText != "Race Select")
   {
    raceParam ="race=" + raceText; 
    
   }
   else {
     raceParam =  "";
   }

    //JobText
    if(genderText != "Gender Select")
    {
      genderParam = "&gender=" + genderText;
     
    }
    else {
      genderParam =  "";
    }

  fetch('https://www.moogleapi.com/api/v1/characters/search?' + raceParam + origin + jobParam + genderParam).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      window.alert('Advanced Search did not work.. Try changing your filters');
    }
  })
  .then(data => {
    data.map(getFFData);
    createHeader(count,genderText,jobText,raceText,gameText);
    count = 0;
    })
  .catch((error) => {
    console.log(error)
  })

}

function createHeader(count,genderParam,jobParam,raceParam,origin) {
  //Header for each character printout
  let header = document.createElement('div');
  header.className = "ui segment container";

  let headerText = document.createElement('p');

  console.log(count);
  console.log("gender" ,jobParam);
  console.log("race: " , raceParam);
  console.log("origin: " ,origin);

if(origin) {
  origin = "These characters are all important in" + origin;
}

if(jobParam) {
  jobParam = "These characters all belong to the " + jobParam + " job.";
}

if(raceParam) {
  raceParam = "Their race is " + raceParam + ".";
}

if(genderParam) {
  genderParam = "They all happen to be: " + genderParam + ".";
}


  headerText.innerHTML =     "You pulled" + count + " Characters. " + raceParam + " " + genderParam +  jobParam  + origin + ".";

  header.append(headerText);

  document.getElementById('list').prepend(header);
  header.setAttribute('id', 'header');
  count = 0;
};

//Jquery

$('.ui.accordion')
  .accordion()
;