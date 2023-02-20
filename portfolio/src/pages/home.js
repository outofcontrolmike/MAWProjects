import picture from "../assets/img/me.png";
//Landing page component
function Home() {
  let height = window.innerHeight;
  console.log("height", height);

  return (
    <div
      style={{ height: { height } }}
      className="ui one column grid stackable padded"
      id="landingPage"
    >
      <div className="row">
        {/* <div className="ui column" style={{ backgroundColor: "black" }}>
        <img
          className="ui image big centered rounded"
          style={{ marginTop: "6rem" }}
          alt={"Me"}
          src={picture}
        ></img>
      </div> */}
        <div
          className="ui column"
          style={{ alignSelf: "center", textAlign: "center" }}
        >
          <img
            className="ui image big centered rounded"
            alt={"Business logo"}
            src={"/img/logo.png"}
          ></img>

          <div>
            <button className="ui button huge inverted basic learnMore teal circular">
              <a href="about" style={{ color: "gold" }}>
                Learn More{" "}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
