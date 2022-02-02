import React, { Component } from "react";
import HikeGPS from "./HikeGPS";

//Hiking card component - handles swapping hiking content info, gallery info and selected hiking item
export default function HikeCard(props) {

  //sets up initial selected hike on page load
  let hike1 = props.hikes.data[0];

  // set up variables 
  let hikeDesc, bestSeason,  hikeExp, hikeLink, hikeMap, hikeImage1, hikeImage2, hikeImage3, item, legend1, legend2, legend3
  let hikeTitle, hikeFeatures, dogFriendly, hikeLocation;


  //Grabs all id's and assigns click events to hike items
  function loadStuff() {
    hikeTitle = document.getElementById('hikeTitle');
    hikeFeatures = document.getElementById('hikeFeatures');
    dogFriendly = document.getElementById('dogFriendly');
    hikeLocation = document.getElementById('hikeLocation');
    hikeDesc = document.getElementById('hikeDesc');
    bestSeason = document.getElementById('bestSeason')
    hikeExp = document.getElementById('hikeExp')
    hikeLink = document.getElementById('hikeLink')
    hikeImage1 = document.getElementById('hikeImage1')
    hikeImage2 = document.getElementById('hikeImage2')
    hikeImage3 = document.getElementById('hikeImage3')
    legend1 = document.getElementById('legend1');
    legend2 = document.getElementById('legend2');
    legend3 = document.getElementById('legend3');

    hikeMap = document.getElementById('hikeMap');
    document.querySelectorAll('.item').forEach(item => {
      item.addEventListener('click', changeMe);

    })
  }
  //grabs everything after initial page load
  setTimeout(loadStuff, 1000);

  //Handles assigning passable data based on selected hike
  function changeMe(e) {
    let target = e.target.id;

    switch (target) {
      case 'busiek':
        hikeFiller("busiek", 0, 3, 4, 5);
        break;
      case 'hercules':
        hikeFiller("hercules", 1, 0, 1, 2);
        break;
      case 'piney':
        hikeFiller("piney", 2, 6, 7, 8);
        break;
      case 'twoRivers':
        hikeFiller("twoRivers", 3, 27, 28, 29);
        break;
      case 'compton':
        hikeFiller("compton", 4, 9, 10, 11);
        break;
      case 'hening':
        hikeFiller("hening", 5, 12, 13, 14);
        break;
      case 'lakeSpringfield':
        hikeFiller("lakeSpringfield", 6, 15, 16, 17);
        break;
      case 'lostHill':
        hikeFiller("lostHill", 7, 18, 19, 20);
        break;
      case 'pleasant':
        hikeFiller("pleasant", 8, 21, 22, 23);
        break;
      case 'springfieldNC':
        hikeFiller("springfieldNC", 9, 24, 25, 26);
        break;
      case 'valleyWater':
        hikeFiller("valleyWater", 10, 30, 31, 32);
        break;
      case 'wilsonsCreek':
        hikeFiller("wilsonsCreek", 11, 33, 34, 35);
        break;
    }
  }

  //Handles swapping out hike card content with passed data
  function hikeFiller(id, content, img1, img2, img3) {
    selectAllItems();

    let itemId = document.getElementById(id);
    itemId.style.color = "forestgreen";
    setupHikeContent(content);
    swapImages(img1, img2, img3);
  }
  //changes non selected list items to black
  function selectAllItems(e) {
    document.querySelectorAll('.item').forEach(item => {
      item.style.color = "black";
    })
  }

  //handles hikeContent and legends
  function setupHikeContent(num) {

    let hikeInfo = props.hikes.data[num];

    //Set hike info
    hikeTitle.innerHTML = hikeInfo.name;
    hikeTitle.style.color = "forestgreen";
    hikeLocation.innerHTML = hikeInfo.location;
    hikeFeatures.innerHTML = hikeInfo.features;
    dogFriendly.innerHTML = hikeInfo.dogFriendly;
    hikeDesc.innerHTML = hikeInfo.description;
    bestSeason.innerHTML = hikeInfo.bestSeason;
    hikeExp.innerHTML = hikeInfo.personalExp;
    hikeLink.innerHTML = hikeInfo.linkTo;
    hikeMap.src = hikeInfo.iframeSrc;

    //set legends
    legend1.innerHTML = hikeInfo.legend1;
    legend2.innerHTML = hikeInfo.legend2;
    legend3.innerHTML = hikeInfo.legend3;
  }

  //swap carousel images and thumbnails
  function swapImages(img1, img2, img3) {
    let image1 = document.querySelectorAll('#hikeImage1');
    let image2 = document.querySelectorAll('#hikeImage2');
    let image3 = document.querySelectorAll('#hikeImage3');

    //carousel images
    image1[0].src = props.hikes.imgs[img1].src;
    image2[0].src = props.hikes.imgs[img2].src;
    image3[0].src = props.hikes.imgs[img3].src;

    //thumbnails
    image1[1].src = props.hikes.imgs[img1].src;
    image2[1].src = props.hikes.imgs[img2].src;
    image3[1].src = props.hikes.imgs[img3].src;

  }

  return (
    <div className="ui container segment raised relaxed" id="hikeCard" style={{ fontSize: "1.3rem" }}>
      <h2 id="hikeTitle" style={{color: "forestgreen"}}>
        {hike1.name}
      </h2>
      <hr id="hikeHr" style={{marginBottom: "1rem"}}></hr>
      <b style={{paddingTop: "1rem"}}>Features: </b>
      <p id="hikeFeatures">
        <p>{hike1.features}</p>
      </p>
      <b style={{paddingTop: "1rem"}}>Dog Friendly: </b>
      <p id="dogFriendly">
        <p>{hike1.dogFriendly}</p>
      </p>
      <b>Location: </b>
      <p id="hikeLocation">
        {hike1.location}
      </p>
      <b>Description: </b>
      <p id="hikeDesc">{hike1.description}</p>
      <b>Beast Season: </b>
      <p id="bestSeason">{hike1.bestSeason}</p>
      <b>Personal Experience: </b>
      <p id="hikeExp">{hike1.personalExp}</p>
      <div>
        <b>More Information:</b>
        <br></br>
        <br></br>
        <a id="hikeLink" target="_blank" href={hike1.linkTo}>
          {hike1.linkTo}
        </a>
      </div>
      <br></br>
      <HikeGPS data={props} />

    </div>
  );
}
