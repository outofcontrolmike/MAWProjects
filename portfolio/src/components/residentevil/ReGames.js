import React from 'react'
//Resident Evil Games List
export default function ReGames(props) {
    let gameData = props.data.data;

    //Locates Game list for passed in character index
    function createGameMenu(character) {
        gameData[character].gamesArray.map(gameTitle => {
            let resDiv = document.createElement('div');
            resDiv.id = "resDiv";
            resDiv.innerHTML = gameTitle + "&nbsp;"
            resDiv.style.paddingRight = "6rem";
            document.getElementById('resGamesList').appendChild(resDiv);
        })
    }
    setTimeout(() => {
        //Passing in Chris for original page load
        createGameMenu(0);
    }, 10);

    return (
        <div className='ui secondary menu container column' id="resGamesList">
            {/* Res games should be dynamically set here */}
        </div>
    )
}
