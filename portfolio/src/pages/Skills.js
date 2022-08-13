import Navigation from "../components/layout/Navigation";
function Skills() {
  return (
    <div
      style={{
        height: window.innerHeight,
        backgroundColor: "black",
      }}
    >
      <Navigation />
      <div className="ui container fluid center aligned" id="techStack">
        <div className="ui two column stackable grid very padded relaxed">
          <div className="ui column" style={{ alignSelf: "center" }}>
            <h1 style={{ color: "orange" }}>Daily Tools</h1>
            <div className="ui list resumeList">
              <i className=" massive html5 icon "></i>
              <i className="css3 icon massive"></i>
              <i className="js icon massive"></i>
              <i class="react icon massive"></i>
              <div className="ui list resumeList">
                <i className="node js icon massive"></i>
                <i className="npm icon massive"></i>
                <i className="github icon massive"></i>
              </div>
              <div className="ui list resumeList">
                <i className="windows icon massive"></i>
              </div>
            </div>
          </div>
          <div className="ui column" style={{ color: "blue" }}>
            <h1 style={{ color: "orange" }}>Knowledgeable</h1>
            <div className="ui list resumeList">
              <i className="python icon massive"></i>
              <i className="java icon massive"></i>
              <i className="php icon massive"></i>
              <i className="database icon massive"></i>
              <div className="ui list resumeList">
                <i className="ubuntu icon massive"></i>
                <i className="terminal icon massive"></i>
                <i className="bootstrap icon massive"></i>
              </div>
              <div className="ui list resumeList">
                <i className="file word icon massive"></i>
                <i className="file excel icon massive"></i>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="ui container fluid center aligned">
          <hr style={{ borderColor: "gold" }}></hr>
          <h1 style={{ color: "ghostwhite" }}>Certifications</h1>
          <div className="ui">
            <div className="ui images medium">
              <div className="ui slide masked reveal image">
                <div className="visible content" id="resumeVisible">
                  <h1 className="mainPageh1">HTML & CSS</h1>
                </div>

                <a
                  target="blank_self"
                  className="hidden content"
                  href="img/pdfs/Michael_Wilson_MTA - HTML_CSS.pdf"
                >
                  <img src="img/html.PNG" alt={"html Certification"} />
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
    </div>
  );
}

export default Skills;
