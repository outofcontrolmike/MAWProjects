let projects = [

  Pokemon = {
    img: "img/pokemon.JPG",
    href: "../../PokemonAPI/pokemon.html",
    name: "Pokedex API Call",
    meta: "Javascript, Bootstrap & Fomantic",
    desc: "Want to look at pokemon art and information about pokemon? Test this project out!.",
    created: "Crafted in September 2020",
    github: "https://github.com/outofcontrolmike/MAWProjects/tree/master/PokemonAPI"  
},

GreatRace = {
    img: "img/greatrace1.JPG",
    href: "../../Great Race - Javascript/race.html",
    name: "The Great Race",
    meta: "Javascript and Fomantic",
    desc: "A race between Yoshi and Mario. Who will win???",
    created: "Reworked October 2020",
    github: "https://github.com/outofcontrolmike/MAWProjects/tree/master/Great%20Race%20-%20JavaScript",  
},

SnesShopping = {
    img: "img/vue_shoppingcart.JPG",
    href: "../../Vue-ShoppingCart/page.html",
    name: "Snes Shopping Cart",
    meta: "Vue & Fomantic",
    desc: "A basic shopping cart utlizing the core concepts of vue",
    created: "Reworked Early November 2020",
    github: "https://github.com/outofcontrolmike/MAWProjects/tree/master/Vue-ShoppingCart",  
},

BeastWars = {
    img: "img/beat.PNG",
    href: "../../BeastWars Js/home.html",
    name: "Beast Wars JS",
    meta: "Vanilla JS, Jquery & Fomantic UI",
    desc: "A Beast Wars web application that displays the 1st generation of transformers from the 90's TV series. Also includes sorting options for the characters.",
    created: "Created Feburary 6th 2021",
    github: "https://github.com/outofcontrolmike/MAWProjects/tree/master/BeastWars%20Js",  
},

FinalFantasyXML = {
    img: "img/ffXML.jpg",
    href: "../../XML Project/index.html",
    name: "Final Fantasy XML",
    meta: "XML and JS",
    desc: "A project I created around summer 2019.  Tried experimenting with XML and XSL styling.",
    created: "Reworked Feburary 9th 2021",
    github: "https://github.com/outofcontrolmike/MAWProjects/tree/master/XML%20Project",  
},

EarthWaterFire = {
    img: "img/EFW.JPG",
    href: "../../EarthWaterFire/main.php",
    name: "",
    meta: "",
    desc: "",
    created: "",
    github: "",  
},

Tmnt = {
    img: "img/tmnt.JPG",
    href: "../../TMNT_CharSelect/index.html",
    name: "TMNT Character Select",
    meta: "Javascript & Fomantic",
    desc: "Heavily inspired by the Turtles in Time Character Select.",
    created: "Wrote May 3rd 2021",
    github: "https://github.com/outofcontrolmike/Javascript_IntroProjects/tree/main/TMNT_CharSelect",  
},

 Bmi = {
    img: "img/bmr.JPG",
    href: "../../bmi_bmr_stats/index.html",
    name: "BMI BMR Calculator",
    meta: "Javascript & Fomantic",
    desc: "A reference tool for determing BMI and BMR + Daily caloric Needs.",
    created: "Wrote May 30th 2021",
    github: "https://github.com/outofcontrolmike/Javascript_IntroProjects/tree/main/bmi_bmr_stats",  
},

Brewery = {
    img: "img/breweries.JPG",
    href: "../../brewery_Fetch/index.html",
    name: "Brewery Listing API",
    meta: "Javascript & Fomantic",
    desc: "A fun little project for listing breweries based on user needs.",
    created: "Wrote June 16th 2021",
    github: "https://github.com/outofcontrolmike/Javascript_IntroProjects/tree/main/brewery_Fetch",  
},

Calc = {
    img: "coolCalc.JPG",
    href: "../../coolCalculator/index.html",
    name: "Cool Calculator",
    meta: "JS,Fomantic and Google Fonts",
    desc: "A flashy basic Calculator.",
    created: "Wrote May 3th 2021",
    github: "https://github.com/outofcontrolmike/MAWProjects/tree/master/coolCalculator",  
},

FF_Search = {
    img: "ff_search.JPG",
    href: "../../Final Fantasy Search/index.html",
    name: "Cool Calculator",
    meta: "JS,Fomantic and Google Fonts",
    desc: "A flashy basic Calculator.",
    created: "Wrote May 3th 2021",
    github: "https://github.com/outofcontrolmike/MAWProjects/tree/master/coolCalculator",  
},
];

//Continue adding to above over time


console.log(projects);
document.getElementById('list').append(projects);
projects.map(createProjectCard());

function createProjectCard() {

}