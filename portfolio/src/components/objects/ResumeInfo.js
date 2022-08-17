function ResumeInfo() {
  return (
    <div className="ui container fluid very relaxed padded">
      <div className="ui column fluid" style={{ fontSize: "medium" }}>
        <span
          className="ui text large"
          style={{ paddingLeft: "1rem", color: "gold" }}
        >
          Work Experience
        </span>
        <hr style={{ borderBottomColor: "gold" }}></hr>

        {/* Job 1 */}
        <div className="ui two column stackable grid fluid very padded">
          <div className="ui column container">
            <h3 style={{ color: "orange" }}>
              Karl's Technology / Bearded Dev Ops
            </h3>
            <span className="ui text ">Willard, MO</span>
            <br></br>
            <span className="ui text ">2021 - Present</span>
          </div>
          <div className="ui column">
            <h3 style={{ color: "orange" }}>Software Engineer - Front End</h3>
            <p>
              <span className="ui text ">
                Bug Fixes, Testing and Feature Requests, and writing
                documentation for software functionality. I also dive into the
                backend from time to time.{" "}
              </span>
            </p>
          </div>
        </div>
        <hr></hr>
        {/* Job 2 */}
        <div className="ui two column stackable grid fluid very padded">
          <div className="ui column container">
            <h3 style={{ color: "orange" }}>Market Maker Leads</h3>
            <span className="ui text ">Springfield, MO</span>
            <br></br>
            <span className="ui text ">2019 - Present</span>
          </div>
          <div className="ui column">
            <h3 style={{ color: "orange" }}>
              Mapper / Junior Web Developer / Contractor
            </h3>
            <p>
              <span className="ui text ">
                Mapped MLS, Multiple Listing Services, database fields to system
                templates, used for loading data onto client sites in
                conjunction with feed management.
              </span>
            </p>
          </div>
        </div>
        <hr></hr>
        {/* job 3 */}
        <div className="ui two column stackable grid fluid very padded">
          <div className="ui column container">
            <h3 style={{ color: "orange" }}>
              Ozarks Technical Community College
            </h3>
            <span className="ui text ">Springfield, MO</span>
            <br></br>
            <span className="ui text ">2019</span>
          </div>
          <div className="ui column">
            <h3 style={{ color: "orange" }}>
              Web Assistant Services - Work Study
            </h3>
            <p>
              <span className="ui text ">
                Assist with various word press related projects/updates for Web
                Services requirements.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeInfo;
