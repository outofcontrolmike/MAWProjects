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
        <div className="ui two column doubling stackable grid padded" id="about" >
          <div className="ui column">
          <div className="ui card centered" style={{width: "fit-content"}}>
                <div className="ui slide masked reveal image">
                  <img src={myPicture} className="visible content" style={{objectFit: "cover", height: "700px"}}/>
                  <img src={secondPicture} className="hidden content fluid" style={{objectFit: "cover", height: "400px"}}/>
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
          <div className="ui column">
              <h1>Who am I?</h1>
              <hr></hr>          
            <p>
              <span className="ui text large">Michael Wilson</span><br></br><br></br>

              <p>I have been involved with WebDevelopment and programming since 2018.</p>
            </p>
            <p>
              I originally gained interest for Web development during a previous job I had, managing an online vitamin store through woo commerce.  I found it interesting to use tools through wordpress to alter the front end of my company's website.

            </p>
            <p>
            <h1>What I Do</h1>
            <hr></hr>
              Currently I work with react Js in a proffesional sense. During my work hours I fix bugs and implement feature requests among a few of my compaines projects built with the react library<span>REACT Sybmol**</span>
            </p>
            <p>With some of my free time I try to build projects with React so I keep up to date with work.</p>
            <h1>Besides Coding</h1>
            <hr></hr>
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
