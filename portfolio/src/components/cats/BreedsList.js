import React from 'react';
//Breeds list component
export default function BreedsList(props) {

    //LoadBreeds
    function loadBreeds() {
        let url = "https://catfact.ninja/breeds";
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
      <h3>Breeds List test</h3>
  </div>;
}
