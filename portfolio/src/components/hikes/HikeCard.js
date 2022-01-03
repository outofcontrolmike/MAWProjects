import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//Hiking card
export default function HikeCard() {
  return (
    <div className="ui container" id="hikeCard" style={{ fontSize: "2rem" }}>
      <p id="hikePhotos">
        <Carousel>
          <div>
            <img id="hikeImage1" src="img/hikes/herculesGlades.jpg" />
            <p className="legend">The Falls</p>
          </div>
          <div>
            <img id="hikeImage2" src="img/hikes/herculesGlades3.jpg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img id="hikeImage3" src="img/hikes/herculesglades2.jpg" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </p>

      <p id="hikeDesc">Test</p>
      <p id="bestSeason">TEst</p>
      <p id="hikeExp">Place was la de fricken da</p>
      <div id="hikeLink">
        <a href="www.google.com" target="_blank">
          More about hike
        </a>
      </div>
    </div>
  );
}
