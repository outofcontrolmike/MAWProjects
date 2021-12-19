import Navigation from "../components/layout/Navigation";
import htmlPic from "../assets/img/html.png";

function Resume() {
  return (
    <div>
      <Navigation />
      <div className="ui two column relaxed very padded stackable grid">
        <div className="ui column" id="resume">
          <h1>Work Experience</h1>
          <div id="resumeSegment">
            <h2>
              <b>Junior React Developer</b>
            </h2>
            <p style={{ color: "yellow" }}>Bearded Dev Ops - Willard, MO</p>
            <h4>
              <i style={{ color: "gray" }}>March 2021 to Present</i>
            </h4>
            <p>
              Fixing bugs and implementing features across multiple projects
              written in the React JS Library. The main project I work on is a
              small Point of Sale system. I use Node Package Manager to source
              libraries to fulfill feature requsts if needed. I have previously
              brought up questions to ask our clientele in regards to
              implementation of their feature requests.
            </p>
            <br />
          </div>
          <div id="resumeSegment">
            <h2>
              <b>Mapper / Junior Developer</b>
            </h2>
            <p style={{ color: "yellow" }}>
              Market Maker - Springfield, MO 65803
            </p>
            <h4>
              <i style={{ color: "gray" }}>November 2019 - April 2021</i>
            </h4>
            <p>
              Mapped MLS database fields to system templates, used for loading
              data onto client sites in conjunction with feed management.
            </p>
            <p>
              Updated styles and functionality for certain system pages
              regarding a platform retheme. Also was involved with testing the
              beta version of our retheme.
            </p>
            <p>
              I took on the role of helping our customer service department
              debug issues that they would run into with our system. I would
              congregate with them in person and attempt getting to the root of
              the problem.
            </p>
            <br></br>
          </div>
          <div id="resumeSegment">
            <h2>
              <b>Web Assistant Services - Work Study</b>
            </h2>
            <p style={{ color: "yellow" }}>
              Ozarks Technical Community College - Springfield, MO
            </p>
            <h4>
              <i style={{ color: "gray" }}>June 2019 - November 2019</i>
            </h4>
            <p>
              Assist with various word press related projects/updates for Web
              Services requirements.
            </p>
            <p>
              When I wasn't assigned tasks I utlized my time for studying CSS
              and Boostrap through W3 Schools.
            </p>
            <br></br>
          </div>
          <div id="resumeSegment">
            <h2>
              <b>Web Store Manager / Personal Assistant</b>
            </h2>
            <p style={{ color: "yellow" }}>Farm 2 Counter - Springfield, MO</p>
            <p style={{ color: "gray" }}>April 2017 - June 2019</p>
            <p>
              To sum this job up, I mainly managed a local grocery delivery
              service as well as a physical store. I was also an assistant to my
              employeer at the time.
            </p>
            <p></p>
            <br></br>
          </div>
          <div id="resumeSegment">
            <h2>
              <b>Web Store Manager</b>
            </h2>
            <p style={{ color: "yellow" }}>
              Spring Valley Herbs & Natural Foods- Springfield, MO
            </p>
            <p style={{ color: "gray" }}>March 2015 - April 2017</p>
            <p>Manager of Woocommerce based store... Add More to this later.</p>
            <br></br>
          </div>
          <div id="resumeSegment">
            <h2>
              <b>Cook/Delivery Driver</b>
            </h2>
            <p style={{ color: "yellow" }}>Godfathers Pizza - Nixa, MO</p>
            <p style={{ color: "gray" }}>March 2015 - April 2017</p>
            <p>All kinds of stuff.</p>
          </div>
          {/* Education segment */}
          <h1>Education</h1>
          <div id="resumeSegment">
            <h2>
              <b>Associate in Applied Science - Computer Information Science</b>
            </h2>
            <br></br>
            <p style={{ color: "yellow" }}>
              Ozarks Technical Community College - Springfield, MO
            </p>
            <p style={{ color: "gray" }}>January 2018 - December 2019</p>
            <br />
            <br />
          </div>
          <div id="resumeSegment">
            <h2>
              <b>Associate of Arts - General Education</b>
            </h2>
            <p style={{ color: "yellow" }}>
              Ozarks Technical Community College - Springfield, MO
            </p>
            <p style={{ color: "gray" }}>August 2010 - May 2013</p>
          </div>
        </div>
        {/* End Education */}
        <div className="ui column" id="techStack">
          <h1>Tech Stack / Certifications</h1>{" "}
          <h3 style={{ color: "orange" }}>Daily Tools</h3>
          <div className="ui list">
            <i className="html5 icon huge"></i>
            <i className="css3 icon huge"></i>
            <i className="js icon huge"></i>
            <i class="react icon huge"></i>

            <i className="windows icon huge"></i>
          </div>
          <div className="ui list">
            <i className="node js icon huge"></i>
            <i className="npm icon huge"></i>
          </div>
          <h3 style={{ color: "orange" }}>Knowledgeable</h3>
          <div className="ui list">
            <i className="java icon huge"></i>
            <i className="php icon huge"></i>
            <i className="database icon huge"></i>
          </div>
          <div className="ui list">
            <i className="ubuntu icon huge"></i>
            <i className="terminal icon huge"></i>
          </div>
          <div className="ui list">
            <i className="file word icon huge"></i>
            <i className="file excel icon huge"></i>
          </div>
          <div className="ui list">
            <i className="bootstrap icon huge"></i>
          </div>
          <h3 style={{ color: "orange" }}>Certifications</h3>
          <div className="ui medium three list images">
            <div
              className="ui slide masked reveal image"
              style={{ width: "30%" }}
            >
              <div className="visible content" id="resumeVisible">
                <h1>HTML & CSS</h1>
              </div>

              <a
                target="blank_self"
                className="hidden content"
                href="img/pdfs/Michael_Wilson_MTA - HTML_CSS.pdf"
              >
                <img src={htmlPic} />
              </a>
            </div>

            <div
              className="ui slide masked reveal image"
              style={{ width: "30%" }}
            >
              <div className="visible content" id="resumeVisible">
                <h1>Javascript</h1>
              </div>
              <a
                className="hidden content"
                href="img/pdfs/Michael_Wilson_MTA - Programming_Javascript.pdf"
              >
                <img className="" src="img/javascript.JPG" />
              </a>
            </div>
            <div
              className="ui slide masked reveal image"
              style={{ width: "30%" }}
            >
              <div className="visible content" id="resumeVisible">
                <h1>SQL</h1>
              </div>
              <a
                className="hidden content"
                href="img/pdfs/Michael_Wilson_MTA_Database_Administration_Fundmentals.pdf"
              >
                <img className="" src="img/database.JPG" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
