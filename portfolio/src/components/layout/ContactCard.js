import React from "react";

//Contact Card component
export default function ContactCard() {
  return (
    <div className="ui card container" id="contactCard">
      <div className="content">
        <div className="center aligned description">
          <p style={{ color: "orange" }}>Email: michaelwilsona2019@gmail.com</p>
        </div>
      </div>
      <div className="extra content">
        <div className="center aligned author">
          <a
            id="aboutLink"
            href="https://github.com/outofcontrolmike/MAWProjects"
            target="_blank"
          >
            <img
              className="ui avatar image massive"
              src="img/GitHub-Mark.png"
            />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/michael-wilson-6a2a5b18a/"
            target="_blank"
          >
            <img
              id="aboutAvatar"
              className="ui avatar image massive"
              src="img/linkedin.png"
              style={{ backgroundColor: "white" }}
            />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
