import React from "react";
import CatNavigation from "./CatNavigation";

//Breeds list component
export default function BreedsList(props) {
  let page = 1;
  function loadBreeds() {
    if (page <= 4) {
      let url = "https://catfact.ninja/breeds?page=" + page;
      fetch(url)
        .then((response) => response.json())
        .then((catBreeds) => {
          console.log("Breeds", catBreeds);
          catBreeds.data.map(createList);
          //figure out how to add page number
          document.getElementById("breedList").prepend("page" + page);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      page++;
    } else {
      page = 1;
    }
  }

  function createList(cat) {
    let list = document.createElement("div");
    list.classList = "ui container segment stackable very raised padded";

    let container = document.createElement("div");
    container.classList = "ui two column container stackable grid";

    let column1 = document.createElement("div");
    column1.classList = "ui column";

    let column2 = document.createElement("div");
    column2.classList = "ui column";

    let breed = document.createElement("h1");
    let coat = document.createElement("p");
    let country = document.createElement("p");
    let origin = document.createElement("p");
    let pattern = document.createElement("p");
    let hr = document.createElement("hr");

    breed.innerHTML = cat.breed;
    coat.innerHTML = "<span id='catSpan'>COAT: </span>" + cat.coat;
    country.innerHTML = "<span id='catSpan'>Country: </span>" + cat.country;
    origin.innerHTML = "<span id='catSpan'>Origin: </span>" + cat.origin;
    pattern.innerHTML = "<span id='catSpan'>Pattern: </span>" + cat.pattern;

    column1.append(coat, country);
    column2.append(origin, pattern);

    container.append(column1, column2);
    list.append(breed, hr, container);
    document.getElementById("breedList").append(list);
  }

  return (
    <div className="ui container fluid center aligned padded relaxed">
      <CatNavigation />
      <button onClick={loadBreeds} className="ui button huge red basic">
        Load Breeds Lists
      </button>
      <div
        className="ui container fluid"
        style={{ color: "black" }}
        id="breedList"
      ></div>
    </div>
  );
}
