import React from 'react'

//Game Select that gets auto populated on page load
export default function FFGameSelect() {

  getGames();
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

  
  return (
        <div>
            <select className="ui fluid selection dropdown ffSelect" id="games">
                <option value="" disabled selected="selected">Game Select</option>
            </select>
        </div>
    )
}
