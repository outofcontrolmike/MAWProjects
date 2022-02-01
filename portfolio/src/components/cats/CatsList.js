import React from "react";
import CatNavigation from "./CatNavigation";

//Cat List
export default function CatsList(props) {
  let pageNum = 1;

  //LoadFacts
  function loadFacts() {
    //Figure out how to get every random fact by button click (like append or prepend to list)
    if (pageNum <= 34) {
      console.log("facts List", pageNum);
      let url = "https://catfact.ninja/facts?page=" + pageNum;
      pageNum++;
      fetch(url)
        .then((response) => response.json())
        .then((catFacts) => {
          catFacts.data.map(createList);
          let hr = document.createElement("hr");
          document.getElementById("catFactsList").append(hr);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      pageNum = 1;
    }
  }

  function createList(fact) {
    console.log(fact);
    let item = document.createElement("p");
    item.innerHTML = fact.fact;
    document.getElementById("catFactsList").append(item);
  }

  return (
    <div className="ui container fluid center aligned">
      <CatNavigation />
      <button onClick={loadFacts} className="ui button huge red basic">
        Load Lists
      </button>
      <div className="ui container segment piled" id="catFactsList"></div>
    </div>
  );
}
