import Navigation from "../components/layout/Navigation";
import myPicture from "../assets/img/think.png";

//About section component
function About() {
  return (
    <div
      class="ui container fluid"
      style={{ height: "100vh", backgroundColor: "black" }}
    >
      <Navigation />
      <div
        className="ui two column doubling stackable grid very padded relaxed "
        id="about"
      >
        <div className="ui column" id="pictureContainer">
          <img
            className="ui image centered big rounded"
            src={myPicture}
            alt={"Michael Wilson being professional"}
          />
        </div>
        <div
          className="ui column padded"
          id="aboutMe"
          style={{ backgroundColor: "black" }}
        >
          <span id="myName" className="ui text large">
            Mr. Michael Wilson
          </span>
          <br />
          <br />
          <p>
            I am a person that is always trying to learn new skills and enjoy
            the process at the same time. I believe there is nothing better than
            working on a passion project. I have been involved with Web
            Development and Programming since the Spring of 2018.
          </p>
          <p>
            I originally gained interest for Web development during a previous
            job I had, managing an online vitamin store through WooCommerce. I
            found it interesting to use tools through wordpress to alter the
            front end of my company's website.
          </p>
          <p>
            Currently I work with Javascript, specifically in the{" "}
            <span>
              {" "}
              <a
                id="reactLink"
                style={{ fontSize: "large" }}
                target="_blank"
                rel="noreferrer"
                href="https://reactjs.org/"
              >
                React JS Library.
              </a>{" "}
              I also work with php from time to time.{" "}
            </span>
            My tasks include fixing bugs and implementing feature requests among
            a few of my companies' projects. I also work with frameworks such as
            <a
              id="reactLink"
              style={{ fontSize: "large" }}
              target="_blank"
              rel="noreferrer"
              href="https://cakephp.org/"
            >
              {" "}
              Cake PHP
            </a>{" "}
            and
            <a
              id="reactLink"
              style={{ fontSize: "large" }}
              target="_blank"
              rel="noreferrer"
              href="https://fomantic-ui.com/"
            >
              {" "}
              Fomantic CSS
            </a>
            .
          </p>
          <p>
            I currently work full time as a contractor and I freelance for a
            couple other clients. I'm also enrolled in a Harvard University
            Course named{" "}
            <a
              id="reactLink"
              style={{ fontSize: "large" }}
              target="_blank"
              rel="noreferrer"
              href="https://cs50.harvard.edu/x/2022/"
            >
              CS50
            </a>
            , it's their take on an introduction to computer science and the art
            of it.
          </p>
          <p>
            Other than coding, I really love hiking, traveling and trying a
            variety of new things. I also enjoy playing guitar, writing and
            photography. I am married and we have two pet dogs, which we all
            share a house that's over 100 years old.
          </p>
          <div className="center aligned author">
            <a
              href="https://www.linkedin.com/in/michael-wilson-6a2a5b18a/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="ui avatar image mini"
                id="aboutAvatar"
                src="img/linkedin.png"
                alt={"Linked in icon"}
              />
            </a>
            <a
              // id="aboutLink"
              href="https://github.com/outofcontrolmike"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white" }}
            >
              <i className="github icon white big" id="githubIcon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
