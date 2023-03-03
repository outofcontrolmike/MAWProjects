import { useHistory } from "react-router";
import { TabTitle } from "../utils/helperFunctions";

//Thank you Page
function Thanks(props) {
  TabTitle("Thank You");

  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  TabTitle("Thank You!");

  return (
    <div className="ui container fluid" id="thankYouContainer">
      <div className="ui middle aligned center aligned grid" id="thankYou">
        <div className="column thankyouText">
          <p>
            <span
              className="ui text huge"
              style={{ color: "skyblue", textShadow: "1px 1px ghostwhite" }}
            >
              Thank you for sending me an email!!
            </span>
            <h3 style={{ color: "white" }}>
              <br></br>I will reach back out to you as soon as possible.
            </h3>
          </p>
          <div>
            <br></br>
            <button
              className="ui inverted yellow basic button huge circular"
              id="thankYouButton"
              onClick={handleClick}
            >
              <span className="thankyouButton" style={{ color: "gold" }}>
                Back to Portfolio
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thanks;
