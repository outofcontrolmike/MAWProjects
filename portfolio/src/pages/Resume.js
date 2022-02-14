import Navigation from "../components/layout/Navigation";
import htmlPic from "../assets/img/html.png";

//Resume Component
function Resume() {
  return (
    <div id="resumePage">
      <Navigation />
      <div className="ui two column very padded relaxed stackable grid" id="resumeColumnContainer">
        <div className="ui column" id="techStack">
          <h1 className="mainPageh1" id="roboHeader">
            Tech Stack / Certifications
          </h1>{" "}
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
          <div className="ui list">
          <h3 style={{ color: "orange" }}>Certifications</h3>
          <div className="ui medium three list images">
            <div
              className="ui slide masked reveal image"
              style={{ width: "30%" }}
            >
              <div className="visible content" id="resumeVisible">
                <h1 className="mainPageh1">HTML & CSS</h1>
              </div>

              <a
                target="blank_self"
                className="hidden content"
                href="img/pdfs/Michael_Wilson_MTA - HTML_CSS.pdf"
              >
                <img src={htmlPic} alt={"html Certification"} />
              </a>
            </div>

            <div
              className="ui slide masked reveal image"
              style={{ width: "30%" }}
            >
              <div className="visible content" id="resumeVisible">
                <h1 className="mainPageh1">Javascript</h1>
              </div>
              <a
                className="hidden content"
                href="img/pdfs/Michael_Wilson_MTA - Programming_Javascript.pdf"
              >
                <img
                  className=""
                  src="img/javascript.JPG"
                  alt={"Javascript Certification"}
                />
              </a>
            </div>
            <div
              className="ui slide masked reveal image"
              style={{ width: "30%" }}
            >
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
        <div className="ui column" id="resume">
          <h1 className="mainPageh1" id="roboHeader">
            Work Experience / Education
          </h1>
          <div id="resumeSegment">
            <h2>
              <b>Junior React Developer</b>
            </h2>
            <p id="jobLocation" style={{ color: "yellow" }}>
              Bearded Dev Ops - Willard, MO
            </p>
            <h4>
              <i style={{ color: "gray" }}>March 2021 to Present</i>
            </h4>
            <p>
              Fixing bugs and implementing features across multiple projects
              written in the React JS Library. The main project I work on is a
              small Point of Sale system. I use Node Package Manager to source
              libraries to fulfill feature requests if needed. I have previously
              brought up questions to ask our clientele in regards to the
              implementation of their feature requests.
            </p>
            <br />
          </div>
          <div id="resumeSegment">
            <h2>
              <b>Mapper / Junior Developer</b>
            </h2>
            <p id="jobLocation" style={{ color: "yellow" }}>
              Market Maker - Springfield, MO 65803
            </p>
            <h4>
              <i style={{ color: "gray" }}>November 2019 - April 2021</i>
            </h4>
            <p>
              Mapped MLS,Multiple Listing Services, database fields to system
              templates, used for loading data onto client sites in conjunction
              with feed management.
            </p>
            <p>
              Updated styles and functionality for certain system pages
              regarding a platform retheme. Also was involved with testing the
              beta version of the above mentioned retheme.
            </p>
            <p>
              I took on the role of helping our customer service department
              debug issues that they would run into with our system. I would
              discuss with them in person and attempt getting to the root of the
              problem.
            </p>
            <br></br>
          </div>
          <div id="resumeSegment">
            <h2>
              <b>Web Assistant Services - Work Study</b>
            </h2>
            <p id="jobLocation" style={{ color: "yellow" }}>
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
              When I wasn't assigned tasks I utilized my time for studying CSS
              and Bootstrap through W3 Schools.
            </p>
            <br></br>
          </div>
          <div id="resumeSegment">
            <h2>
              <b>Web Store Manager / Personal Assistant</b>
            </h2>
            <p id="jobLocation" style={{ color: "yellow" }}>
              Farm 2 Counter - Springfield, MO
            </p>
            <h4>
              <i style={{ color: "gray" }}>April 2017 - June 2019</i>
            </h4>
            <p>
              Managed a local web store delivery service. This included
              communicating with clients, purveyors, customers as well as the
              creator of our online delivery service. Also included inventory
              management, waste management, meal planning, order preparation,
              package fulfillment and delivering said packages to customers.
            </p>

            <p>
              I also managed a physical store, that held the space for the web
              store. The roles involved were customer service, inventory
              management, POS usage and setup, payroll, opening and closing the
              business, bank deposits and much more.
            </p>
            <p></p>
            <br></br>
          </div>
          <div id="resumeSegment">
            <h2>
              <b>Web Store Manager</b>
            </h2>
            <p id="jobLocation" style={{ color: "yellow" }}>
              Spring Valley Herbs & Natural Foods - Springfield, MO
            </p>
            <h4>
              <i style={{ color: "gray" }}>March 2015 - April 2017</i>
            </h4>
            <p>
              Manager of a WooCommerce based store. The duties for this job
              included: customer service, order fulfillment, inventory
              management, item listing management, search engine optimization,
              photography.{" "}
            </p>
            <br></br>
          </div>
          <div id="resumeSegment">
            <h2>
              <b>Cook/Delivery Driver</b>
            </h2>
            <p id="jobLocation" style={{ color: "yellow" }}>
              Godfathers Pizza - Nixa, MO
            </p>
            <h4>
              <i style={{ color: "gray" }}>June 2007 - April 2015</i>
            </h4>
            <p>
              This was my first place of employment. I worked the following
              positions throughout the time: dishwasher, prep, cook, phone
              answering, busser, delivery driver. I learned a lot about customer
              service throughout the time and also learned how to accommodate
              during stressful situations with limited options.
            </p>
          </div>
          {/* Education segment */}
          <h1
            className="mainPageh1"
            id="roboHeader"
            style={{ marginTop: "4rem" }}
          >
            Education
          </h1>
          <div id="resumeSegment">
            <h2>
              <b>Associate in Applied Science - Computer Information Science</b>
            </h2>
            <br></br>
            <p id="jobLocation" style={{ color: "yellow" }}>
              Ozarks Technical Community College - Springfield, MO
            </p>
            <h4>
              <i style={{ color: "gray" }}>January 2018 - December 2019</i>
            </h4>
            <p>
              I studied the following stacks and concepts during my time
              obtaining this degree: C#, Java, Javascript, PHP, HTML/CSS, SQL,
              Web Development, Systems Analysis and Design, Databases and
              Project Management.
            </p>
            <p></p>
            <br />
            <br />
          </div>
          <div id="resumeSegment">
            <h2>
              <b>Associate of Arts - General Education</b>
            </h2>
            <p id="jobLocation" style={{ color: "yellow" }}>
              Ozarks Technical Community College - Springfield, MO
            </p>
            <h4>
              <i style={{ color: "gray" }}>August 2010 - May 2013</i>
            </h4>
            <p>
              Studied the following subjects during this degree: Culinary Arts
              and Hospitality Management, Automotive Repair, General Education.
            </p>
            <p></p>
          </div>
        </div>
        {/* End Education */}
      </div>
    </div>
  );
}

export default Resume;
