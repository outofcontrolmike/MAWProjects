import { event } from "jquery";
import React from "react";
import Navigation from "../components/layout/Navigation";
import { TabTitle } from "../utils/helperFunctions";

//Project's information to display
function Contracts(props) {
TabTitle("Contracts");
  //Fixes render issue - Function was mapping before the component rendered
  setTimeout(mapOver, 2);

  function mapOver() {
    document.getElementById("contractList").innerHTML = "";
    projects.reverse();
    projects.map(createProjectCard);
  }

  //Projects to map through
  let projects = [
    //Contracts
    {
      img: "img/clients/fisher.PNG",
      href: "https://www.fisherprotectionservices.com",
      name: "Fisher Protection Services",
      meta: "Register.com's Website builder",
      desc: "This is a project that I'm currently working on for a client. It's mostly an informative site for a Security Service Business.",
      created: "Current",
      lastUpdated: " Updated: Nov 18th 2021",
      github: "null",
    },
    {
      img: "img/clients/ss&b.png",
      href: "https://www.ssbhc.com",
      name: "SS&B Heating & Cooling",
      meta: "Next JS, Typescript, Sanity.IO Bootstrap",
      desc: "This is a client I've helped fix SEO Issues for and Consult for as well.  I Currently Contract for them.",
      created: "Current",
      lastUpdated: " Updated: Nov 18th 2021",
      github: "null",
    },

    // End Contracts
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
    image.className = "ui image big projectImage";
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
    createdDate.className = "description";
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
    icon.className = "github icon black";
    gitLink.append(icon);
    gitLink.href = project.github;

    gitHub.append(gitLink);

    extraContent.append(contentInfo, gitHub);

    container.append(imageContainer, content, extraContent);

    document.getElementById("contractList").append(container);
  }

  return (
    <div className="" style={{ height: "100vh", backgroundColor: "black" }}>
      <Navigation />

      <div className="ui very padded relaxed grid" id="projects">
        <div
          className="ui cards centered five medium horizontal link"
          id="contractList"
          style={{ marginLeft: "1rem", marginRight: "1rem" }}
        ></div>
      </div>
    </div>
  );
}

export default Contracts;
