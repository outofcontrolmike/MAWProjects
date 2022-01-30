import React from 'react';
import CatNavigation from './CatNavigation';

//Cat List
export default function CatsList(props) {

    //LoadFacts
    function loadFacts() {
      let url = "https://catfact.ninja/facts";
      fetch(url)
        .then((response) => response.json())
        .then((catFact) => {
            console.log("catFact", catFact);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  return <div>
    <CatNavigation />
      <h3>CatsList Test</h3>
  </div>;
}
