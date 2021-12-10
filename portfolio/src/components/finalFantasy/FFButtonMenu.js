import React from "react";

//Button group for advanced menu
export default function FFButtonMenu() {
  return (
    <div>
      <div className="ui container" style={{ marginTop: "10px;" }}>
        <div className="six ui buttons fluid stackable">
          <button
            id="advancedSearch"
            className="ui button medium blue advancedSearch"
          >
            Fetch Characters
          </button>
          <button id="reset" className="ui button medium orange">
            Reset Filters
          </button>
          <button
            style={{ float: "right" }}
            id="random"
            className="ui teal button medium"
          >
            Random Character
          </button>
          <button
            style={{ float: "right" }}
            id="listGames"
            className="ui green button medium"
          >
            List Games
          </button>
          <button id="clear" className="ui red button medium">
            Clear List
          </button>
          <a href="/projects" style={{ float: "right" }}>
            <button
              className="ui teal basic button"
              style={{ color: "", padding: "1rem" }}
            >
              Back to Projects
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
