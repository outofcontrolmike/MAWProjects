import React, { useEffect } from "react";
import Navigation from "../components/layout/Navigation";

//Project's information to display
function Projects(props) {
  //Fixes render issue - Function was mapping before the component rendered
  setTimeout(mapOver, 1);

  function mapOver() {
    document.getElementById("list").innerHTML = "";
    projects.reverse();
    projects.map(createProjectCard);
  }

  //Projects to map through
  let projects = [
    {
      img: "img/greatrace1.JPG",
      href: "/great_race",
      name: "The Great Race",
      meta: "React & Fomantic",
      desc:
        "A race between Yoshi and Mario. Who will win???" +
        "<b> Fair warning</b>, this project is not supposed to be mobile friendly.",
      created: "Created: Spring 2018",
      lastUpdated: "Last Updated: November 18th 2021",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/blob/master/portfolio/src/pages/projects/great_race/GreatRace.js",
    },

    {
      img: "../img/pokemonProject.JPG",
      href: "/pokemon",
      name: "Pokedex API Call",
      meta: "Javascript, Bootstrap & Fomantic",
      desc: "Want to look at pokemon art and information about pokemon? Test this project out!.",
      created: "Created: September 2020",
      lastUpdated: "Last Updated: December 5th 2021",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/blob/master/portfolio/src/pages/projects/pokemon/Pokemon.js",
    },

    // {
    //   img: "img/vueImage.JPG",
    //   href: "/vue_shopping_cart",
    //   name: "Snes Shopping Cart",
    //   meta: "Vue & Fomantic",
    //   desc: "A basic shopping cart utlizing the core concepts of vue",
    //   created: "Reworked Early November 2020",
    //   github:
    //     "https://github.com/outofcontrolmike/MAWProjects/tree/master/Vue-ShoppingCart",
    // },

    {
      img: "img/beast.JPG",
      href: "/beastwars",
      name: "Beast Wars JS",
      meta: "Vanilla JS, Jquery & Fomantic UI",
      desc: "A Beast Wars web application that displays the 1st generation of transformers from the 90's TV series. Also includes sorting options for the characters.",
      created: "Created: Feburary 6th 2021",
      lastUpdated: "Last Updated: November 14th 2021",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/blob/master/portfolio/src/pages/projects/beast_wars/BeastWars.js",
    },

    {
      img: "img/calc.JPG",
      href: "/cool_calc",
      name: "Cool Calculator",
      meta: "React,Fomantic",
      desc: "A flashy basic Calculator.",
      created: "Created: Feburary 10th 2021",
      lastUpdated: "Last Updated: November 9th 2021",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/blob/master/portfolio/src/pages/projects/cool_calc/CoolCalc.js",
    },

    // {
    //   img: "img/ffXML.jpg",
    //   href: "../../XML Project/index.html",
    //   name: "Final Fantasy XML",
    //   meta: "XML and JS",
    //   desc: "A project I created around summer 2019.  Tried experimenting with XML and XSL styling.",
    //   created: "Reworked Feburary 9th 2021",
    //   github:
    //     "https://github.com/outofcontrolmike/MAWProjects/tree/master/XML%20Project",
    // },

    // {
    //   img: "img/EFW.JPG",
    //   href: "earth_water_fire",
    //   name: "Earth Water Fire",
    //   meta: "PHP & Fomantic",
    //   desc: "A different theme of rock paper scissors, dealing with elements",
    //   created: "Wrote Feburary 14th 2021",
    //   github:
    //     "https://github.com/outofcontrolmike/MAWProjects/tree/master/EarthFireWater",
    // },

    {
      img: "img/tmnt.JPG",
      href: "tmnt",
      name: "TMNT Character Select",
      meta: "Javascript & Fomantic",
      desc: "Heavily inspired by the Turtles in Time Character Select.",
      created: "Created: May 3rd 2021",
      lastUpdated: "Last Updated: November 15th 2021",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/blob/master/portfolio/src/pages/projects/tmnt/Tmnt.js",
    },

    {
      img: "img/bmi.JPG",
      href: "/bmi",
      name: "BMI BMR Calculator",
      meta: "Javascript & Fomantic",
      desc: "A reference tool for determing BMI and BMR + Daily caloric Needs.",
      created: "Created: May 30th 2021",
      lastUpdated: "Last updated: December 15th 2021",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/blob/master/portfolio/src/pages/projects/bmi_calc/Bmi.js",
    },

    {
      img: "img/breweries.JPG",
      href: "/breweries",
      name: "Brewery Listings",
      meta: "Javascript & Fomantic.. some React",
      desc: "A fun little project for listing breweries based on user needs.",
      created: "Created: June 16th 2021",
      lastUpdated: "Last Updated: December 1st 2021",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/blob/master/portfolio/src/pages/projects/breweries/Brewery.js",
    },

    {
      img: "img/ff_search.JPG",
      href: "/ff_search",
      name: "Final Fantasy Search",
      meta: "JS,Fomantic and Google Fonts",
      desc: "A system for fetching Final Fantasy Characters and game information.",
      created: "Created: June 28th 2021",
      lastUpdated: "Last Updated: December 12th 2021",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/blob/master/portfolio/src/pages/projects/final_fantasy_search/FFSearch.js",
    },
    // {
    //   img: "img/characters.JPG",
    //   href: "/characters",
    //   name: "Characters",
    //   meta: "React JS,Fomantic and Google Fonts",
    //   desc: "A system for fetching character information and custom character uploading",
    //   created: "Wrote September 18th 2021",
    //   github:
    //     "https://github.com/outofcontrolmike/MAWProjects/tree/master/characters",
    // },
  ];

  //Create Cards
  function createProjectCard(project) {
    let container = document.createElement("div");
    container.className = "card projectCard";

    let imageContainer = document.createElement("div");
    imageContainer.className = "";

    let projectLink = document.createElement("a");
    projectLink.href = project.href;

    let image = document.createElement("img");
    image.src = project.img;
    image.className = "ui image large projectImage";
    projectLink.append(image);
    imageContainer.append(projectLink);

    let content = document.createElement("div");
    content.className = "content";

    let header = document.createElement("div");
    header.className = "header";
    header.innerHTML = project.name;

    let metaContainer = document.createElement("div");

    let metaInfo = document.createElement("p");
    metaInfo.innerHTML = project.meta;
    metaContainer.append(metaInfo);
    metaContainer.setAttribute("id", "projectMeta");

    let descContainer = document.createElement("div");
    descContainer.className = "description";
    descContainer.innerHTML = project.desc;

    let createdDate = document.createElement("div");
    createdDate.classname = "description";
    createdDate.innerHTML = project.created;
    createdDate.style.paddingTop = "10px";
    createdDate.style.fontWeight = "bolder";
    createdDate.style.color = "black";

    let br = document.createElement("br");

    content.append(header, metaContainer, br, descContainer, createdDate);

    let extraContent = document.createElement("div");
    extraContent.className = "extra content";

    let contentInfo = document.createElement("span");
    contentInfo.className = "right floated";
    contentInfo.innerHTML = project.lastUpdated;

    let gitHub = document.createElement("span");
    let gitLink = document.createElement("a");

    let icon = document.createElement("i");
    icon.className = "github icon orange";
    gitLink.append(icon);
    gitHub.append(gitLink);

    gitLink.href = project.github;

    extraContent.append(contentInfo, gitHub);

    container.append(imageContainer, content, extraContent);
    document.getElementById("list").append(container);
  }

  return (
    <div>
      <Navigation />

      <div className="ui" id="projects">
        <div
          className="ui cards centered four horizontal"
          id="list"
          style={{ marginLeft: "1rem", marginRight: "1rem" }}
        ></div>
      </div>
    </div>
  );
}

export default Projects;
