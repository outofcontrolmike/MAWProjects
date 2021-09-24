import Navigation from "../components/layout/Navigation";
import myPicture from "../assets/img/myImage.jpg";
import secondPicture from "../assets/img/tacos.jpg";

import htmlCert from "../assets/img/html.png";
import jsCert from "../assets/img/tacos.jpg";
import sqlCert from "../assets/img/tacos.jpg";



function About() {
  return (
    <>
      <Navigation />
      <div className="ui" id="about">
      <div className="ui four column very relaxed grid stackable" id="about" >
          <div id="cardHover" className="column">
            <div className="ui card centered fluid padded">
                <div className="ui slide masked reveal image">
                  <img src={myPicture} className="visible content"/>
                  <img src={secondPicture} className="hidden content fluid" />
                </div>
                <div className="content">
                  <a className="header">Michael Wilson</a>
                  <div className="meta">
                    <span className="date">Graduated Fall 2019</span>
                    <p className="date">Associates of Applied Science Computer Information Science</p>
                  </div>
                </div>
              </div>
          </div>
          <div className="column">
              <div className=" ui section text">
        <h1>My Journey So Far</h1>
        <p>Hello there! I have been working in the field of Web Development since November 2019.  I've graudated with a Computer Information Science degree from a college named Ozark's Technical Community College, December of 2019.
          <p>Throughout my time in college, I learned about what goes into building websites and programming.  I also learned about how to interact with a client and how to configure their needs for a project.
</p>
<p>
At my current workplace I utilize React JS by fixing small bugs and attemtping to implement new features.  I'm still learning a lot about the benefits of react. 
</p>
        </p>
        <p>
            In my study time I work on drafting project ideas and implementing them. My programming language of choice is Javascript.
        </p>
        <p>
            When I'm not at my desk, I enjoy adventuring outdoors and taking pictures of nature, which is a huge inpsiration to my project ideas.</p>
              </div>
          </div>
          <div className="column ">
            <h1>Skills</h1>
            <h3>Efficient</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Word Processing & Excel</li>
                <li>Windows</li>
            </ul>
            <hr></hr>
            <h3>Intermediate</h3>
            <ul>
                <li>Javascript</li>
                <li>C#</li>
                <li>SQL Server</li>
            </ul>
            <hr></hr>
            <h3>Minor</h3>
            <ul>
                <li>PHP</li>
                <li>Java</li>
                <li>XML</li>
                <li>Unbuntu</li>
            </ul>
            <hr></hr>
           
        </div>
        <div className="column">
          <h1>Certifications</h1>
          <div class="ui divided items">
  <div class="item">
    <div class="image">
      <img src={htmlCert} className="ui image medium"/>
    </div>
  </div>
  <div class="item">
    <div class="image">
      <img src="/images/wireframe/image.png"/>
    </div>
  </div>
  <div class="item">
    <div class="image">
      <img src="/images/wireframe/image.png"/>
    </div>
  </div>
</div> 
      </div>
        </div>
        
      </div>
      
    </>
  );
}

export default About;
