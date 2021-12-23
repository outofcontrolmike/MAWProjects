import Navigation from "../components/layout/Navigation";
import myPicture from "../assets/img/profilePic-removebg-preview.png";
import ContactCard from "../components/layout/ContactCard";

//About section component
function About() {
  return (
    <>
      <Navigation />
      <div
        className="ui two column doubling stackable grid padded relaxed "
        id="about"
      >
        <div className="ui column" id="pictureContainer">
          <img
            className="ui image centered big rounded"
            style={{}}
            src={myPicture}
          />
        </div>
        <div className="ui column padded" id="aboutMe">
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
            Currently I work with the Javascript coding language, specifically
            in the{" "}
            <span id="reactLink">
              {" "}
              <a
                style={{ fontSize: "large" }}
                target="_blank"
                href="https://reactjs.org/"
              >
                React JS Library.
              </a>
            </span>{" "}
            My tasks include fixing bugs and implementing feature requests among
            a few of my companies' projects built with react.
          </p>
          <p>
            During my free time I attempt to build projects with React so I can
            have more to offer every new day at work. I generally like to mess
            around with API's and display information that's interesting to the
            public and myself.
          </p>
          <p>
            Other than coding, I really love hiking, traveling and trying a
            variety of new things. I also enjoy playing guitar, writing and
            photography. I have a fiance and two pet dogs and we all share a
            house that's over 100 years old.
          </p>
          <div className="center aligned author">
            <a
              id="aboutLink"
              href="https://github.com/outofcontrolmike"
              target="_blank"
            >
              <img className="ui avatar image" src="img/GitHub-Mark.png" />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/michael-wilson-6a2a5b18a/"
              target="_blank"
            >
              <img
                id="aboutAvatar"
                className="ui avatar image"
                src="img/linkedin.png"
                style={{ backgroundColor: "white" }}
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
