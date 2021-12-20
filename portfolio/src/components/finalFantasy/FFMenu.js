import React from "react";
import GameSelect from "./FFGameSelect";
import JobSelect from "./FFJobSelect";
import GenderSelect from "./FFGenderSelect";
import RaceSelect from "./FFRaceSelect";
import ButtonGroup from "./FFButtonMenu";

//Menu component
export default function FFMenu() {
  return (
    <div id="ffBody">
      <div id="ffSearchTools" className="ui stackable segment container">
        <div className="ui container">
          <div
            id="inputContainer"
            className="ui icon input fluid"
            style={{ width: "100%" , marginLeft: "150px"}}
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
            <div className="title ffTitle" id="title" style={{fontSize: "1.3rem"}}>
              <i className="gem outline large icon"></i>
            </div>
            {/* Place components within this accordion */}
            <div className="content">
              <div className="transition hidden">
                <p id="ffP">
                  <GameSelect />
                  <JobSelect />
                  <RaceSelect />
                  <GenderSelect />
                </p>
                <ButtonGroup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
