import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//Hiking card
export default function HikeCard(props) {
  let hike1 = props.hikes.data[0];

  return (
    <div className="ui container" id="hikeCard" style={{ fontSize: "2rem" }}>
      <p id="hikePhotos">
        <Carousel carouselData={props}>
          <div>
            <img id="hikeImage1" src={props.hikes.imgs[3].src} />
            <p id="legend1"className="legend">{hike1.legend1}</p>
          </div>
          <div>
            <img id="hikeImage2" src={props.hikes.imgs[4].src} />
            <p id="legend2" className="legend">{hike1.legend2}</p>
          </div>
          <div>
            <img id="hikeImage3"  src={props.hikes.imgs[5].src}  />
            <p  id="legend3" className="legend">{hike1.legend3}</p>
          </div>
        </Carousel>
      </p>

      <p id="hikeDesc">{hike1.description}</p>
      <p id="bestSeason">{hike1.bestSeason}</p>
      <p id="hikeExp">{hike1.personalExp}</p>
      <div>
        More Info:
        <br></br>
        <br></br>
        <a id="hikeLink" href="www.google.com" target="_blank">
          {hike1.linkTo}
        </a>
      </div>
    </div>
  );
}
