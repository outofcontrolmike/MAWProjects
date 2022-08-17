import Navigation from "../components/layout/Navigation";

import ResumeInfo from "../components/objects/ResumeInfo";
import Education from "../components/objects/Education";

//Resume Component
function Resume() {
  return (
    <div
      class="ui container fluid  inverted"
      id="resumePage"
      style={{ backgroundColor: "black", height: "100vh", color: "white" }}
    >
      <Navigation />
      <br></br>
      <div className="ui container segment inverted">
        {/* End First column */}
        {/* Start 2nd column */}
        <ResumeInfo></ResumeInfo>
      </div>
      <br></br>
      <div className="ui container fluid" style={{ backgroundColor: "black" }}>
        <Education />
      </div>

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
