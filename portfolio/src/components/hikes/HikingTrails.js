import React, { useState } from "react";

export default function HikingTrails(props) {

  //new state


  let busiek, hikeDesc, bestSeason, hikeExp, hikeLink, hikeMap, hikeImage1, hikeImage2, hikeImage3, legend1, legend2, legend3



  function loadStuff() {
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

    console.log(hikeMap, "hikeMap")

    document.querySelectorAll('.item').forEach(item => {
      item.addEventListener('click', changeMe);

    })

  }

  setTimeout(loadStuff, 1000);

  function changeMe(e) {
    console.log("hello!!!", e);
    busiekFiller(e);
    herculesFiller(e);
    pineyFiller(e);

  }

  //changes non selected list items to black
  function selectAllItems(e) {
    document.querySelectorAll('.item').forEach(item => {
      item.style.color = "black";
    })
  }

    //handles hikeContent and legends
    function setupHikeContent(num) {
      let hikeInfo = props.data[num];
  
      //Set hike info
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
    image1[0].src = props.imgs[img1].src;
    image2[0].src = props.imgs[img2].src;
    image3[0].src = props.imgs[img3].src;

    //thumbnails
    image1[1].src = props.imgs[img1].src;
    image2[1].src = props.imgs[img2].src;
    image3[1].src = props.imgs[img3].src;

  }


  function busiekFiller(e) {
    busiek = document.getElementById('busiek');
    if (e.target.id === "busiek") {
      selectAllItems();
      busiek.style.color = "teal";
      setupHikeContent(0);
      swapImages(3, 4, 5);

    }
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

  function pineyFiller(e) {
    let piney = document.getElementById('piney');
    if (e.target.id === "piney") {
      selectAllItems();
      piney.style.color = "teal";
      setupHikeContent(2);
      swapImages(6, 7, 8)
    }
  }


  return (
    <div className="ui column">
      <div className="ui container segment piled raised">
        <div className="ui list" style={{ fontSize: "2rem" }}>
          <div onClick={changeMe} id="busiek" className="item">
            Busiek State Forest
          </div>
          <div className="item" id="hercules">Hercules Glades Wilderness</div>
          <div className="item" id="piney">Piney Creek Wilderness</div>
          {/* <div className="item" id="twoRivers">Two Rivers Mountain Bike Park</div> */}
        </div>
      </div>
    </div>
  );
}
