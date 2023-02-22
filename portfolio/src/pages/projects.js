import { event } from "jquery";
import React from "react";
import Navigation from "../components/layout/Navigation";
import { TabTitle } from "../utils/helperFunctions";

import ProjectCard from "../components/ProjectCard";

function Projects() {
  TabTitle("Projects");

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
      lastUpdated: " Updated: Nov 18th 2021",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/blob/master/portfolio/src/pages/projects/great_race/GreatRace.js",
    },

    {
      img: "../img/pokemonProject.JPG",
      href: "/pokemon",
      name: "Pokemon Viewer",
      meta: "Javascript, Bootstrap & Fomantic",
      desc: "Want to look at pokemon art and information about pokemon? Test this project out!.",
      created: "Created: September 2020",
      lastUpdated: " Updated: Dec 5th 2021",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/blob/master/portfolio/src/pages/projects/pokemon/Pokemon.js",
    },

    // {
    //   img: "img/vueImage.JPG",
    //   href: "/vue_shopping_cart",
    //   name: "Snes Shopping Cart",
    //   meta: "Vue & Fomantic",
    //   desc: "A basic shopping cart utlizing the core concepts of vue",
    //   created: "Reworked Early Nov 2020",
    //   github:
    //     "https://github.com/outofcontrolmike/MAWProjects/tree/master/Vue-ShoppingCart",
    // },

    {
      img: "img/beast.JPG",
      href: "/beastwars",
      name: "Beast Wars JS",
      meta: "Vanilla JS, Jquery & Fomantic UI",
      desc: "A Beast Wars web application that displays the 1st generation of transformers from the 90's TV series. Also includes sorting options for the characters.",
      created: "Created: Feb 6th 2021",
      lastUpdated: " Updated: Nov 14th 2021",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/blob/master/portfolio/src/pages/projects/beast_wars/BeastWars.js",
    },

    {
      img: "img/calc.JPG",
      href: "/cool_calc",
      name: "Cool Calculator",
      meta: "React,Fomantic",
      desc: "A flashy basic Calculator.",
      created: "Created: Feb 10th 2021",
      lastUpdated: " Updated: Nov 9th 2021",
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
      lastUpdated: " Updated: Nov 15th 2021",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/blob/master/portfolio/src/pages/projects/tmnt/Tmnt.js",
    },

    {
      img: "img/bmi.JPG",
      href: "/bmi",
      name: "BMI BMR Calculator",
      meta: "Javascript & Fomantic",
      desc: "A reference tool for determining BMI and BMR + Daily caloric Needs.",
      created: "Created: May 30th 2021",
      lastUpdated: "Updated: Dec 15th 2021",
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
      lastUpdated: " Updated: Dec 1st 2021",
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
      lastUpdated: " Updated: Dec 12th 2021",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/blob/master/portfolio/src/pages/projects/final_fantasy_search/FFSearch.js",
    },
    {
      img: "img/comments.PNG",
      href: "/comments",
      name: "Comments Feed",
      meta: "JS, Fomantic , Google Fire Base",
      desc: "Wanna leave a comment? Visit this project to leave me a comment. The comments are posted and fetched from a Google Firebase database.",
      created: "Created: July 10th 2021",
      lastUpdated: " Updated: Aug 21st 2022",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/blob/master/portfolio/src/pages/AllComments.js",
    },
    {
      img: "img/hikeProject.png",
      href: "/hikes",
      name: "Mikes Hikes Site",
      meta: "React JS,Fomantic and Google Fonts",
      desc: "Are you new to Springfield and happen to enjoy the outdoors? If so, check out this project that I made exclusively made for the Springfield area.",
      created: "Created: January 15th 2022",
      lastUpdated: " Updated: Feb 1st 2022",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/blob/master/portfolio/src/pages/projects/417Hikes/Hikes.js",
    },

    {
      img: "img/resProject.JPG",
      href: "/residentEvil",
      name: "Resident Evil Profile Viewer",
      meta: "React, Fomantic",
      desc: "This project provides information about Resident Evil characters that I am familiar with.  If you love profile information and character artwork, this is the project for you.",
      created: "Created: January 22nd 2022",
      lastUpdated: " Updated: Feb 25th 2022",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/blob/master/portfolio/src/pages/projects/residentevil/ResidentEvil.js",
    },
    {
      img: "img/timeline.JPG",
      href: "/timeline",
      name: "Timeline Positives",
      meta: "React, Fomantic",
      desc: "This project displays my current age and a positive for each year I've been alive.",
      created: "Created: January 23rd 2022",
      lastUpdated: " Updated: Feb 25th 2022",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/blob/master/portfolio/src/pages/projects/timeline/Timeline.js",
    },
    {
      img: "img/randomDogViewer.JPG",
      href: "/randomDogs",
      name: "Random Dog Viewer",
      meta: "React, Fomantic",
      desc: "This is an interaction with free API that provides images of random dogs.  If you love dogs, this is the project for you to view.",
      created: "Created: January 29th 2022",
      lastUpdated: " Updated: Feb 25th 2022",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/blob/master/portfolio/src/pages/projects/randomDogs/Dogs.js",
    },
    {
      img: "img/catsProject.PNG",
      href: "/cats",
      name: "Random Cat Facts",
      meta: "React, Fomantic",
      desc: "Do you love learning about random cat facts and also having the option to view breed information about cats?  Try this project out!",
      created: "Created: Feb 3rd 2022",
      lastUpdated: " Updated: Feb 25th 2022",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/blob/master/portfolio/src/pages/projects/catFacts/RandomCats.js",
    },
    {
      img: "img/jokesProject.JPG",
      href: "/jokes",
      name: "Random Jokes",
      meta: "React, Fomantic, Google Fonts",
      desc: "Need some free jokes that are contained within a easter theme?  Check this project out",
      created: "Created: Feb 26th 2022",
      lastUpdated: " Updated: Feb 26th 2022",
      github:
        "https://github.com/outofcontrolmike/MAWProjects/tree/master/portfolio/src/pages/projects/jokes",
    },
    {
      img: "img/scratch.PNG",
      href: "https://scratch.mit.edu/projects/706449690",
      name: "Scratch Project",
      meta: "Scratch, MIT.edu",
      desc: "An interactive story made with a learning platform named Scratch.  There's no coding involved but the platform offers users to use building blocks to create functionality for their projects.",
      created: "Created: June 22 2022",
      lastUpdated: " Updated: June 28th 2022",
      github:
        "https://github.com/me50/outofcontrolmike/blob/cs50/problems/2022/x/scratch/Wilson_M%20Scratch%20Project.sb3",
    },
    {
      img: "img/recipes.PNG",
      href: "https://github.com/outofcontrolmike/Community_Recipes",
      name: "Community Recipes",
      meta: "Cake PHP, Fomantic, Google Fonts",
      desc: "This project is still in BETA but is totally useable if you can run a cake php project on your local machine.  This project is a CMS based on Recipes and Users.",
      created: "Work in Progress since 2022",
      lastUpdated: " Updated: June 26th 2022",
      github: "https://github.com/outofcontrolmike/Community_Recipes",
    },
  ];

  projects.reverse();

  return (
    <div className="" style={{ height: "100vh", backgroundColor: "black" }}>
      <Navigation />
      <div className="ui " id="projects">
        <div
          className="ui cards five large link stackable"
          style={{ marginLeft: "1rem", marginRight: "1rem" }}
        >
          {projects.map((project) => (
            <ProjectCard data={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
