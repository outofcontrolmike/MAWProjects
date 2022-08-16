function ResumeInfo() {
  return (
    <div className="ui container fluid very relaxed padded">
      <div className="ui column fluid">
        <br></br>
        <p><span className="ui text big" style={{color: "gold", paddingLeft: ".5rem"}}>Work Experience</span></p>
        <hr></hr>
      
        {/* Job 1 */}
        <div className="ui two column stackable grid fluid very padded">
          <div className="ui column container" style={{borderRight: "gold 2px solid"}}>
            <h2>Karl's Technology / Bearded Dev Ops</h2>
            <span className="ui text medium">Willard, MO</span>
            <br></br>
            <span className="ui text medium">2021 - Present</span>
            </div>
            <div className="ui column">
             <h2>Software Engineer - Front End</h2>
             <p><span className="ui text medium">Bug Fixes, Testing and Feature Requests, and writing documentation for software functionality.  I also dive into the backend from time to time. </span></p>
            </div>
          </div>
        {/* Job 2 */}
        <div className="ui two column stackable grid fluid very padded">
          <div className="ui column container" style={{borderRight: "gold 2px solid"}}>
            <h2>Market Maker Leads</h2>
            <span className="ui text medium">Springfield, MO</span>
            <br></br>
            <span className="ui text medium">2019 - Present</span>
            </div>
            <div className="ui column">
             <h2>Mapper / Junior Web Developer / Contractor</h2>
             <p><span className="ui text medium">Mapped MLS, Multiple Listing Services, database fields to system
           templates, used for loading data onto client sites in conjunction
           with feed management.</span></p>
            </div>
          </div>
        {/* job 3 */}
        <div className="ui two column stackable grid fluid very padded">
          <div className="ui column container" style={{borderRight: "gold 2px solid"}}>
            <h2>Ozarks Technical Community College</h2>
            <span className="ui text medium">Springfield, MO</span>
            <br></br>
            <span className="ui text medium">2019</span>
            </div>
            <div className="ui column">
             <h2>Web Assistant Services - Work Study</h2>
             <p><span className="ui text medium">Assist with various word press related projects/updates for Web
             Services requirements.</span></p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ResumeInfo;
