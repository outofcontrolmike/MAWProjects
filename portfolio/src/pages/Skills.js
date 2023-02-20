import Navigation from "../components/layout/Navigation";
import picture from "../assets/img/codeIcon.png";
import { TabTitle } from "../utils/helperFunctions";

function Skills() {

  TabTitle("Skills")
  return (
    <div
      className="ui row"
      style={{
        backgroundColor: "black",
        height: "100vh",
      }}
    >
      <Navigation />
      <div
        className="ui container fluid center aligned"
        style={{ backgroundColor: "black" }}
      >
        <br></br>
        <br></br>
        <div className="ui three column stackable grid very padded relaxed">
          <div className="ui column" style={{ alignSelf: "center" }}>
            <p style={{ paddingBottom: "10px" }}>
              <span className="ui text orange big">Daily Tools</span>
            </p>{" "}
            <div className="ui list resumeList">
              <span
                data-tooltip="HTML 5"
                data-inverted=""
                data-variation="small"
                data-position="left center"
              >
                <i className=" huge html5 icon"></i>
              </span>
              <span
                data-tooltip="CSS 3"
                data-inverted=""
                data-variation="small"
                data-position="top center"
              >
                <i className=" huge css3 icon"></i>
              </span>

              <span
                data-tooltip="Vanilla Javascript"
                data-inverted=""
                data-variation="small"
                data-position="top center"
              >
                <i className=" huge js icon"></i>
              </span>

              <span
                data-tooltip="React Javascript"
                data-inverted=""
                data-variation="small"
                data-position="right center"
              >
                <i className=" huge react icon"></i>
              </span>

              <div className="ui list resumeList">
                <span
                  data-tooltip="Node Package Manager"
                  data-inverted=""
                  data-variation="small"
                  data-position="bottom center"
                >
                  <i className=" huge npm icon"></i>
                </span>

                <span
                  data-tooltip="Github / GitLab"
                  data-inverted=""
                  data-variation="small"
                  data-position="right center"
                >
                  <i className=" huge github icon"></i>
                </span>
              </div>
              <div className="ui list resumeList">
                <span
                  data-tooltip="Windows"
                  data-inverted=""
                  data-variation="small"
                  data-position="left center"
                >
                  <i className=" huge windows icon"></i>
                </span>
              </div>
            </div>
          </div>
          <div
            className="ui column"
            id="codeIcon"
            style={{ alignSelf: "center" }}
          >
            <img
              className="ui image small centered rounded"
              style={{ color: "white" }}
              alt={"Me"}
              src={picture}
            ></img>
          </div>
          <div className="ui column">
            <p style={{ paddingBottom: "10px" }}>
              <span className="ui text orange big">Knowledgeable</span>
            </p>{" "}
            <div className="ui list resumeList">
              <span
                data-tooltip="Python"
                data-inverted=""
                data-variation="small"
                data-position="left center"
              >
                <i className=" huge python icon"></i>
              </span>

              <span
                data-tooltip="Java"
                data-inverted=""
                data-variation="small"
                data-position="top center"
              >
                <i className=" huge java icon"></i>
              </span>

              <span
                data-tooltip="Php"
                data-inverted=""
                data-variation="small"
                data-position="top center"
              >
                <i className=" huge php icon"></i>
              </span>

              <span
                data-tooltip="My SQL"
                data-inverted=""
                data-variation="small"
                data-position="right center"
              >
                <i className="database icon huge"></i>
              </span>
            </div>
            <div className="ui list resumeList">
              <span
                data-tooltip="Linux - Ubuntu"
                data-inverted=""
                data-variation="small"
                data-position="left center"
              >
                <i className=" huge ubuntu icon"></i>
              </span>

              <span
                data-tooltip="Command Line"
                data-inverted=""
                data-variation="small"
                data-position="bottom center"
              >
                <i className=" huge terminal icon"></i>
              </span>

              <span
                data-tooltip="Bootstrap CSS"
                data-inverted=""
                data-variation="small"
                data-position="right center"
              >
                <i className="bootstrap icon huge"></i>
              </span>
            </div>
            <div className="ui list resumeList">
              <span
                data-tooltip="Word Processing"
                data-inverted=""
                data-variation="small"
                data-position="left center"
              >
                <i className="word file icon huge"></i>
              </span>
              <span
                data-tooltip="Spreadsheets"
                data-inverted=""
                data-variation="small"
                data-position="right center"
              >
                <i className="file excel icon huge"></i>
              </span>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>

        {/* <hr style={{ borderColor: "" }}></hr> */}
        <br></br>
        <br></br>
        <br></br>
        <div
          className="ui row"
          style={{ alignSelf: "center", backgroundColor: "black" }}
        >
          <br></br>
          <p>
            <span className="ui text orange big">Certifications</span>
          </p>
          <br></br>
          <div className="ui images large">
            <div className="ui slide masked reveal image">
              <div className="visible content" id="resumeVisible">
                <h1 className="mainPageh1">HTML & CSS</h1>
              </div>

              <a
                target="blank_self"
                className="hidden content"
                href="img/pdfs/Michael_Wilson_MTA - HTML_CSS.pdf"
              >
                <img src="img/html.png" alt={"html Certification"} />
              </a>
            </div>

            <div className="ui slide masked reveal image">
              <div className="visible content" id="resumeVisible">
                <h1 className="mainPageh1">Javascript</h1>
              </div>
              <a
                className="hidden content slideImage"
                href="img/pdfs/Michael_Wilson_MTA - Programming_Javascript.pdf"
              >
                <img
                  className="slideImage"
                  src="img/javascript.JPG"
                  alt={"Javascript Certification"}
                />
              </a>
            </div>

            <div className="ui slide masked reveal image">
              <div className="visible content" id="resumeVisible">
                <h1 className="mainPageh1">SQL</h1>
              </div>
              <a
                className="hidden content"
                href="img/pdfs/Michael_Wilson_MTA_Database_Administration_Fundmentals.pdf"
              >
                <img
                  className=""
                  src="img/database.JPG"
                  alt={"SQL Certification"}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
