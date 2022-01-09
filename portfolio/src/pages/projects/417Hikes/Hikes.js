import React from "react";
import HikeCarousel from "../../../components/hikes/HikeCarousel";
import HikeContent from "../../../components/hikes/HikeContent";
import HikeFooter from "../../../components/hikes/HikeFooter";
import HikeHeader from "../../../components/hikes/HikeHeader";
import HikeNavigation from "../../../components/hikes/HikeNavigation";
import HikingTrails from "../../../components/hikes/HikingTrails";

function Hikes(props) {

  let imgArray = new Array()
  let count = 50;

  //Create array indexes for images
  for (let i = 0; i <= count; i++) {
    imgArray[i] = new Image();
  }

  //hercules glades
  imgArray[0].src = "img/hikes/herculesGlades.jpg";
  imgArray[1].src = "img/hikes/herculesglades2.jpg";
  imgArray[2].src = "img/hikes/herculesGlades3.jpg";

  //busiek
  imgArray[3].src = "img/hikes/busiek1.jpg";
  imgArray[4].src = "img/hikes/busiek2.jpg";
  imgArray[5].src = "img/hikes/busiek3.jpg";

  //piney
  imgArray[6].src = "img/hikes/piney1.jpg";
  imgArray[7].src = "img/hikes/piney2.jpg";
  imgArray[8].src = "img/hikes/piney3.jpeg";

  //compton
  imgArray[9].src = "img/hikes/compton1.jpg";
  imgArray[10].src = "img/hikes/compton2.jpg";
  imgArray[11].src = "img/hikes/compton3.jpg";

  //hening
  imgArray[12].src = "img/hikes/hening1.jpg";
  imgArray[13].src = "img/hikes/hening2.jpg";
  imgArray[14].src = "img/hikes/hening3.jpg";

  //lake spf
  imgArray[15].src = "img/hikes/lakeSpf1.jpg";
  imgArray[16].src = "img/hikes/lakeSpf2.jpg";
  imgArray[17].src = "img/hikes/lakeSpf3.jpg";

  //lost hill
  imgArray[18].src = "img/hikes/lost1.jpg";
  imgArray[19].src = "img/hikes/lost2.jpg";
  imgArray[20].src = "img/hikes/lost3.jpg";

  //pleasant hope
  imgArray[21].src = "img/hikes/pleasant1.jpg";
  imgArray[22].src = "img/hikes/pleasant2.jpg";
  imgArray[23].src = "img/hikes/pleasant3.jpg";
  
  //nature center
  imgArray[24].src = "img/hikes/natureCenter1.jpg";
  imgArray[25].src = "img/hikes/natureCenter2.jpg";
  imgArray[26].src = "img/hikes/natureCenter3.jpg";

  //twoRivers
  imgArray[27].src = "img/hikes/twoRivers1.jpg";
  imgArray[28].src = "img/hikes/twoRivers2.jpg";
  imgArray[29].src = "img/hikes/twoRivers3.jpg";

  
  //valley water mill
  imgArray[30].src = "img/hikes/valley1.jpg";
  imgArray[31].src = "img/hikes/valley2.jpg";
  imgArray[32].src = "img/hikes/valley3.jpg";

   //wilson's creek
   imgArray[33].src = "img/hikes/wilson1.jpg";
   imgArray[34].src = "img/hikes/wilson2.jpg";
   imgArray[35].src = "img/hikes/wilson3.jpg";

  //array of hikes
  let hikes = [
    {
      name: "Busiek State Forest",
      description: "This area is located between Ozark and Branson.  It features a East and a West side offering three different trails for each side.  The east side consists of the Red,Yellow, and Silver trails.  Red is most common and least difficult.  There are also three different parking areas that will start you at each trail head, but most people stick with the most north one (the red trail head).  This trali offers many viewings of ozark mountains, wild flowers, wildlife, creeks, and small waterfalls if you go after a good rain. <p>The West side also has a gun range along with three trails.  These trails are marked as Purple, White and Orange.  This area has the more strenous hikes but is more secluded. It's possible to combine all the trails into one, but you'd be looking at hiking around 8 or 9 miles</p>",
      bestSeason: "Spring/Fall",
      personalExp: "I've had a lot of fun exploring all the trails at this area and have helped direct people at times.  I really enjoy the trails after a good rain or on a snowy day.  I don't recommend going during the summer.",
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
