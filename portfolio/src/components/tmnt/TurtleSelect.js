import React from 'react'

function TurtleSelect() {
    return (
        <div>
            {/* <!--Display turtles--> */}
      <div id="turtleGroup" className="ui four column doubling stackable grid">
        <div id="leo" className="column leo" data-content="Add users to your feed">
          <img className="turtle" src="img/tmnt/leo.png" />
        </div>
        <div id="mike" className="column">
          <img className="turtle"src="img/tmnt/mike.png"/>
        </div>
        <div id="don" className="column">
          <img className="turtle" src="img/tmnt/don.png"/>
        </div>
        <div id="raph" className="column">
          <img className="turtle"src="img/tmnt/raph.png"/>
        </div>
      </div>
      {/* <!--End Turtle Display--> */}
        </div>
    )
}

export default TurtleSelect
