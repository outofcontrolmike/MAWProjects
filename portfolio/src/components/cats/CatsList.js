import React from 'react';

//Cat List
export default function CatsList() {

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
      <h3>CatsList Test</h3>
  </div>;
}
