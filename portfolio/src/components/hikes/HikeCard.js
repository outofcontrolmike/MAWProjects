import React, { Component } from "react";
import HikeGPS from "./HikeGPS";
//Hiking card
export default function HikeCard(props) {
  let hike1 = props.hikes.data[0];

  
  let hikeDesc, bestSeason, hikeExp, hikeLink, hikeMap, hikeImage1, hikeImage2, hikeImage3, item, legend1, legend2, legend3

  let hikeTitle, hikeFeatures, hikeLocation;


  function loadStuff() {
    hikeTitle = document.getElementById('hikeTitle');
    hikeFeatures = document.getElementById('hikeFeatures');
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
  setTimeout(loadStuff, 1000);

  function changeMe(e) {
    busiekFiller(e);
    herculesFiller(e);
    pineyFiller(e);
    comptonFiller(e);
    heningFiller(e);
    lakeSpfFiller(e);
    lostHillFiller(e);
    pleasantFiller(e);
    sncFiller(e);
    twoRiversFiller(e);
    valleyFiller(e);
    wilsonFiller(e);

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
      hikeLocation.innerHTML = hikeInfo.location;
      hikeFeatures.innerHTML = hikeInfo.features;
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

    // //revert back to original slide
    // let thumbs = document.querySelectorAll('.slide');
    // thumbs[0].classList.remove('selected', 'previous');
    // thumbs[1].classList.remove('selected', 'previous');
    // thumbs[2].classList.remove('selected', 'previous');

    // console.log("slides", thumbs);
    // thumbs[0].classList.add('selected');

  }


  function herculesFiller(e) {
    let hercules = document.getElementById('hercules');
    if (e.target.id === "hercules") {
      selectAllItems();
      hercules.style.color = "teal";
      setupHikeContent(1);
      swapImages(0, 1, 2);
    }
  }

  function busiekFiller(e) {
    let item = document.getElementById('busiek');
    if (e.target.id === "busiek") {
      selectAllItems();
      item.style.color = "teal";
      setupHikeContent(0);
      swapImages(3, 4, 5);

    }
  }

  function pineyFiller(e) {
    let piney = document.getElementById('piney');
    if (e.target.id === "piney") {
      selectAllItems();
      piney.style.color = "teal";
      setupHikeContent(2);
      swapImages(6, 7, 8)
    }
  }

  //////

  
  function comptonFiller(e) {
    item = document.getElementById('compton');
    if (e.target.id === "compton") {
      selectAllItems();
      item.style.color = "teal";
      setupHikeContent(4);
      swapImages(9, 10, 11);
    }
  }

  
  function heningFiller(e) {
    item = document.getElementById('hening');
    if (e.target.id === "hening") {
      selectAllItems();
      item.style.color = "teal";
      setupHikeContent(5);
      swapImages(12, 13, 14);
    }
  }

  
  function lakeSpfFiller(e) {
    item = document.getElementById('lakeSpringfield');
    if (e.target.id === "lakeSpringfield") {
      selectAllItems();
      item.style.color = "teal";
      setupHikeContent(6);
      swapImages(15, 16, 17);

    }
  }

  
  function lostHillFiller(e) {
    item = document.getElementById('lostHill');
    if (e.target.id === "lostHill") {
      selectAllItems();
      item.style.color = "teal";
      setupHikeContent(7);
      swapImages(18, 19, 20);
    }
  }

  //pleasant hope
  function pleasantFiller(e) {
    item = document.getElementById('pleasant');
    if (e.target.id === "pleasant") {
      selectAllItems();
      item.style.color = "teal";
      setupHikeContent(8);
      swapImages(21, 22, 23);
    }
  }

  
//springfield Nature Center
  function sncFiller(e) {
    item = document.getElementById('springfieldNC');
    if (e.target.id === "springfieldNC") {
      selectAllItems();
      item.style.color = "teal";
      setupHikeContent(9);
      swapImages(24, 25, 26);
    }
  }

  
  function twoRiversFiller(e) {
    item = document.getElementById('twoRivers');
    if (e.target.id === "twoRivers") {
      selectAllItems();
      item.style.color = "teal";
      setupHikeContent(3);
      swapImages(27, 28, 29);
    }
  }

  
  function valleyFiller(e) {
     item = document.getElementById('valleyWater');
    if (e.target.id === "valleyWater") {
      selectAllItems();
      item.style.color = "teal";
      setupHikeContent(10);
      swapImages(30, 31, 32);
    }
  }

  
  function wilsonFiller(e) {
    item = document.getElementById('wilsonsCreek');
    if (e.target.id === "wilsonsCreek") {
      selectAllItems();
      item.style.color = "teal";
      setupHikeContent(11);
      swapImages(33, 34, 35);
    }
  }
  
  
  return (
    <div className="ui" id="hikeCard" style={{ fontSize: "1.3rem" }}>
      <h2 id="hikeTitle">
        {hike1.name}
      </h2>
      <hr></hr>
      <b>Features: </b>
      <p id="hikeFeatures">
        <p>{hike1.features}</p>
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
      <HikeGPS data={props}/>

    </div>
  );
}
