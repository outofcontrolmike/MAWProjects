import React from 'react';

//Random Cats Facts - Needs two options
export default function RandomCats() {

    function handleClick() {
        let url = "https://catfact.ninja/fact";
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
      <h3>Test for Random Cat Facts</h3>
  </div>;
}
