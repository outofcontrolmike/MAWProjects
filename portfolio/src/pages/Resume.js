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

        <div className="ui column" id="resume" >
  
          <h3><em>Work Experience</em></h3>
          <hr>
          </hr>
          <h3><b>Junior React Developer</b></h3>
          <br></br>
          <p>Bearded Dev Ops - Willard, MO</p>
          <h4><i>March 2021 to Present</i></h4>
          <p>Fixing small bug patches and implementing features across multiple projects written in the React JS Library. The main project I work on is a small Point of Sale system. I have previously brought up questions to ask our clientele in regards to implementation of their feature requests.</p>
          <br></br>
          <h3><b>Mapper / Junior Developer</b></h3>
          <br></br>
          <p>Market Maker - Springfield, MO 65803</p>
          <h4><i>November 2019 - April 2021</i></h4>
          <br></br>
          <p>Mapped MLS database fields to system templates, used for loading data onto client sites in conjunction with feed management</p>
          <p>Updated styles and functionality for certain system pages regarding a platform retheme.
</p>
<br></br>
<h3><b>Web Assistant Services - Work Study</b></h3>
<br>
</br>
<p>Ozarks Technical Community College - Springfield, MO</p>
<p>June 2019 - November 2019</p>
<br>
</br>
<p>Assist with various word press related projects/updates for Web Services requirements.
</p>
<br></br>
<h3><b>Web Store Manager</b></h3>
<br>
</br>
<p>Farm 2 Counter - Springfield, MO</p>
<p>April 2017 - June 2019</p>
<br>
</br>
<p>Overall Managment of web store system along with store front.
</p>
<br></br>
<h3><b>Web Store Manager</b></h3>
<br>
</br>
<p>Spring Valley Herbs & Natural Foods- Springfield, MO</p>
<p>March 2015 - April 2017</p>
<br>
</br>
<p>Manager of Woocommerce based store... Add More to this later.
</p>
<br></br>
<h3><b>Cook/Delivery Driver</b></h3>
<br>
</br>
<p>Godfathers Pizza - Nixa, MO</p>
<p>March 2015 - April 2017</p>
<br>
</br>
<p>All kinds of stuff.
</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
