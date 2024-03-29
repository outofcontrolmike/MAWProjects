import React from "react";
import CatFooter from "./CatFooter";
import CatNavigation from "./CatNavigation";

//Breeds list component
export default function BreedsList() {
  //initial call for loadBreeds;
  setTimeout(() => {
    loadBreeds();
  }, 10);

  //page count
  let page = 1;

  //Hit api for breeds
  function loadBreeds() {
    if (page <= 4) {
      let url = "https://catfact.ninja/breeds?page=" + page;
      document.getElementById("pageNum").innerHTML = page + "/4";
      document.getElementById("breedList").innerHTML = "";
      document.getElementById("breedList").prepend("page" + page);
      fetch(url)
        .then((response) => response.json())
        .then((catBreeds) => {
          catBreeds.data.map(createCatCard);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      page++;
    } else {
      document.getElementById("breedBtn").disabled = "true";
    }
  }

  //Create
  function createCatCard(cat) {
    let list = document.createElement("div");
    list.classList = "ui container segment stackable very raised padded";
    list.id = "breedSegment";
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
    coat.innerHTML = "<span id='catSpan'>Coat: </span>" + cat.coat;
    country.innerHTML = "<span id='catSpan'>Country: </span>" + cat.country;
    origin.innerHTML = "<span id='catSpan'>Origin: </span>" + cat.origin;
    pattern.innerHTML = "<span id='catSpan'>Pattern: </span>" + cat.pattern;

    column1.append(coat, country);
    column2.append(origin, pattern);

    container.append(column1, column2);
    list.append(breed, hr, container);
    document.getElementById("breedList").append(list);
  }

  // function backToTop() {
  //   document.getElementById("breedList").scrollTop = 0;
  // }

  return (
    <div className="ui container fluid center aligned padded relaxed" id="breedListContainer">
      <CatNavigation />
      <h2 className="ui text">
        {" "}
        <span id="pageNum" className="ui text large">
          {" "}
          1/4
        </span>
      </h2>
      <div
        className="ui container fluid"
        style={{ color: "black" }}
        id="breedList"
      ></div>
      <button
        id="breedBtn"
        onClick={loadBreeds}
        data-tooltip={"Request More of my Breeds"}
        data-inverted=""
        data-variation="large"
        data-position="left center"
        className="ui button large"
      >
        <i className="cat icon huge" id="breedsCatIcon"></i>
      </button>
      {/* <i
        id="catsBackToTop"
        onClick={backToTop}
        className="arrow alternate circle up outline icon huge"
        style={{ color: "beige" }}
      ></i> */}
      <CatFooter />
    </div>
  );
}
