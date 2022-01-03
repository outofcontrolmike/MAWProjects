//Hiking information in array (easy to loop through)

//Array of objects
let hikes = [
  {
    name: "Busiek State Forest",
    photos: ["test", "test2", "test3"],
    description: "yada yada yada",
    bestSeason: "Spring",
    personalExp: "I lost a lot of weight hiking this trail.",
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.147133743264!2d-93.23837038481076!3d36.86289687186768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf0da12ca8a9a3%3A0x74c5d4e47ac97d3f!2sBusiek%20State%20Forest%20and%20Wildlife%20Area!5e0!3m2!1sen!2sus!4v1641234844396!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    ),

    linkTo:
      "https://mdc.mo.gov/discover-nature/places/busiek-state-forest-wildlife-area",
  },
  {
    name: "Hercules Glades Wilderness",
    photos: ["test", "test2", "test3"],
    description: "Beautiful place in the ozarks",
    bestSeason: "Spring",
    personalExp: "I lost a lot of weight hiking this trail.",
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12801.066985318686!2d-92.9336978!3d36.668087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x410ef42846c917ef!2sHercules%20Glades%20Wilderness!5e0!3m2!1sen!2sus!4v1641237211284!5m2!1sen!2sus"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    ),
    linkTo:
      "https://mdc.mo.gov/discover-nature/places/busiek-state-forest-wildlife-area",
  },
  {
    name: "PineyCreek Wilderness",
    photos: ["test", "test2", "test3"],
    description: "Kind of near Galena",
    bestSeason: "Winter",
    personalExp: "Very easy to get lost out here",
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12795.234184852217!2d-93.6100099!3d36.7031383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe114f42700b002e3!2sPiney%20Creek%20Wilderness!5e0!3m2!1sen!2sus!4v1641237264740!5m2!1sen!2sus"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    ),
    linkTo:
      "https://mdc.mo.gov/discover-nature/places/busiek-state-forest-wildlife-area",
  },
  {
    name: "Two Rivers Mountain Bike Park",
    photos: ["test", "test2", "test3"],
    description: "very cool place to hike in Highlandville MO",
    bestSeason: "Fall/Winter/Spring",
    personalExp:
      "I grew up a few miles down the road from this place.  I think this place had a different owner when I was younger.  When you first pull in you'll think it's only a mountain bike park, but there is plenty of footwork to be explored when you walk towards the river.",
    map: "",
    linkTo:
      "https://mdc.mo.gov/discover-nature/places/busiek-state-forest-wildlife-area",
  },
];
