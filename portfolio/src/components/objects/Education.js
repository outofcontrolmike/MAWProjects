function Education() {
  return (
    <div className="row" style={{backgroundColor : "black"}}>
          <br></br>

    <div
      className="ui container"
      style={{ fontSize: "medium", backgroundColor: "#1b1c1d", color: "white", padding: "1rem"}} 
    >
      <span
        className="ui text large"
        style={{ paddingLeft: "1rem", color: "gold" }}
      >
        Education
      </span>
      <hr style={{ borderBottomColor: "gold" }}></hr>

      {/* Education 1 */}
      <div className="ui two column stackable grid  very padded">
        <div className="ui column container">
          <h3 style={{ color: "orange" }}>
            Ozarks Technical Community College
          </h3>
          <span className="ui text medium">Springfield, MO</span>
          <br></br>
          <span className="ui text medium">2018 - 2019</span>
        </div>
        <div className="ui column">
          <h3 style={{ color: "orange" }}>
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
      <hr></hr>

      {/* Education 2 */}
      <div className="ui two column stackable grid fluid very padded">
        <div className="ui column container">
          <h3 style={{ color: "orange" }}>
            Ozarks Technical Community College
          </h3>
          <span className="ui text medium">Springfield, MO</span>
          <br></br>
          <span className="ui text medium">2010 - 2013</span>
        </div>
        <div className="ui column">
          <h3 style={{ color: "orange" }}>
            Associate of Arts - General Education
          </h3>
          <p>
            <span className="ui text medium">
              I mostly took general education courses due to the possibility of transferring to Missouri State University.  I also studied Culinary Arts and Automotive Engineering for a couple semesters.
            </span>
          </p>
        </div>
      </div>
      {/* --- end */}
    </div>
    </div>
  );
}

export default Education;
