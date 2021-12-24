import { useHistory } from "react-router";

//Thank you Page
function Thanks(props) {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <div className="ui middle aligned center aligned grid" id="thankYou">
      <div className="column thankyouText">
        <h1 className="thankyouH1">Thank you so much!!</h1>
        <h3 style={{ color: "white" }}>
          I will be getting back to you as soon as I can!
        </h3>
        <div>
          <br></br>
          <button
            className="ui inverted orange button huge"
            id="thankYouButton"
            onClick={handleClick}
          >
            <span className="thankyouButton">Back to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Thanks;
