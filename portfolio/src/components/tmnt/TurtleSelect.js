import React from "react";

//Turtle Select Group
function TurtleSelect() {
  return (
    <div>
      {/* <!--Display turtles--> */}
      <div id="turtleGroup" className="ui four column doubling stackable grid">
        <div
          id="leo"
          className="column leo"
          data-content="Add users to your feed"
        >
          <img className="turtle" src="img/tmnt/leo.png" alt={"Leonardo"} />
        </div>
        <div id="mike" className="column">
          <img
            className="turtle"
            src="img/tmnt/mike.png"
            alt={"Michaelangleo"}
          />
        </div>
        <div id="don" className="column">
          <img className="turtle" src="img/tmnt/don.png" alt={"Donatello"} />
        </div>
        <div id="raph" className="column">
          <img className="turtle" src="img/tmnt/raph.png" alt={"Raphael"} />
        </div>
      </div>
      {/* <!--End Turtle Display--> */}
    </div>
  );
}

export default TurtleSelect;
