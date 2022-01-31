import React from 'react';
import CatNavigation from '../../../components/cats/CatNavigation';

//Random Cats Facts - Needs two options
export default function RandomCats(props) {

    // Get Random Cat Fact
    function requestFact(time) {
        let url = "https://catfact.ninja/fact";
        console.log(time);
        fetch(url)
          .then((response) => response.json())
          .then((catFact) => {
              
              document.getElementById('catRandomFact').innerHTML = catFact.fact;
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }      

    function startProgram() {
      let time = document.getElementById('catInput').value;
      //convert Time to milliseconds
      time *= 1000;
      document.getElementById('catInput').style.visibility="hidden";
      document.getElementById('catFactButton').style.visibility="hidden";
      setInterval(() => {
        requestFact();
    }, time);  
    }

      
  return <div>
    <CatNavigation />
    <div className='ui container padded relaxed center aligned ui text huge' id="randomCatFactContainer">
      <span id="catRandomFact"  className='ui text huge'>How many Seconds do you want between seeing a random cat fact?  Please type in the amount below:</span>
    <div class="ui action input" id="catInputMenu">
  <input id="catInput" type="text" placeholder="Input Seconds"/>
  <button onClick={startProgram} id="catFactButton" className='ui button red huge'>Go</button>
</div>
  </div>
  </div>
}
