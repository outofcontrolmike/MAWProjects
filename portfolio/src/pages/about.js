import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import myPicture from "../assets/img/profilePic-removebg-preview.png";

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
        <div className="ui column padded">
          <span id="myName" className="ui text large">
            Mr. Michael Wilson
          </span>
          <br />
          <br />
          <p>
            I am a person that is always trying to learn new skills and enjoy
            the process at the same time. I belive there is nothing better than
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
            <hr></hr>
            Currently I work with the Javascript coding language, specifically
            in the{" "}
            <span>
              {" "}
              <a
                style={{ fontSize: "large", color: "gold" }}
                target="_blank"
                href="www.google.com"
              >
                React JS Library.
              </a>
            </span>{" "}
            My tasks include fixing bugs and implementing feature requests among
            a few of my compaines projects built with the react library.
          </p>
          <p>
            With some of my free time I try to build projects with React so I
            keep up to date with work. I generally like to mess around with
            API's.
          </p>
          <hr></hr>
          <p>
            I really love hiking, travelilng and trying a vareity of new things.
            I also enjoy Guitar, Writing and Photography. I of course work on my
            over 100 year old house and keep learning new things about being a
            homeowner.
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default About;
