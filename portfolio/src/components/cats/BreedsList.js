import React from 'react';
import CatNavigation from './CatNavigation';

//Breeds list component
export default function BreedsList(props) {
  let page = 1;
    //LoadBreeds
    //ToDO:  figure out loading Breeds list pagination
    function loadBreeds() {
        if(page <= 4) {
        let url = "https://catfact.ninja/breeds?page=" + page;
        fetch(url)
          .then((response) => response.json())
          .then((catBreeds) => {
              console.log("Breeds", catBreeds);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
          page++;
      }
      else {page = 1}
    };
  return <div>
    <CatNavigation/>
      <h3>Breeds List test</h3>
      <button onClick={loadBreeds} className='ui button huge red basic'>Load Breeds Lists</button>
  </div>;
}
