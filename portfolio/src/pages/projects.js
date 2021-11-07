import React, {useEffect} from "react";
import Navigation from "../components/layout/Navigation";
import { useHistory } from 'react-router';

function Projects(props) {

  let history = useHistory();
  history.push("/projects");

  return (
    <div>
      <Navigation />

      <div className="ui" id="projects">
        <div className="ui divider"></div>
        <div className="ui link cards centered vertical" id="list"></div>
      </div>
    </div>
  );

  
}

export default Projects;
