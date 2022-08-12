import Navigation from "../components/layout/Navigation";
import { NavLink } from "react-router-dom";

import ResumeInfo from "../components/objects/ResumeInfo";
import Education from "../components/objects/Education";
import Skills from "../components/objects/Skills";

//Resume Component
function Resume() {
  return (
    <div
      class="container fluid"
      style={{ backgroundColor: "black", height: window.innerHeight }}
    >
      <Navigation />
      <div
        className="ui two column doubling stackable grid very padded relaxed "
        id="about"
      >
        <div className="ui column" id="ResumeOptions">
          <h1>Resume</h1>
          <h1>Education</h1>
          <h1>Skills</h1>
        </div>
        {/* End First column */}
        {/* Start 2nd column */}
        <div className="ui column padded">
          <ResumeInfo></ResumeInfo>
        </div>
      </div>
    </div>
  );
}

export default Resume;
