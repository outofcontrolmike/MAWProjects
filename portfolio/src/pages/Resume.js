import Navigation from "../components/layout/Navigation";
import { NavLink } from "react-router-dom";

import ResumeInfo from "../components/objects/ResumeInfo";
import Education from "../components/objects/Education";
import Skills from "./Skills";

//Resume Component
function Resume() {
  return (
    <div
      class="container fluid"
      style={{ backgroundColor: "black", height: "100vh" }}
    >
      <Navigation />
      <div
        className="ui two column doubling stackable grid very padded relaxed "
        id="about"
      >
        {/* End First column */}
        {/* Start 2nd column */}
        <div className="ui column padded">
          <ResumeInfo></ResumeInfo>
        </div>
        <div
          style={{ borderRight: "solid orange 2px" }}
          className="ui column"
          id="ResumeOptions"
        >
          <Education />
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default Resume;
