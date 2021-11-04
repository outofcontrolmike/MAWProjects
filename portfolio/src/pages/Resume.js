import Navigation from "../components/layout/Navigation";
import htmlPic from "../assets/img/html.png"

function Resume() {
    return (
        <div>
            <Navigation />
            <div className="ui two column relaxed very padded stackable grid">
                <div className="ui column">
                    <h1>Skills</h1>
                    <hr></hr>
                    <h3>Daily Tools</h3>
                    
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
                    <h3>Knowledgeable</h3>
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
                </div>
                <div className="ui column">
                    <h1>Certifications & Achievments</h1>
                    <hr></hr>
                    <div className="ui medium fluid images">
                <div className="ui slide masked reveal image">
              <div className="visible content" >
                <h1>HTML & CSS</h1>
              </div>

              <a target="blank_self" className="hidden content" href="img/pdfs/Michael_Wilson_MTA - HTML_CSS.pdf"><img src={htmlPic}/></a>
                </div>

                <div className="ui slide masked reveal image">
                  <div className="visible content">
                    <h1>Javascript</h1>
                  </div>
                  <a className="hidden content" href="img/pdfs/Michael_Wilson_MTA - Programming_Javascript.pdf"><img className="" src="img/javascript.JPG"/></a>
                    </div>
                    <div className="ui slide masked reveal image">
                      <div className="visible content" >
                        <h1>SQL</h1>
                      </div>
                      <a className="hidden content" href="img/pdfs/Michael_Wilson_MTA_Database_Administration_Fundmentals.pdf"><img className="" src="img/database.JPG"/></a>
                        </div>
              </div>
          </div>
                </div>
            </div>
    )
}

export default Resume;