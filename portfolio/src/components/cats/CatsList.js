import React from "react";
import CatNavigation from "./CatNavigation";

//Cat List
export default function CatsList(props) {
  let pageNum = 1;

  //initial call for loadFacts;
  setTimeout(() => {
    loadFacts();
  }, 10);
  //LoadFacts
  function loadFacts() {
    //Figure out how to get every random fact by button click (like append or prepend to list)
    if (pageNum <= 34) {
      let list = document.getElementById("catFactsList");
      list.innerHTML = "";
      let url = "https://catfact.ninja/facts?page=" + pageNum;
      pageNum++;
      fetch(url)
        .then((response) => response.json())
        .then((catFacts) => {
          catFacts.data.map(createList);
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
    document.getElementById("catFactsList").prepend(item);
  }

  return (
    <div className="ui container fluid center aligned">
      <CatNavigation />
      <h3>10 Random Cat Facts</h3>
      <div className="ui container fluid" id="catFactsList"></div>
      <button
        data-tooltip="Request 10 More Random Facts"
        data-inverted=""
        data-variation="large"
        data-position="right center"
        onClick={loadFacts}
        className="ui button huge massive orange basic"
        data-content="add users"
      >
        <i className="cat icon large"></i>
      </button>
    </div>
  );
}
