import Navigation from "../components/layout/Navigation";

import ResumeInfo from "../components/objects/ResumeInfo";
import Education from "../components/objects/Education";
import { TabTitle } from "../utils/helperFunctions";

//Resume Component
function Resume() {
  TabTitle("Resume");
  
  return (
    <div
      class="ui container fluid"
      style={{ backgroundColor: "black", height: "100vh" }}
    >
      <Navigation />
      <br></br>

      <ResumeInfo />
      <Education />
    </div>
  );
}

export default Resume;
