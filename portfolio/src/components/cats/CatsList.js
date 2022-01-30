import React from 'react';
import CatNavigation from './CatNavigation';

//Cat List
export default function CatsList(props) {

    //LoadFacts
    function loadFacts() {

      //Figure out how to get every random fact by button click (like append or prepend to list)
      let pageNum = 2;
      let url = "https://catfact.ninja/facts?page=" + pageNum;
      fetch(url)
        .then((response) => response.json())
        .then((catFacts) => {
            console.log("catFact", catFacts);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    setTimeout(() => {
      loadFacts()
    }, 10);
  return <div>
    <CatNavigation />
      <h3>CatsList Test</h3>
  </div>;
}
