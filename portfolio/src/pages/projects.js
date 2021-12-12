import React, { useEffect } from "react";
import Navigation from "../components/layout/Navigation";

function Projects(props) {
  //Fixes render issue - Function was mapping before the component rendered
  setTimeout(mapOver, 1);

  function mapOver() {
    document.getElementById("list").innerHTML = "";
    projects.map(createProjectCard);
  }
  //projects to map thorough
  let projects = [
    {
      img: "../img/pokemonProject.JPG",
      href: "/pokemon",
      name: "Pokedex API Call",
      meta: "Javascript, Bootstrap & Fomantic",
      desc: "Want to look at pokemon art and information about pokemon? Test this project out!.",
      created: "Crafted in September 2020. Reworked August December 12/5/2021",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/tree/master/PokemonAPI",
    },

    {
      img: "img/greatrace1.JPG",
      href: "/great_race",
      name: "The Great Race",
      meta: "React & Fomantic",
      desc: "A race between Yoshi and Mario. Who will win???",
      created: "Reworked November 2021",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/tree/master/Great%20Race%20-%20JavaScript",
    },

    {
      img: "img/vueImage.JPG",
      href: "/vue_shopping_cart",
      name: "Snes Shopping Cart",
      meta: "Vue & Fomantic",
      desc: "A basic shopping cart utlizing the core concepts of vue",
      created: "Reworked Early November 2020",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/tree/master/Vue-ShoppingCart",
    },

    {
      img: "img/beast.PNG",
      href: "/beastwars",
      name: "Beast Wars JS",
      meta: "Vanilla JS, Jquery & Fomantic UI",
      desc: "A Beast Wars web application that displays the 1st generation of transformers from the 90's TV series. Also includes sorting options for the characters.",
      created: "Created Feburary 6th 2021, reworte November 14th 2021",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/tree/master/BeastWars%20Js",
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

    {
      img: "img/EFW.JPG",
      href: "earth_water_fire",
      name: "Earth Water Fire",
      meta: "PHP & Fomantic",
      desc: "A different theme of rock paper scissors, dealing with elements",
      created: "Wrote Feburary 14th 2021",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/tree/master/EarthFireWater",
    },

    {
      img: "img/tmnt.JPG",
      href: "tmnt",
      name: "TMNT Character Select",
      meta: "Javascript & Fomantic",
      desc: "Heavily inspired by the Turtles in Time Character Select.",
      created: "Wrote May 3rd 2021" + " Re-wrote November 15th 2021",
      github:
        "https://github.com/outofcontrolmike/Javascript_IntroProjects/tree/main/TMNT_CharSelect",
    },

    {
      img: "img/bmi.JPG",
      href: "/bmi",
      name: "BMI BMR Calculator",
      meta: "Javascript & Fomantic",
      desc: "A reference tool for determing BMI and BMR + Daily caloric Needs.",
      created: "Wrote May 30th 2021",
      github:
        "https://github.com/outofcontrolmike/Javascript_IntroProjects/tree/main/bmi_bmr_stats",
    },

    {
      img: "img/breweries.JPG",
      href: "/breweries",
      name: "Brewery Listings",
      meta: "Javascript & Fomantic.. some React",
      desc: "A fun little project for listing breweries based on user needs.",
      created: "Wrote June 16th 2021" + "Re-wrote December 1st 2021",
      github:
        "https://github.com/outofcontrolmike/Javascript_IntroProjects/tree/main/brewery_Fetch",
    },

    {
      img: "img/calc.JPG",
      href: "/cool_calc",
      name: "Cool Calculator",
      meta: "React,Fomantic",
      desc: "A flashy basic Calculator.",
      created: "Rewrote November 9th 2021",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/tree/master/coolCalculator",
    },

    {
      img: "img/ff_search.JPG",
      href: "/ff_search",
      name: "Final Fantasy Search",
      meta: "JS,Fomantic and Google Fonts",
      desc: "A system for fetching Final Fantasy Characters and game information.",
      created: "Wrote June 28th 2021" + "rewrote: December 12th -2021",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/tree/master/Final%20Fantasy%20Search",
    },
    {
      img: "img/characters.JPG",
      href: "/characters",
      name: "Characters",
      meta: "React JS,Fomantic and Google Fonts",
      desc: "A system for fetching character information and custom character uploading",
      created: "Wrote September 18th 2021",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/tree/master/characters",
    },
  ];

  //Create Cards
  function createProjectCard(project) {
    let container = document.createElement("div");
    container.className = "card";

    let imageContainer = document.createElement("div");
    imageContainer.className = "ui image medium";

    let projectLink = document.createElement("a");
    projectLink.href = project.href;

    let image = document.createElement("img");
    image.src = project.img;
    image.className = "ui image medium";
    image.style.maxHeight = "135px";
    projectLink.append(image);
    imageContainer.append(projectLink);

    let content = document.createElement("div");
    content.className = "content";

    let header = document.createElement("div");
    header.className = "header";
    header.innerHTML = project.name;

    let metaContainer = document.createElement("div");
    metaContainer.className = "meta";

    let metaInfo = document.createElement("p");
    metaInfo.innerHTML = project.meta;
    metaContainer.append(metaInfo);

    let descContainer = document.createElement("div");
    descContainer.className = "description";
    descContainer.innerHTML = project.desc;

    content.append(header, metaContainer, descContainer);

    let extraContent = document.createElement("div");
    extraContent.className = "extra content";

    let contentInfo = document.createElement("span");
    contentInfo.className = "right floated";
    contentInfo.innerHTML = project.created;

    let gitHub = document.createElement("span");
    let gitLink = document.createElement("a");
    let icon = document.createElement("i");
    icon.className = "github icon blue";
    gitLink.append(icon);
    gitHub.append(gitLink);

    gitLink.href = project.github;

    extraContent.append(contentInfo, gitHub);

    container.append(imageContainer, content, extraContent);
    console.log("gitLink", gitHub);
    document.getElementById("list").append(container);
  }

  return (
    <div>
      <Navigation />

      <div className="ui" id="projects">
        <div className="ui divider"></div>
        <div className="ui link cards centered vertical" id="list"></div>
      </div>
    </div>
  );
}

export default Projects;
