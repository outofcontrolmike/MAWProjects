function Education() {
  return (
    <div
      className="ui container segment inverted"
      style={{ fontSize: "medium" }}
    >
      <span className="ui text large orange" style={{ paddingLeft: "1rem" }}>
        Education
      </span>
      <hr style={{ borderBottomColor: "gold" }}></hr>

      {/* Job 1 */}
      <div className="ui two column stackable grid  very padded">
        <div
          className="ui column container"
          style={{ borderRight: "gold 2px solid" }}
        >
          <h3 style={{ color: "gold" }}>Ozarks Technical Community College</h3>
          <span className="ui text medium">Springfield, MO</span>
          <br></br>
          <span className="ui text medium">2018 - 2019</span>
        </div>
        <div className="ui column">
          <h3 style={{ color: "gold" }}>
            Associate in Applied Science - Computer Information Science
          </h3>
          <p>
            <span className="ui text medium">
              I studied the following stacks and concepts during my time
              obtaining this degree: C#, Java, Javascript, PHP, HTML/CSS, SQL,
              Web Development, Systems Analysis and Design, Databases and
              Project Management.
            </span>
          </p>
        </div>
      </div>
      {/* Job 2 */}
      <div className="ui two column stackable grid fluid very padded">
        <div
          className="ui column container"
          style={{ borderRight: "gold 2px solid" }}
        >
          <h3 style={{ color: "gold" }}>Ozarks Technical Community College</h3>
          <span className="ui text medium">Springfield, MO</span>
          <br></br>
          <span className="ui text medium">2010 - 2013</span>
        </div>
        <div className="ui column">
          <h3 style={{ color: "gold" }}>
            Associate of Arts - General Education
          </h3>
          <p>
            <span className="ui text medium">
              Mapped MLS, Multiple Listing Services, database fields to system
              templates, used for loading data onto client sites in conjunction
              with feed management.
            </span>
          </p>
        </div>
      </div>
      {/* --- end */}
    </div>
  );
}

export default Education;
