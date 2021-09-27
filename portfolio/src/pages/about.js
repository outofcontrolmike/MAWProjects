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
      <div className="ui " id="about">
        <div className="ui four column doubling stackable grid" id="about" >
          <div className="ui column">
            <img className="ui image" src={secondPicture} />
          </div>
          <div className="ui column">
            <h1>Intro:</h1>
            <p>
              Hello, my name is <span className="ui text large">Michael Wilson.</span><br></br>
              
              <p>I have been involved with WebDevelopment and programming since 2018.</p>
            </p>
            <p>
              I originally gained interest for Web development during a previous job I had, managing an online vitamin store through woo commerce.  I found it interesting to use tools through wordpress to alter the front end of my company's website.

            </p>
          </div>
          <div className="ui column">
            <h1>What I Do:</h1>
            <p>

              Currently I work with react Js. I patch bugs and work on feature requests. I also work on turning new ideas Into react projects.
              I also enjoy learning about Web Design and trying to find creative ways to present my projects.

            </p>
          </div>    <div className="ui column">
            <h1>Besides Coding:</h1>
            <p>
            I really love hiking and traveling. I also enjoy photography and writing. I try to be with family and friends as much as I can since conversations with them can spark ideas for new projects to work on.

            </p>
          </div>
        </div>
      </div>

    </>
  );
}

export default About;
