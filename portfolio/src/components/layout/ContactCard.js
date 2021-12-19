import React from "react";

export default function ContactCard() {
  return (
    <div className="ui card container" id="contactCard">
      <div className="content">
        <h1
          className="center aligned header text ui orange"
          style={{ color: "orange" }}
        >
          <b>Michael A. Wilson</b>
        </h1>
        <div className="center aligned description">
          <p>Email: michaelwilsona2019@gmail.com</p>
        </div>
      </div>
      <div className="extra content">
        <div className="center aligned author">
          <a
            id="aboutLink"
            href="https://github.com/outofcontrolmike/MAWProjects"
          >
            <img
              className="ui avatar image massive"
              src="img/GitHub-Mark.png"
            />{" "}
          </a>
          <a href="https://www.linkedin.com/in/michael-wilson-6a2a5b18a/">
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
