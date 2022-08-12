function Skills() {
  return (
    <>
      <div className="ui divider orange"></div>
      <div
        className="ui container centered"
        id="techStack"
        style={{ paddingBottom: "2rem" }}
      >
        <h1 className="mainPageh1" id="roboHeader">
          Tech Stack / Certifications
        </h1>{" "}
        <br></br>
        <div className="ui container two column stackable grid fluid center aligned">
          <div className="ui column">
            <h3 style={{ color: "orange" }}>Daily Tools</h3>
            <div className="ui list resumeList">
              <i className="html5 icon huge"></i>
              <i className="css3 icon huge"></i>
              <i className="js icon huge"></i>
              <i class="react icon huge"></i>
              <i className="windows icon huge"></i>
            </div>
            <div className="ui list resumeList">
              <i className="node js icon huge"></i>
              <i className="npm icon huge"></i>
              <i className="github icon huge"></i>
            </div>
          </div>
          <div className="ui column">
            <h3 style={{ color: "orange" }}>Knowledgeable</h3>
            <div className="ui list resumeList">
              <i className="java icon huge"></i>
              <i className="php icon huge"></i>
              <i className="database icon huge"></i>
            </div>
            <div className="ui list resumeList">
              <i className="ubuntu icon huge"></i>
              <i className="terminal icon huge"></i>
              <i className="bootstrap icon huge"></i>
            </div>
            <div className="ui list resumeList">
              <i className="file word icon huge"></i>
              <i className="file excel icon huge"></i>
            </div>
          </div>
        </div>
        <br></br>
        <div className="ui container fluid center aligned">
          <div className="ui divider"></div>
          <h3 style={{ color: "orange" }}>Certifications</h3>
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
    </>
  );
}

export default Skills;
