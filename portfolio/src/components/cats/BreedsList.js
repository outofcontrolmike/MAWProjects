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
    let breed = document.createElement("p");
    let coat = document.createElement("p");
    let country = document.createElement("p");
    let origin = document.createElement("p");
    let pattern = document.createElement("p");

    breed.innerHTML = cat.breed;
    coat.innerHTML = cat.coat;
    country.innerHTML = cat.country;
    origin.innerHTML = cat.origin;
    pattern.innerHTML = cat.pattern;

    let hr = document.createElement("hr");
    document
      .getElementById("breedList")
      .append(breed, coat, country, origin, pattern, hr);
  }

  return (
    <div className="ui container fluid center aligned">
      <CatNavigation />
      <button onClick={loadBreeds} className="ui button huge red basic">
        Load Breeds Lists
      </button>
      <div
        className="ui container segment piled padded raised"
        style={{ color: "black" }}
        id="breedList"
      >
        TEst
      </div>
    </div>
  );
}
