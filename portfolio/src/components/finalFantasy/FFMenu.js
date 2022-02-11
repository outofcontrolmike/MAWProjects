import React from "react";
import GameSelect from "./FFGameSelect";
import JobSelect from "./FFJobSelect";
import GenderSelect from "./FFGenderSelect";
import RaceSelect from "./FFRaceSelect";
import ButtonGroup from "./FFButtonMenu";

//Menu component
export default function FFMenu() {
  return (
    <div>
      <div id="ffSearchTools" className="ui stackable segment container">
        <div className="ui container">
          <div
            id="inputContainer"
            className="ui icon input fluid"
            style={{ width: "100%" }}
          >
            <input
              type="text"
              id="ffSearchInput"
              placeholder="Search...Character Name"
            />
          </div>
        </div>
        <div className="ui container">
          <div className="ui accordion" id="accordion">
            <div
              className="title ffTitle"
              id="title"
              style={{ fontSize: "1.3rem" }}
            >
              <i className="gem outline large icon"></i>
            </div>
            {/* Place components within this accordion */}
            <div className="content">
              <div className="transition hidden">
                <p id="ffP" style={{ textAlign: "center" }}>
                  <GameSelect />
                  <JobSelect />
                  <RaceSelect />
                  <GenderSelect />
                </p>
                <ButtonGroup />
                <hr id="ffSearchInput"></hr>
                <p id="ffP">
                  All Final Fantasy Info is sourced from{" "}
                  <a
                    id="ffA"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.moogleapi.com/"
                    style={{ color: "#2185d0" }}
                  >
                    Moogle API Project.{" "}
                  </a>
                  If you want to help more with the dataset information or add
                  any feedback, please reach out to them by following the link
                  above!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
