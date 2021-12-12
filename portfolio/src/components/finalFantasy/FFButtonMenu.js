import React from "react";

//Button group for advanced menu
export default function FFButtonMenu() {
  return (
    <div>

      <div className="ui two column grid stackable">

      <div className="ui column">
      <div className="ui stackable">
          <button
            id="advancedSearch"
            className="ui button large tertiary blue advancedSearch"
          >
            Fetch Characters
          </button>
          <button
      
            id="listGames"
            className="ui green button large tertiary"
          >
            List Games
          </button>
          <button
      
      id="random"
      className="ui teal button large tertiary"
    >
      Random Character
    </button>
        </div>
      </div>
    {/* end first button group */}
      <div className="ui column" style={{textAlign: "-webkit-right"}}>
      <div className=" ui stackable">
      <button id="clear" className="ui red tertiary button large">
            Clear List
          </button>
          <button id="reset" className="ui tertiary button large orange">
            Reset Filters
          </button>
          <a href="/projects">
            <button
              className="ui yellow button large tertiary"
            >
              Back to Projects
            </button>
          </a>
        </div>
      </div>
      </div>

      {/* container */}
    
    </div>
  );
}
