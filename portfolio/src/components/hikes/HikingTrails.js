import React, {useState} from "react";

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


  function busiekFiller(e) {
    busiek = document.getElementById('busiek');
    let busiekHike = props.data[0];
    if (e.target.id === "busiek") {
      selectAllItems();
      busiek.style.color = "teal";
      hikeDesc.innerHTML = busiekHike.description;
      bestSeason.innerHTML = busiekHike.bestSeason;
      hikeExp.innerHTML = busiekHike.personalExp;
      hikeLink.innerHTML = busiekHike.linkTo;
      hikeMap.src = busiekHike.iframeSrc;

      //set images
      hikeImage1.src = props.imgs[3].src;
      hikeImage2.src = props.imgs[4].src;
      hikeImage3.src = props.imgs[5].src;

      //set legends
      legend1.innerHTML = busiekHike.legend1;
      legend2.innerHTML = busiekHike.legend2;
      legend3.innerHTML = busiekHike.legend3;    
    }
  }

  function herculesFiller(e) {
    let hercules = document.getElementById('hercules');
    let herculesHike = props.data[1];
    if (e.target.id === "hercules") {
      selectAllItems();
      hercules.style.color = "teal";
      hikeDesc.innerHTML = herculesHike.description;
      bestSeason.innerHTML = herculesHike.bestSeason;
      hikeExp.innerHTML = herculesHike.personalExp;
      hikeLink.innerHTML = herculesHike.linkTo;
      hikeMap.src = herculesHike.iframeSrc;

      //set images
      hikeImage1.src = props.imgs[0].src;
      hikeImage2.src = props.imgs[1].src;
      hikeImage3.src = props.imgs[2].src;
          
      //set legends
      legend1.innerHTML = herculesHike.legend1;
      legend2.innerHTML = herculesHike.legend2;
      legend3.innerHTML = herculesHike.legend3;    

    }
  }

  function pineyFiller(e) {
    let piney = document.getElementById('piney');
    let pineyHike = props.data[2];
    if (e.target.id === "piney") {
      selectAllItems();
      piney.style.color = "teal";
      hikeDesc.innerHTML = pineyHike.description;
      bestSeason.innerHTML = pineyHike.bestSeason;
      hikeExp.innerHTML = pineyHike.personalExp;
      hikeLink.innerHTML = pineyHike.linkTo;
      hikeMap.src = pineyHike.iframeSrc;

      //set images
      hikeImage1.src = props.imgs[6].src;
      hikeImage2.src = props.imgs[7].src;
      hikeImage3.src = props.imgs[8].src;

     //set legends
     legend1.innerHTML = pineyHike.legend1;
     legend2.innerHTML = pineyHike.legend2;
     legend3.innerHTML = pineyHike.legend3;    

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
