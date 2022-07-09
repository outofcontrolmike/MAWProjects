import picture from "../assets/img/me.png";

//Landing page component
function Home() {
  let height = window.innerHeight;
  console.log("height", height);

  return (
    <div
      style={{ height: { height } }}
      className="ui two column stackable grid very padded relaxed"
      id="landingPage"
    >
           <div className="ui column" style={{ backgroundColor: "black" }}>
        <img
          className="ui image big centered rounded"
          style={{ marginTop: "6rem" }}
          alt={"Me"}
          src={picture}
        ></img>
      </div>
      <div
        className="ui column"
        style={{ margin: "auto", textAlign: "center" }}
      >
        <span
          style={{ textAlign: "left", color: "gold" }}
          className="ui text gold massive"
        >
          Michael A. Wilson
        </span>

        <h2 id="landingPageSub">Web Developer</h2>
        <div>
          <button
            className="ui button massive inverted basic learnMore yellow circular"
            style={{ marginTop: "2rem" }}
          >
            <a href="about" style={{ color: "gold" }}>
              Learn More{" "}
            </a>
          </button>
        </div>
      </div>
 
    </div>
  );
}

export default Home;
