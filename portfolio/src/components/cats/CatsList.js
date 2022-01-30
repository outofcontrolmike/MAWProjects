import React from 'react';
import CatNavigation from './CatNavigation';

//Cat List
export default function CatsList(props) {

  let pageNum = 1;

    //LoadFacts
    function loadFacts() {

      //Figure out how to get every random fact by button click (like append or prepend to list)
      if(pageNum <= 34) {
        console.log('facts List', pageNum)
      let url = "https://catfact.ninja/facts?page=" + pageNum;
      pageNum++;
      fetch(url)
        .then((response) => response.json())
        .then((catFacts) => {
            console.log("catFact", catFacts);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      
      }
      else {
        pageNum = 1;
      }
    }
  return <div>
    <CatNavigation />
      <h3>CatsList Test</h3>
      <button onClick={loadFacts} className='ui button huge red basic'>Load Lists</button>

  </div>;
}
