import FFFooter from '../../../components/finalFantasy/FFFooter';
import FFMenu from "../../../components/finalFantasy/FFMenu";
//Main component for final fantasy search
function FFSearch() {
  //Global Variables  *************************************************************************************
let color = "blue";
let alertMessage = "";
let count = 0;
let gameListFetch = false;

var prevUrl = "";


    ////Fetches for characters - Characters *************************************************************************////
        //Set up listener events *******************************************************************************
function onLoadListeners() {

    // document.getElementById("onSubmit").addEventListener("click", submitRequest);
    document
      .getElementById("advancedSearch")
      .addEventListener("click", advancedRequest);
  
    document.getElementById("title").addEventListener("click", disableSearch);
  
    document.getElementById("clear").addEventListener("click", clearList);
    document
      .getElementById("listGames")
      .addEventListener("click", createGameList);
    document.getElementById("random").addEventListener("click", getRandom);
    document.getElementById("reset").addEventListener("click", resetfilters);
    
    let ffINput = document
    .getElementById("ffSearchInput");

    ffINput.addEventListener("change", submitRequest);
  }

  window.setTimeout(onLoadListeners, 1000);

  //Resesting and Disabling DOM elements ******************************************************************
function disableSearch() {
    let search = document.getElementById("ffSearchInput");
    let title = document.getElementById("title").className;
    search.disabled = title === "title" ? true : false;
  }

    
//Resets the dropdown menus
function resetfilters() {
    var reset = function (id) {
      return document.getElementById(id);
    };
  
    let game = reset("games");
    let job = reset("jobSelect");
    let race = reset("raceSelect");
    let gender = reset("genderSelect");
  
    job.selectedIndex = "Job Select";
    race.selectedIndex = "Race Select";
    gender.selectedIndex = "Gender Select";
    game.selectedIndex = "Game Select";
    clearList();
  }

  //Simply clears the list
function clearList() {
    document.getElementById("ffList").innerHTML = "";
    count = 0;
  }

//Handles user character name input
function submitRequest() {

    var input = document.getElementById("ffSearchInput").value;    
      let url  = "https://www.moogleapi.com/api/v1/characters/search?name=";
      var ffURL = input;
      while (prevUrl != ffURL) {
      fetch(url + input)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.log("error")
          }
        })
        .then((data) => {
          data.map(getFFData);
        })
        .catch((error) => {
          console.log(error);
        });
        //
        document.getElementById('ffSearchInput');
        prevUrl = ffURL;      
        }
    }
  
  //Grabs random character - provided by api
  function getRandom() {
    let url = "https://www.moogleapi.com/api/v1/characters/random";
    fetch(url)
      .then((response) => response.json())
      .then((character) => {
        getFFData(character);
      });
  }
  
  //Fetches - Games  ***************************************************************************
  
  //Create Game cards
  function createGameList() {
    let url = "https://www.moogleapi.com/api/v1/games/";
    fetch(url)
      .then((response) => response.json())
      .then((games) => {
        let ffList = document.getElementById("ffList");
        ffList.innerHTML = "";
        games.map(createGameCard);
      });
  }
  
  //Fetch Game List to pull
  function getGames() {
    let url = "https://www.moogleapi.com/api/v1/games/";
    fetch(url)
      .then((response) => response.json())
      .then((games) => {
        games.map(populateGameList);
      });
  }
  
  // Set up Game filter for advanced search
  function populateGameList(game) {
    let option = document.createElement("option");
    convertTitle(game);
    option.innerHTML = game.title;
    document.getElementById("games").append(option);
  }
  
  // Converts game titles to work around API
  function convertTitle(game) {
    let g = game;
    if (g.title === "Final Fantasy 01") {
      g.title = "Final Fantasy";
    }
  
    if (g.title === "Final Fantasy 02") {
      g.title = "Final Fantasy II";
    }
  
    if (g.title === "Final Fantasy 03") {
      g.title = "Final Fantasy III";
    }
  
    if (g.title === "Final Fantasy 04") {
      g.title = "Final Fantasy IV";
    }
  
    if (g.title === "Final Fantasy 05") {
      g.title = "Final Fantasy V";
    }
  
    if (g.title === "Final Fantasy 06") {
      g.title = "Final Fantasy VI";
    }
  
    if (g.title === "Final Fantasy 07") {
      g.title = "Final Fantasy VII";
    }
  
    if (g.title === "Final Fantasy 08") {
      g.title = "Final Fantasy VIII";
    }
  
    if (g.title === "Final Fantasy 09") {
      g.title = "Final Fantasy IX";
    }
  
    if (g.title === "Final Fantasy 10") {
      g.title = "Final Fantasy X";
    }
  
    if (g.title === "Final Fantasy 10-2") {
      g.title = "Final Fantasy X-2";
    }
  
    if (g.title === "Final Fantasy 11") {
      g.title = "Final Fantasy XI";
    }
  
    if (g.title === "Final Fantasy 12") {
      g.title = "Final Fantasy XII";
    }
  
    if (g.title === "Final Fantasy 13") {
      g.title = "Final Fantasy XIII";
    }
  
    if (g.title === "Final Fantasy 13-2") {
      g.title = "Final Fantasy XIII-2";
    }
  
    if (g.title === "Final Fantasy 15") {
      g.title = "Final Fantasy XV";
    }
  
    if (g.title === "Final Fantasy Brave Exvius") {
      g.title = "Final Fantasy BE";
    }
  }
  
  //Card Creation - Games *********************************************************************
  //Create Game Cards
  function createGameCard(game) {
    let create = function (el) {
      return document.createElement(el);
    };
  
    let card = create("div");
    card.className = "ui segment";
  
    let title = create("p");
    title.innerHTML = "<b>Name </b>: " + game.title;
  
    let platform = create("p");
    platform.innerHTML = "<b>Platform:</b> " + game.platform;
  
    let releaseDate = create("p");
    releaseDate.innerHTML = "<b>Origin:</b> " + game.releaseDate;
  
    let description = create("p");
    description.innerHTML = game.description;
  
    let paragraphs = [title, platform, releaseDate, description]

    paragraphs.forEach((element) => {
      element.setAttribute("id", "ffP");
    });


    let picture = game.picture;
    let imageHolder = create("img");
    imageHolder.className =
      "ui large centered middle aligned image characterImage";
    imageHolder.src = picture;
  
    let mainContainer = create("div");
    mainContainer.className = "ui segment";
    let container = create("div");
    container.className = "ui two column doubling stackable grid container";
  
    let column = create("div");
    column.className = "ui column";
  
    let column2 = create("div");
    column2.className = "ui column";
  
    let column3 = create("div");
    column3.className = "ui column";
  
    let divider = create("hr");
  
    container.append(column, column2, divider, column3);
  
    column.append(title, platform, releaseDate, description);
    column2.append(imageHolder);
    column3.append(description);
    mainContainer.append(container, divider, column3);
    document.getElementById("ffList").append(mainContainer);
  }
  
  //Card Creation - Characters ****************************************************************
  
  function getFFData(character) {
    let name = document.createElement("h1");
    name.setAttribute('id', "ffName");
    let line = document.createElement("hr");
    line.className = "line";
    character.name.toUpperCase();
    name.innerHTML = "<em>" + character.name + "</em>";
  
    let jName = document.createElement("p");
    jName.innerHTML = "<b>Japanese Name:</b> " + character.japaneseName;
  
    let origin = document.createElement("p");
    origin.innerHTML = "<b>Origin:</b> " + character.origin;
  
    let race = document.createElement("p");
    race.innerHTML = "<br><b>Race: </b>" + character.race;
  
    let gender = document.createElement("p");
    gender.innerHTML = "<b>Gender: </b>" + character.gender;
  
    let age = document.createElement("p");
    age.innerHTML = "<b>Age: </b>" + character.age;
  
    let job = document.createElement("p");
    job.innerHTML = "<b>Job: </b>" + character.job;
  
    let height = document.createElement("p");
    height.innerHTML = "<b>Height: </b>" + character.height;
  
    let weight = document.createElement("p");
    weight.innerHTML = "<b>Weight: </b>" + character.weight + "<br>";

    let bio = document.createElement("h1");
    bio.setAttribute('id', "ffBio");
    bio.innerHTML = "Details";
    bio.className = "ffDetails";
  
    let description = document.createElement("p");
    description.innerHTML = character.description;
  
    let imageHolder = document.createElement("img");
    imageHolder.className = "ui centered medium image";
  
    let test = character.pictures;
    let picture;
  
    if (test.length === 0) {
      imageHolder.src = "noImage.jpg";
    } else {
      picture = character.pictures[0].url;
      imageHolder.src = picture;
    }

    let paragraphs = [jName, origin, race, gender, age, job, height, weight,description]
    
    paragraphs.forEach((element) => {
      element.setAttribute("id", "ffP");
    });
  
    let mainContainer = document.createElement("div");
    mainContainer.className = "ui segment raised padded";
    let container = document.createElement("div");
    container.className = "ui two column doubling stackable grid container";
  
    let column = document.createElement("div");
    column.className = "ui column";
    let column2 = document.createElement("div");
    column2.className = "ui column";
    let column3 = document.createElement("div");
    column3.className = "ui column";
  
    let divider = document.createElement("hr");
    divider.className = "divider";
  
    container.append(column, column2, divider, column3);
  
    column.append(
      name,
      line,
      race,
      jName,
      origin,
      gender,
      age,
      job,
      height,
      weight
    );
    column2.append(imageHolder);
    column3.append(bio, description);
    mainContainer.append(container, divider, column3);
  
    document.getElementById("ffList").prepend(mainContainer);
  
    count++;
  }
  
  //Advanced Search function - Builds query parameters based on
  function advancedRequest() {
    var request = function (id) {
      return document.getElementById(id);
    };
  
    let genderParam,
      raceParam,
      jobParam,
      origin = "";
  
    let game = request("games");
    let gameText = game.options[game.selectedIndex].value;
  
    let job = request("jobSelect");
    let jobText = job.options[job.selectedIndex].value;
  
    let race = request("raceSelect");
    let raceText = race.options[race.selectedIndex].value;
  
    let gender = request("genderSelect");
    let genderText = gender.options[gender.selectedIndex].value;
  
    //gameTExt
    if (gameText != "Game Select") {
      origin = "&origin=" + gameText;
    } else {
      origin = "";
    }
  
    //jobText
    if (jobText != "Job Select") {
      jobParam = "&job=" + jobText;
    } else {
      jobParam = "";
    }
  
    //raceText
    if (raceText != "Race Select") {
      raceParam = "race=" + raceText;
    } else {
      raceParam = "";
    }
  
    //JobText
    if (genderText != "Gender Select") {
      genderParam = "&gender=" + genderText;
    } else {
      genderParam = "";
    }
  
    let url = "https://www.moogleapi.com/api/v1/characters/search?";
    fetch(url + raceParam + origin + jobParam + genderParam)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
        }
      })
      .then((data) => {
        data.map(getFFData);
        createAlert(count, genderText, jobText, raceText, gameText);
        //count = 0;
      })
      .catch((error) => {
        if (count === 0) {
          alertMessage = "";
          color = "red";
        }
        console.log(error);
      });
  }

//Set up Alert
function createAlert(count, genderParam, jobParam, raceParam, origin) {
    if (origin) {
      origin = `These characters originate from ${origin}`;
    }
  
    if (jobParam) {
      jobParam = `These characters belong to the ${jobParam} job.`;
    }
  
    if (raceParam) {
      raceParam = `Their race is ${raceParam}.`;
    }
  
    if (genderParam) {
      genderParam = `They all happen to be ${genderParam}.`;
    }
    alertMessage = origin + jobParam + raceParam + genderParam;
  
    color = "blue";
    origin = "";
    jobParam = "";
    genderParam = "";
    raceParam = "";
    count = 0;
  }
    return(
        <div id="app" class="ui container stackable">
            <FFMenu />
            <div id="ffList">                
            </div>
            <FFFooter />

        </div>
    )
}

export default FFSearch;