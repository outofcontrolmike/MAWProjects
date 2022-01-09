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
      location: "South of Ozark, MO",
      features: "Viewings of Ozark Mountains, wild flowers, wildlife, creeks and waterflow.  Camping is also available.",
      description: "This state forest features an East and a West side offering three different trails for each side.  The east side consists of the Red,Yellow, and Silver trails.  Red is most common and least difficult.  There are also three different parking areas that will start you at each trail head, but most people stick with the most north one (the red trail head).The West side also has a gun range along with three trails. These trails are marked as Purple, White and Orange.  This area has the more strenuous hikes but is more secluded. It's possible to combine all the trails into one, but you'd be looking at hiking around 8 or 9 miles</p>",
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
      location: "Kissee Mills, MO",
      features: "Wilderness area views that include glades, stream passings, countless trees, wildflowers. Wilderness Backpacking and car camping",
      description: "The Hercules Glades Wilderness is a 12,314-acre wilderness area in Taney County in the Ozarks of southwest Missouri. The United States Congress designated it a wilderness in 1976, making it the oldest wilderness area in Missouri",
      bestSeason: "Spring",
      personalExp: "This place is huge! The main attraction is The Falls area.  This is a great place to go if you want a hiking challenge.  The trails don't have the best markings or clean up, but that's what gives them the wilderness feel.  I highly recommend avoiding this place in the summer if you're not prepared to deal with bugs.",
      legend1: "The Falls",
      legend2: "Northern part of the wilderness",
      legend3: "Part of the glades",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12801.066985318686!2d-92.9336978!3d36.668087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x410ef42846c917ef!2sHercules%20Glades%20Wilderness!5e0!3m2!1sen!2sus!4v1641237211284!5m2!1sen!2sus",
      linkTo:
        "https://www.fs.usda.gov/recarea/mtnf/recarea/?recid=21754",
    },
    {
      name: "PineyCreek Wilderness",
      location: "Shell Knob, MO",
      features: "Wilderness area views that include glades, rock formations, wild flowers. Options to Backpack as well.",
      description: "The Piney Creek Wilderness is an 8,122-acre wilderness area in Missouri. The United States Congress designated it wilderness in 1980. The Piney Creek Wilderness is located within the Ava-Cassville-Willow Springs Ranger District of the Mark Twain National Forest, east of Cassville, Missouri.",
      bestSeason: "Winter/Spring",
      personalExp: "I've only been out to this area once but I really enjoyed it. It is easy to lose the trail you're following, so I recommend using All Trails app or some type of gps.  You won't see many other people out on trail, so it's perfect for solitude.",
      legend1: "Viewing of Table Rock Lake",
      legend2: "Somewhere in the wilderness",
      legend3: "Looks like summer time",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12795.234184852217!2d-93.6100099!3d36.7031383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe114f42700b002e3!2sPiney%20Creek%20Wilderness!5e0!3m2!1sen!2sus!4v1641237264740!5m2!1sen!2sus",
      linkTo:
        "https://www.fs.usda.gov/recarea/mtnf/recarea/?recid=21764",
    },
    {
      name: "Two Rivers Mountain Bike Park",
      location: "Highlandville, MO",
      features: "Mountain Biking Trails and hiking trails. It's possible to hike down towards the riverside and up to the top of the terrain.  Public Restrooms are also available.",
      description: "A purpose-built, multi-use trail system, Two Rivers Bike Park boasts 8.5 miles of near-pristine Ozarks terrain for mountain bikers, runners, and hikers.",
      bestSeason: "Fall/Winter/Spring",
      personalExp:
        "I grew up a few miles down the road from this place.  I think this place had a different owner when I was younger. When you first pull in you'll think it's only a mountain bike park, but there is plenty of footwork to be explored when you walk towards the river. If you go during the winter months and after a good rain you'll see lot of ice that glaze parts of the limestone",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3188.200666116713!2d-93.35636278480841!3d36.957264066542464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf6b99a091c567%3A0xe26e1bd83561f3f7!2sTwo%20Rivers%20Mountain%20Bike%20Park!5e0!3m2!1sen!2sus!4v1641237303981!5m2!1sen!2sus",
      linkTo:
        "https://mdc.mo.gov/discover-nature/places/busiek-state-forest-wildlife-area",
    },
    
    //Compton
    {
      name: "Compton",
      location: "North of Rogersville, MO",
      features: "Mainly a hunting ground that offers glades view",
      description: "This 840-acre area owned by the Missouri Department of Conservation is a mostly forested area that provides both hunting and nature-viewing opportunities.",
      bestSeason: "Fall",
      personalExp: "This is more of relaxing walking area.  You'll weave in and out of wooded areas into open plains area.",
      legend1: "Plains area",
      legend2: "A selfie look",
      legend3: "Basically what you'll see the whole hike",
      iframeSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31107.84329674982!2d-93.02218965152613!3d37.230523096087545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf873c64021d45%3A0xb04e1f12703f8c75!2sCompton%20Hollow%20Conservation%20Area!5e0!3m2!1sen!2sus!4v1641757051439!5m2!1sen!2sus",
      linkTo:
        "https://mdc.mo.gov/discover-nature/places/compton-hollow-conservation-area",
    },

    //Hening
    {
      name: "Ruth and Paul Henning Conservation Area",
      location: "Branson, MO",
      features: "Views of Ozark mountains, streams, wild flowers, lookout tower",
      description: "Ruth and Paul Henning Conservation Area is in the White River Hills of western Taney County on the west side of Branson. Much of this 1,534-acre area consists of steep hills covered with typical upland oak/hickory forest. The forest is interspersed with a series of scenic glades (open desert-like areas), which make up the White River Balds Natural Area.",
      bestSeason: "Spring/Fall",
      personalExp: "This is a little hidden gem west of Branson. I personally have seen lots of wildflowers and enjoyed the streams that I crossed. there are multiple trails that can be combined depending on how much you want to hike.",
      legend1: "Near the beginning of trail head",
      legend2: "Lookout tower view",
      legend3: "Near the northside parking",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12802.887018395724!2d-93.2958847!3d36.6571439!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb0fcf63f43127f8c!2sRuth%20and%20Paul%20Henning%20Conservation%20Area!5e0!3m2!1sen!2sus!4v1641757385571!5m2!1sen!2sus",
      linkTo:
        "https://mdc.mo.gov/discover-nature/places/ruth-paul-henning-conservation-area",
    },

    //Lake Spf
    {
      name: "Lake Springfield",
      location: "Springfield, MO",
      features: "Views of Springfield Lake, wild flowers.  Lake access and picnic areas.",
      description: "Lake Springfield Park offers 158 acres of rolling parkland, featuring trails, woods, bluffs and more than a mile of shoreline along beautiful Lake ...",
      bestSeason: "All",
      personalExp: "This is a great area to be active in during all seasons of the year. I've been to this place many times and haven't had any issues.  This is a bit on the easier side with around 2.5 miles worth of hiking",
      legend1: "Overview of Lake Springfield",
      legend2: "Back trail near pavilion area",
      legend3: "View of Lake Springfield Power Plant",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12726.183926452954!2d-93.26633046454297!3d37.11592362815406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf7ad2d900812f%3A0xf87cc8025a018829!2sLake%20Springfield%20Park%2C%20Springfield%2C%20MO%2065804!5e0!3m2!1sen!2sus!4v1641757541048!5m2!1sen!2sus",
      linkTo:
        "https://www.parkboard.org/255/Lake-Springfield-Park-and-Boathouse",
    },
    
    //Lost Hill park
    {
      name: "Lost Hill Park",
      location: "Springfield, MO",
      features: "Views of Wooded areas Dry sac Rivers. Greenway trail Accessability",
      description: "Lost Hill Park is a natural resource park boasting fields, wooded areas, with water features along the South Dry Sac River",
      bestSeason: "Fall/Winter/Spring",
      personalExp: "This place is amazing. It intersects with some of the Greenway Trails in Springfield.  Great for Hiking, Biking, Walking and a day swimming at the creek after springfield decides to flood.  It's possible to reach Ritter Springs Park but I recommend using a bike.",
      legend1: "After rain view",
      legend2: "Peace and quite on shared land",
      legend3: "Part of the Sac River",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.5860028184984!2d-93.30530758469648!3d37.281243179852204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c589b302e9a3e5%3A0xf8bb35741731ea94!2sLost%20Hill%20Park!5e0!3m2!1sen!2sus!4v1641758331890!5m2!1sen!2sus",
      linkTo:
        "https://www.parkboard.org/593/Lost-Hill-Park",
    },

    //Pleasant Hope
    {
      name: "Pleasant Hope Conservation Area",
      location: "Brighton, MO",
      features: "Wooded areas, plains and shooting range",
      description: "Pleasant Hope",
      bestSeason: "All except Summer",
      personalExp: "I had a decent time at this area.  It's very nice during the fall and lots of seclusion.",
      legend1: "Fall time near trail head",
      legend2: "A couple miles into the trail",
      legend3: "A turtle minding it's own business",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12672.17767982584!2d-93.3053398!3d37.4360554!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb520af5c9bbbb51e!2sPleasant%20Hope%20Conservation%20Area!5e0!3m2!1sen!2sus!4v1641758805916!5m2!1sen!2sus",
      linkTo:
        "https://mdc.mo.gov/discover-nature/places/pleasant-hope-conservation-area",
    },

    //Nature Center
    {
      name: "Springfield Nature Center",
      location: "Springfield, MO",
      features: "Visitor Center, Public Restrooms, Wooded Areas, Lake View, intersecting trails with Springfield Greenways.",
      description: "Nature trails with picnic areas & bird hides overlooking the lake, plus wildlife like deer & mink.",
      bestSeason: "All",
      personalExp: "I've been to this place probably over 100 times in the span of my life.  It's great for Hiking, Running, Walking, Wildlife Viewing.  You can see all sorts of different views every season. My only gripe is that it's in the city so you'll most likely hear the highway and be around a lot of people.",
      legend1: "View of Springfield Lake",
      legend2: "A long the long trail (2 miles)",
      legend3: "Small bridge view",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12724.16611548292!2d-93.2397846!3d37.127927!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe3e72fc61411a76!2sSpringfield%20Conservation%20Nature%20Center!5e0!3m2!1sen!2sus!4v1641759202961!5m2!1sen!2sus",
      linkTo:
        "https://mdc.mo.gov/discover-nature/places/springfield-conservation-nature-center",
    },

    //Valley Water Mill
    {
      name: "Valley Water Mill Park",
       location: "Springfield, MO",
      features: "Public Restrooms, Fishing areas, Watershed Center, Walking trails",
      description: "Located northeast of Springfield on Valley Water Mill Road, the park features a one-mile hiking trail around the lake and other in-park trails, water-and-stream side learning stations, outdoor classroom pavilion, fishing piers, maintenance center and Watershed Center of the Ozarks.",
      bestSeason: "All except Summer",
      personalExp: "I Personally enjoy this place.  It's less crowded than the Nature Center and does have a lot of informative information about the ecosystem along the trail.  You get to see a lot within 1.5 miles of hiking.",
      legend1: "Marsh type area",
      legend2: "View of the spring fed lake",
      legend3: "Some type of wild mushroom",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12701.60177039494!2d-93.2474959!3d37.2619303!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcac6462a7dfa8b4!2sValley%20Water%20Mill%20Park!5e0!3m2!1sen!2sus!4v1641759637763!5m2!1sen!2sus",
      linkTo:
        "https://www.parkboard.org/287/Valley-Water-Mill-Park",
    },

    //Wilson's Creek
    {
      name: "Wilson's Creek National Battlefield",
      location: "Republic, MO",
      features: "Public Restrooms, Visitor Center, Museum, Paved road with marked stops to see historical areas. Lots of detailed plaques that mark Civil War History.",
      description: "Wilson's Creek National Battlefield, located near Republic, Missouri, preserves the site of the Battle of Wilson's Creek. Fought on August 10, 1861, the battle was the first major American Civil War engagement west of the Mississippi River.",
      bestSeason: "Any",
      personalExp: "I will always love this area.  I usually park at the visitor center and then walk right into the park to avoid paying a car fee.  It's easy to spend a few hours exploring the trails and reading about civil war history.",
      legend1: "Some type of yellow wild flower",
      legend2: "A bridge located near Bloody Hill",
      legend3: "Cannon scenery",
      iframeSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17999.78694637862!2d-93.42809059203806!3d37.10647781495894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf6788e1996205%3A0x4e7770bdd9b962cb!2sBloody%20Hill!5e0!3m2!1sen!2sus!4v1641770368892!5m2!1sen!2sus",
      linkTo:
        "https://www.nps.gov/wicr/index.htm",
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
