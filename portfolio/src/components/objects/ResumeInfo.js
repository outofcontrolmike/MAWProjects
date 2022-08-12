function ResumeInfo() {
  return (
    <div
      className="ui column very padded relaxed container"
      id="resumeColumnContainer"
    >
      <div className="ui row" id="resume">
        <div id="resumeSegment">
          <h1>
            <b>Software Engineer</b>
          </h1>
          <p id="jobLocation" style={{ color: "yellow" }}>
            Bearded Dev Ops / Karl's Technology - Willard, MO
          </p>
          <h4>
            <i style={{ color: "gray" }}>March 2021 to Present</i>
          </h4>
          <p>
            Fixing bugs and implementing features across multiple projects
            written in the React JS Library. I mostly contribute to the front
            end but I work with the backend every now and then. I use Node
            Package Manager to source libraries to fulfill feature requests if
            needed. I have previously brought up questions to ask our clientele
            in regards to the implementation of their feature requests.
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
            Mapped MLS, Multiple Listing Services, database fields to system
            templates, used for loading data onto client sites in conjunction
            with feed management.
          </p>
          <p>
            Updated styles and functionality for certain system pages regarding
            a platform retheme. Also was involved with testing the beta version
            of the above mentioned retheme.
          </p>
          <p>
            I took on the role of helping our customer service department debug
            issues that they would run into with our system. I would discuss
            with them in person and attempt getting to the root of the problem.
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
            When I wasn't assigned tasks I utilized my time for studying CSS and
            Bootstrap through W3 Schools.
          </p>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default ResumeInfo;
