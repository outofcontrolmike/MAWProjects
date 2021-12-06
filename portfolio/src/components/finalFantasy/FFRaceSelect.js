import React from 'react'

//Race Dropdown Select
export default function FFRaceSelect() {
    return (
        <div>
                <select className="ui fluid selection dropdown" id="raceSelect">
                <option value="" disabled selected="selected">Race Select</option>
                <option>??</option>
                <option>Alien</option>
                <option>Android</option>
                <option>Black Mage</option>
                <option>Burmecian</option>
                <option>Cetra</option>
                <option>Demon</option>
                <option>Dwarf</option>
                <option>Esper</option>
                <option>Geonome</option>
                <option>Half-Cetra</option>
                <option>Half-Lunarian</option>
                <option>Human-Guado hybrid</option>
                <option>Human</option>
                <option>Hume</option>
                <option>Lunarian</option>
                <option>Lupine</option>
                <option>Moogle</option>
                <option>Qu</option>
                <option>Reaper</option>
                <option>Red Lion</option>
                <option>Ronso</option>
                <option>Summoner</option>
                <option>Tarutara</option>
                <option>Tree</option>
                <option>Viera</option>
                <option>Yeti</option>
          </select>
        </div>
    )
}
