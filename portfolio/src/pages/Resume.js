import Navigation from "../components/layout/Navigation";

import ResumeInfo from "../components/objects/ResumeInfo";
import Education from "../components/objects/Education";

//Resume Component
function Resume() {
  return (
    <div
      class="container"
      style={{ backgroundColor: "black", height: "100vh",  color: "white" }}
    >
      <Navigation />
      <div
        className="ui container"
      >
        {/* End First column */}
        {/* Start 2nd column */}
          <ResumeInfo></ResumeInfo>
        </div>
        <Education />

        {/* <div
          className="ui column"
          id="ResumeOptions"
        >
          <hr></hr>
        </div> */}
      </div>
  );
}

export default Resume;
