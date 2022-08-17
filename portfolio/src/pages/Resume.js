import Navigation from "../components/layout/Navigation";

import ResumeInfo from "../components/objects/ResumeInfo";
import Education from "../components/objects/Education";

//Resume Component
function Resume() {
  return (

    <div
    class="ui container fluid"
    style={{ backgroundColor: "black", height: "100vh"}}
  >
    <Navigation />
    <br ></br>
    <br></br>

    <ResumeInfo />
    <Education />
  </div>


  );
}

export default Resume;
