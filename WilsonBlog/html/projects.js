let projects = [

  Pokemon = {
    img: "img/pokemonProject.JPG",
    href: "../../PokemonAPI/pokemon.html",
    name: "Pokedex API Call",
    meta: "Javascript, Bootstrap & Fomantic",
    desc: "Want to look at pokemon art and information about pokemon? Test this project out!.",
    created: "Crafted in September 2020. Reworked August 26th",
    github: "https://github.com/outofcontrolmike/MAWProjects/tree/master/PokemonAPI"  
},

GreatRace = {
    img: "img/greatrace1.JPG",
    href: "../../Great Race - JavaScript/race.html",
    name: "The Great Race",
    meta: "Javascript and Fomantic",
    desc: "A race between Yoshi and Mario. Who will win???",
    created: "Reworked October 2020",
    github: "https://github.com/outofcontrolmike/MAWProjects/tree/master/Great%20Race%20-%20JavaScript",  
},

SnesShopping = {
    img: "img/vueImage.JPG",
    href: "../../Vue-ShoppingCart/page.html",
    name: "Snes Shopping Cart",
    meta: "Vue & Fomantic",
    desc: "A basic shopping cart utlizing the core concepts of vue",
    created: "Reworked Early November 2020",
    github: "https://github.com/outofcontrolmike/MAWProjects/tree/master/Vue-ShoppingCart",  
},

BeastWars = {
    img: "img/beast.PNG",
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
    href: "../../EarthFireWater/main.php",
    name: "Earth Water Fire",
    meta: "PHP & Fomantic",
    desc: "A different theme of rock paper scissors, dealing with elements",
    created: "Wrote Feburary 14th 2021",
    github: "https://github.com/outofcontrolmike/MAWProjects/tree/master/EarthFireWater",  
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
    img: "img/bmi.JPG",
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
    img: "img/calc.JPG",
    href: "../../coolCalculator/index.html",
    name: "Cool Calculator",
    meta: "JS,Fomantic and Google Fonts",
    desc: "A flashy basic Calculator.",
    created: "Wrote May 3th 2021",
    github: "https://github.com/outofcontrolmike/MAWProjects/tree/master/coolCalculator",  
},

FF_Search = {
    img: "img/ff_search.JPG",
    href: "../../Final Fantasy Search/index.html",
    name: "Final Fantasy Search",
    meta: "JS,Fomantic and Google Fonts",
    desc: "A system for fetching Final Fantasy Characters and game information.",
    created: "Wrote June 28th 2021",
    github: "https://github.com/outofcontrolmike/MAWProjects/tree/master/Final%20Fantasy%20Search",  
},
FF_Search = {
    img: "img/characters.JPG",
    href: "../../characters/public/index.html",
    name: "Characters",
    meta: "React JS,Fomantic and Google Fonts",
    desc: "A system for fetching character information and custom character uploading",
    created: "Wrote September 18th 2021",
    github: "https://github.com/outofcontrolmike/MAWProjects/tree/master/characters",  
},
];

//Continue adding to above over time
//document.getElementById('list').append(projects);

projects.map(createProjectCard);    

function createProjectCard(project) {

   let container = document.createElement('div');
   container.className = "card";

   let imageContainer = document.createElement('div');
   imageContainer.className = "ui image medium";

   let projectLink = document.createElement('a');
    projectLink.href = project.href;
   
   let image = document.createElement('img');
   image.src = project.img;
    image.className = "ui image medium";
    projectLink.append(image);
    imageContainer.append(projectLink);

   let content = document.createElement('div');
   content.className = "content";

   let header = document.createElement('div');
   header.className = "header";
   header.innerHTML = project.name;

   let metaContainer = document.createElement('div');
   metaContainer.className = "meta";

   let metaInfo = document.createElement('p');
   metaInfo.innerHTML = project.meta;
   metaContainer.append(metaInfo);

   let descContainer = document.createElement('div');
   descContainer.className = "description";
   descContainer.innerHTML = project.desc;

   content.append(header,metaContainer,descContainer);

   let extraContent = document.createElement('div');
   extraContent.className = "extra content";

   let contentInfo = document.createElement('span');
   contentInfo.className = "right floated";
   contentInfo.innerHTML = project.created;

   let gitHub = document.createElement('span');
   let gitLink = document.createElement('a');
   let icon = document.createElement('i');
   icon.className = "github icon blue";
   gitLink.append(icon);
    gitHub.append(gitLink);

   gitLink.href = project.github;

   extraContent.append(contentInfo,gitHub);
   

   container.append(imageContainer,content,extraContent);
   document.getElementById('list').append(container);
}