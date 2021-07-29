//Refactoring
//Use String interporlation for Parameter on filters
//Use URL variables instead of the whole url
//Cut down on repetive code - such as when creating paragraph elements.. should be able to $_ -> 
//
//

document.getElementById('onSubmit').addEventListener('click', submitRequest);
document.getElementById('advancedSearch').addEventListener('click', advancedRequest);

document.getElementById('title').addEventListener('click',disableSearch);
//Possible input event listner to pull cards without searching
document.getElementById('searchInput').addEventListener('change',submitRequest);

document.getElementById('clear').addEventListener('click', clearList);
document.getElementById('listGames').addEventListener('click', createGameList);
document.getElementById('random').addEventListener('click',getRandom);
document.getElementById('reset').addEventListener('click', resetfilters);

//ON Load functions  ************************************************************************************
getGames();

//Parent Variables  *************************************************************************************
let color = "blue";
let alertMessage = "";
let count = 0;

//Resesting and Disabling DOM elements ******************************************************************

function disableSearch() {
  let search = document.getElementById('searchInput');
  let title = document.getElementById('title').className;
  search.disabled = (title === "title") ? true : false; 
}

//Resets the dropdown menus
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

  //Simply clears the list
  function clearList() {
    document.getElementById('list').innerHTML = "";
    count = 0;
  }


//Fetches - Characters *************************************************************************

//Handles user character name input
function submitRequest() {
  let searchValue = document.getElementById('searchInput').value;
  
    fetch('https://www.moogleapi.com/api/v1/characters/search?name=' + searchValue).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return;
      }
    })
    .then(data => {
      data.map(getFFData);
      })
    .catch((error) => {
      console.log(error)
    });
  }

//Grabs random character - provided by api
function getRandom() {
  fetch('https://www.moogleapi.com/api/v1/characters/random')
  .then(response => response.json())
  .then(character => {
    getFFData(character);
  })
}


//Fetches - Games  ***************************************************************************

//Create Game cards
function createGameList() {
    fetch('https://www.moogleapi.com/api/v1/games/')
    .then(response => response.json())
    .then(games => {
      games.map(createGameCard);
    })
}

  //Fetch Game List to pull 
  function getGames() {
    fetch('https://www.moogleapi.com/api/v1/games/')
    .then(response => response.json())
    .then(games => {
      games.map(populateGameList);
    })}

// Set up Game filter for advanced search
function populateGameList(game) {
  let option = document.createElement('option');
  convertTitle(game);
  option.innerHTML = game.title;
  document.getElementById('games').append(option);
  }
  
// Converts game titles to work around API
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

  

//Card Creation - Games *********************************************************************
//Create Game Cards
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
  imageHolder.className = "ui large centered middle aligned image characterImage";
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


//Card Creation - Characters ****************************************************************

function getFFData(character) {

  let name = document.createElement('h1');
  let line = document.createElement('hr');
  line.className = "line";
  character.name.toUpperCase();
  name.innerHTML = "<em>" +character.name + "</em>";

  let jName = document.createElement('p');
  jName.innerHTML= "<b>Japanese Name:</b> " + character.japaneseName;

  let origin = document.createElement('p');
  origin.innerHTML= "<b>Origin:</b> " + character.origin;

  let race = document.createElement('p');
  race.innerHTML= "<br><b>Race: </b>" + character.race;

  let gender = document.createElement('p');
  gender.innerHTML= "<b>Gender: </b>" + character.gender;

  let age = document.createElement('p');
  age.innerHTML= "<b>Age: </b>" + character.age;

  let job = document.createElement('p');
  job.innerHTML= "<b>Job: </b>" + character.job;
  
  let height = document.createElement('p');
  height.innerHTML = "<b>Height: </b>" + character.height;

  let weight = document.createElement('p');
  weight.innerHTML= "<b>Weight: </b>" +  character.weight + "<br>";

  let bio = document.createElement('h1');
  bio.innerHTML = "Details";
  bio.className = "details";


  let description = document.createElement('p');
  description.innerHTML =  character.description;
  
  let imageHolder = document.createElement('img');
  imageHolder.className = "ui centered medium image";

  let test = character.pictures;
  let picture;

  if (test.length === 0 ) {
    imageHolder.src = "noImage.jpg";
  }
else  {
    picture = character.pictures[0].url;
    imageHolder.src = picture;
  }


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
  column3.append(bio,description);
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
    }
  })
  .then(data => {
    data.map(getFFData);
    createAlert(count,genderText,jobText,raceText,gameText);
    //count = 0;
    })
  .catch((error) => {
  if(count === 0)
  {
    alertMessage = "";
    color = "red";
  }
    console.log(error)
  })

}

//Set up Alert
function createAlert(count,genderParam,jobParam,raceParam,origin) {
if(origin) {
  origin = " These characters originate from " + origin;
}

if(jobParam) {
  jobParam = " These characters all belong to the " + jobParam + " job.";
}

if(raceParam) {
  raceParam = " Their race is " + raceParam + ".";
}

if(genderParam) {
  genderParam = "They all happen to be: " + genderParam + ".";
}
newCount = count;
alertMessage = (origin + jobParam + raceParam + genderParam);

  color = "blue"
  origin,jobParam,genderParam,raceParam = "";
  count = 0;
}

//Jquery -> displaying alert message
$('.advancedSearch').click(() => { 
  setTimeout(() => {
    $('.advancedSearch').toast({
      title: 'You search contains ' + count + " Characters!" ,
      message: alertMessage,
      class : color,
      displayTime: 30000,
      className: {
          toast: 'ui message'
      }
    });
    count = 0;
  }, 1000);   
});

//Accordion 
$('.ui.accordion')
  .accordion()
;
  