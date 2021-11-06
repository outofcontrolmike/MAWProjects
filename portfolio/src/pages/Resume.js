import Navigation from "../components/layout/Navigation";
import htmlPic from "../assets/img/html.png";

function Resume() {
  return (
    <div>
      <Navigation />
      <div className="ui two column relaxed very padded stackable grid">
        <div className="ui column">
          <h3>Daily Tools</h3>

          <div className="ui list">
            <i className="html5 icon big"></i>
            <i className="css3 icon big"></i>
            <i className="js icon big"></i>
            <i class="react icon big"></i>

            <i className="windows icon big"></i>
          </div>
          <div className="ui list">
            <i className="node js icon big"></i>
            <i className="npm icon big"></i>
          </div>
          <h3>Knowledgeable</h3>
          <div className="ui list">
            <i className="java icon big"></i>
            <i className="php icon big"></i>
            <i className="database icon big"></i>
          </div>

          <div className="ui list">
            <i className="ubuntu icon big"></i>
            <i className="terminal icon big"></i>
          </div>
          <div className="ui list">
            <i className="file word icon big"></i>
            <i className="file excel icon big"></i>
          </div>
          <div className="ui list">
            <i className="bootstrap icon big"></i>
          </div>
          <h3>Certifications</h3>
          <div className="ui medium fluid images">
            <div className="ui slide masked reveal image">
              <div className="visible content">
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

            <div className="ui slide masked reveal image">
              <div className="visible content">
                <h1>Javascript</h1>
              </div>
              <a
                className="hidden content"
                href="img/pdfs/Michael_Wilson_MTA - Programming_Javascript.pdf"
              >
                <img className="" src="img/javascript.JPG" />
              </a>
            </div>
            <div className="ui slide masked reveal image">
              <div className="visible content">
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

        <div className="ui column">
          <h3>Resume</h3>
        </div>
      </div>
    </div>
  );
}

export default Resume;
