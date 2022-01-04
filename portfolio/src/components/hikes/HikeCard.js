import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//Hiking card
export default function HikeCard(props) {
  console.log("props from hike card", props.hikes.data[0]);
  let hike1 = props.hikes.data[0];

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

      <p id="hikeDesc">{hike1.description}</p>
      <p id="bestSeason">{hike1.bestSeason}</p>
      <p id="hikeExp">{hike1.personalExp}</p>
      <div id="hikeLink">
        More Info:
        <br></br>
        <br></br>
        <a href="www.google.com" target="_blank">
          {hike1.linkTo}
        </a>
      </div>
    </div>
  );
}
