import React from "react";
import CatNavigation from "./CatNavigation";
import CatFooter from "../cats/CatFooter";

//Cat List
export default function CatsList(props) {
  let pageNum = 1;
  let count = 1;

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
      window.alert("You've requested all lists of cat facts");
    }
  }

  function createList(fact) {
    let item = document.createElement("p");
    item.innerHTML = count + ". " + fact.fact;
    document.getElementById("catFactsList").append(item);
    count++;
  }

  return (
    <div
      className="ui container center aligned very padded relaxed"
      id="catFactsListContainer"
    >
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
      >
        <i className="cat icon large"></i>
      </button>
      <CatFooter />
    </div>
  );
}
