import { useHistory } from "react-router";

//Thank you Page
function Thanks(props) {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <div className="ui container fluid" id="thankYouContainer">
    <div className="ui middle aligned center aligned grid" id="thankYou">
      <div className="column thankyouText">
        <p>
        <span className="ui text huge yellow">Thank you for sending me an email!!</span>
        <h3 style={{ color: "silver" }}>
          <br></br>
          I will reach back out to you as soon as possible.
        </h3>
        </p>
        <div>
          <br></br>
          <button
            className="ui inverted yellow button huge circular"
            id="thankYouButton"
            onClick={handleClick}
          >
            <span className="thankyouButton">Back to Portfolio</span>
          </button>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Thanks;
