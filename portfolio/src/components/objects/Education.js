function Education() {
  return (
    <div className="ui container" style={{backgroundColor: "black"}}>
      <br></br>
        <p><span className="ui text big"style={{color: "gold", paddingLeft: ".5rem"}}>Education</span></p>
        <hr></hr>

 {/* Job 1 */}
 <div className="ui two column stackable grid  very padded">
          <div className="ui column container" style={{borderRight: "gold 2px solid"}}>
            <h2>Ozarks Technical Community College</h2>
            <span className="ui text medium">Springfield, MO</span>
            <br></br>
            <span className="ui text medium">2018 - 2019</span>
            </div>
            <div className="ui column">
             <h2>Associate in Applied Science - Computer Information Science</h2>
             <p><span className="ui text medium">I studied the following stacks and concepts during my time obtaining
          this degree: C#, Java, Javascript, PHP, HTML/CSS, SQL, Web
          Development, Systems Analysis and Design, Databases and Project
          Management.</span></p>
            </div>
          </div>
        {/* Job 2 */}
        <div className="ui two column stackable grid fluid very padded">
          <div className="ui column container" style={{borderRight: "gold 2px solid"}}>
            <h2>Ozarks Technical Community College</h2>
            <span className="ui text medium">Springfield, MO</span>
            <br></br>
            <span className="ui text medium">2010 - 2013</span>
            </div>
            <div className="ui column">
             <h2>Associate of Arts - General Education</h2>
             <p><span className="ui text medium">Mapped MLS, Multiple Listing Services, database fields to system
           templates, used for loading data onto client sites in conjunction
           with feed management.</span></p>
            </div>
          </div>
            {/* --- end */}
    </div>
  );
}

export default Education;
