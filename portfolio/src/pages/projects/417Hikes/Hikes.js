import React from "react";
import HikeCarousel from "../../../components/hikes/HikeCarousel";
import HikeContent from "../../../components/hikes/HikeContent";
import HikeFooter from "../../../components/hikes/HikeFooter";
import HikeHeader from "../../../components/hikes/HikeHeader";
import HikeNavigation from "../../../components/hikes/HikeNavigation";
import HikingTrails from "../../../components/hikes/HikingTrails";

function Hikes(props) {
  
  let imgArray = new Array()
  let count = 10;

  //Create array indexes for images
  for(let i = 0; i <= count; i++)
  {
    imgArray[i] = new Image();
  }

  imgArray[0].src = "img/hikes/herculesGlades.jpg";
  imgArray[1].src = "img/hikes/herculesglades2.jpg";
  imgArray[2].src = "img/hikes/herculesGlades3.jpg";

  imgArray[3].src = "img/hikes/busiek1.jpg";
  imgArray[4].src = "img/hikes/busiek2.jpg";
  imgArray[5].src = "img/hikes/busiek3.jpg";

  imgArray[6].src = "img/hikes/piney1.jpg";
  imgArray[7].src = "img/hikes/piney2.jpg";
  imgArray[8].src = "img/hikes/piney3.jpeg";




  //array of hikes
  let hikes = [
    {
      name: "Busiek State Forest",
      description: "Testing from array",
      bestSeason: "Spring",
      personalExp: "This is a very easy place to become lost at",
      legend1: "Carter Cemetary along the Red trail",
      legend2: "Spring Time at the Yellow Trail",
      legend3: "Part of the Red Trail",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.147133743264!2d-93.23837038481076!3d36.86289687186768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf0da12ca8a9a3%3A0x74c5d4e47ac97d3f!2sBusiek%20State%20Forest%20and%20Wildlife%20Area!5e0!3m2!1sen!2sus!4v1641234844396!5m2!1sen!2sus",
      linkTo:
        "https://mdc.mo.gov/discover-nature/places/busiek-state-forest-wildlife-area",
    },
    {
      name: "Hercules Glades Wilderness",
      description: "Beautiful place in the ozarks",
      bestSeason: "Spring",
      personalExp: "I lost a lot of weight hiking this trail.",
      legend1: "The Falls",
      legend2: "Northern part of the wilderness",
      legend3: "Part of the glades",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12801.066985318686!2d-92.9336978!3d36.668087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x410ef42846c917ef!2sHercules%20Glades%20Wilderness!5e0!3m2!1sen!2sus!4v1641237211284!5m2!1sen!2sus",
      linkTo:
        "https://www.fs.usda.gov/recarea/mtnf/recarea/?recid=21754",
    },
    {
      name: "PineyCreek Wilderness",
      description: "Kind of near Galena",
      bestSeason: "Winter",
      personalExp: "Very easy to get lost out here",
      legend1: "Viewing of Table Rock Lake",
      legend2: "Somewhere in the wilderness",
      legend3: "Looks like summer time",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12795.234184852217!2d-93.6100099!3d36.7031383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe114f42700b002e3!2sPiney%20Creek%20Wilderness!5e0!3m2!1sen!2sus!4v1641237264740!5m2!1sen!2sus",
      linkTo:
        "https://www.fs.usda.gov/recarea/mtnf/recarea/?recid=21764",
    },
    {
      name: "Two Rivers Mountain Bike Park",
      description: "very cool place to hike in Highlandville MO",
      bestSeason: "Fall/Winter/Spring",
      personalExp:
        "I grew up a few miles down the road from this place.  I think this place had a different owner when I was younger.  When you first pull in you'll think it's only a mountain bike park, but there is plenty of footwork to be explored when you walk towards the river.",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3188.200666116713!2d-93.35636278480841!3d36.957264066542464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf6b99a091c567%3A0xe26e1bd83561f3f7!2sTwo%20Rivers%20Mountain%20Bike%20Park!5e0!3m2!1sen!2sus!4v1641237303981!5m2!1sen!2sus",
      linkTo:
        "https://mdc.mo.gov/discover-nature/places/busiek-state-forest-wildlife-area",
    },

    ////New additions
    {
      name: "PineyCreek Wilderness",
      description: "Kind of near Galena",
      bestSeason: "Winter",
      personalExp: "Very easy to get lost out here",
      legend1: "Viewing of Table Rock Lake",
      legend2: "Somewhere in the wilderness",
      legend3: "Looks like summer time",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12795.234184852217!2d-93.6100099!3d36.7031383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe114f42700b002e3!2sPiney%20Creek%20Wilderness!5e0!3m2!1sen!2sus!4v1641237264740!5m2!1sen!2sus",
      linkTo:
        "https://www.fs.usda.gov/recarea/mtnf/recarea/?recid=21764",
    },
    {
      name: "PineyCreek Wilderness",
      description: "Kind of near Galena",
      bestSeason: "Winter",
      personalExp: "Very easy to get lost out here",
      legend1: "Viewing of Table Rock Lake",
      legend2: "Somewhere in the wilderness",
      legend3: "Looks like summer time",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12795.234184852217!2d-93.6100099!3d36.7031383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe114f42700b002e3!2sPiney%20Creek%20Wilderness!5e0!3m2!1sen!2sus!4v1641237264740!5m2!1sen!2sus",
      linkTo:
        "https://www.fs.usda.gov/recarea/mtnf/recarea/?recid=21764",
    },
    {
      name: "PineyCreek Wilderness",
      description: "Kind of near Galena",
      bestSeason: "Winter",
      personalExp: "Very easy to get lost out here",
      legend1: "Viewing of Table Rock Lake",
      legend2: "Somewhere in the wilderness",
      legend3: "Looks like summer time",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12795.234184852217!2d-93.6100099!3d36.7031383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe114f42700b002e3!2sPiney%20Creek%20Wilderness!5e0!3m2!1sen!2sus!4v1641237264740!5m2!1sen!2sus",
      linkTo:
        "https://www.fs.usda.gov/recarea/mtnf/recarea/?recid=21764",
    },
    {
      name: "PineyCreek Wilderness",
      description: "Kind of near Galena",
      bestSeason: "Winter",
      personalExp: "Very easy to get lost out here",
      legend1: "Viewing of Table Rock Lake",
      legend2: "Somewhere in the wilderness",
      legend3: "Looks like summer time",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12795.234184852217!2d-93.6100099!3d36.7031383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe114f42700b002e3!2sPiney%20Creek%20Wilderness!5e0!3m2!1sen!2sus!4v1641237264740!5m2!1sen!2sus",
      linkTo:
        "https://www.fs.usda.gov/recarea/mtnf/recarea/?recid=21764",
    },
    {
      name: "PineyCreek Wilderness",
      description: "Kind of near Galena",
      bestSeason: "Winter",
      personalExp: "Very easy to get lost out here",
      legend1: "Viewing of Table Rock Lake",
      legend2: "Somewhere in the wilderness",
      legend3: "Looks like summer time",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12795.234184852217!2d-93.6100099!3d36.7031383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe114f42700b002e3!2sPiney%20Creek%20Wilderness!5e0!3m2!1sen!2sus!4v1641237264740!5m2!1sen!2sus",
      linkTo:
        "https://www.fs.usda.gov/recarea/mtnf/recarea/?recid=21764",
    },
    {
      name: "PineyCreek Wilderness",
      description: "Kind of near Galena",
      bestSeason: "Winter",
      personalExp: "Very easy to get lost out here",
      legend1: "Viewing of Table Rock Lake",
      legend2: "Somewhere in the wilderness",
      legend3: "Looks like summer time",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12795.234184852217!2d-93.6100099!3d36.7031383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe114f42700b002e3!2sPiney%20Creek%20Wilderness!5e0!3m2!1sen!2sus!4v1641237264740!5m2!1sen!2sus",
      linkTo:
        "https://www.fs.usda.gov/recarea/mtnf/recarea/?recid=21764",
    },
    {
      name: "PineyCreek Wilderness",
      description: "Kind of near Galena",
      bestSeason: "Winter",
      personalExp: "Very easy to get lost out here",
      legend1: "Viewing of Table Rock Lake",
      legend2: "Somewhere in the wilderness",
      legend3: "Looks like summer time",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12795.234184852217!2d-93.6100099!3d36.7031383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe114f42700b002e3!2sPiney%20Creek%20Wilderness!5e0!3m2!1sen!2sus!4v1641237264740!5m2!1sen!2sus",
      linkTo:
        "https://www.fs.usda.gov/recarea/mtnf/recarea/?recid=21764",
    },
    {
      name: "PineyCreek Wilderness",
      description: "Kind of near Galena",
      bestSeason: "Winter",
      personalExp: "Very easy to get lost out here",
      legend1: "Viewing of Table Rock Lake",
      legend2: "Somewhere in the wilderness",
      legend3: "Looks like summer time",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12795.234184852217!2d-93.6100099!3d36.7031383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe114f42700b002e3!2sPiney%20Creek%20Wilderness!5e0!3m2!1sen!2sus!4v1641237264740!5m2!1sen!2sus",
      linkTo:
        "https://www.fs.usda.gov/recarea/mtnf/recarea/?recid=21764",
    },
    {
      name: "PineyCreek Wilderness",
      description: "Kind of near Galena",
      bestSeason: "Winter",
      personalExp: "Very easy to get lost out here",
      legend1: "Viewing of Table Rock Lake",
      legend2: "Somewhere in the wilderness",
      legend3: "Looks like summer time",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12795.234184852217!2d-93.6100099!3d36.7031383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe114f42700b002e3!2sPiney%20Creek%20Wilderness!5e0!3m2!1sen!2sus!4v1641237264740!5m2!1sen!2sus",
      linkTo:
        "https://www.fs.usda.gov/recarea/mtnf/recarea/?recid=21764",
    },
  ];

  return (
    <div className="ui" style={{ backgroundColor: "white", color: "black" }}>
      <HikeHeader />
      <HikeNavigation />
      <div className="ui three column stackable grid very relaxed padded">
        <HikingTrails data={hikes} imgs={imgArray} />
        <HikeCarousel data={hikes} imgs={imgArray} />
        <HikeContent data={hikes} imgs={imgArray} />

      </div>

      <HikeFooter />
    </div>
  );
}

export default Hikes;
