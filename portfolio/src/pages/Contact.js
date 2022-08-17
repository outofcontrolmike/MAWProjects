import Navigation from "../components/layout/Navigation";

import picture from "../assets/img/chalkboard.avif";

//Contact form , uses a emailer package to send emails - formsubmit
export default function Contact() {
  return (
    <div
      className="ui"
      id="contactPageContainer"
      style={{
        backgroundImage: picture,
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      <div
        className="ui container fluid"
        style={{ backgroundColor: "black" }}
        id="contactPage"
      >
        <br></br>
        <p id="contactHeader" style={{ textAlign: "center", color: "gold" }}>
          <span
            className="ui text gold center aligned"
            style={{ fontSize: "xxx-large" }}
          >
            Get In Touch
          </span>
        </p>

        <div
          className="ui fluid container"
          id="contactFormSegment"
          style={{ backgroundColor: "black" }}
        >
          <form
            action="https://formsubmit.co/3c390be336cb1bf27bb2e1a6ec97299b"
            method="POST"
            className="ui form ui raised small very padded text container commentsForm"
          >
            {/* Captcha hidden fields */}
            <input type="hidden" name="_subject" value="Email from portfolio" />
            <input
              type="hidden"
              name="_next"
              value="http://mawportfolio.online/thanks"
            />
            <input type="hidden" name="_captcha" value="false" />
            <div className="field">
              <input
                id="name"
                type="text"
                required
                name="name"
                placeholder="Full Name"
              />
            </div>
            <br></br>
            <div className="field">
              <input
                id="email"
                type="text"
                required
                name="email"
                placeholder="Preferred Email Address"
              />
            </div>
            <br></br>
            <div className="field">
              <select
                type="text"
                name="category"
                id="category"
                className="ui fluid dropdown"
                style={{ color: "gold" }}
              >
                <option style={{ color: "grey" }} default value="">
                  Category
                </option>
                <option style={{ color: "white" }}>General</option>
                <option style={{ color: "white" }}>Suggestion</option>
                <option style={{ color: "white" }}>Complaint</option>
                <option style={{ color: "white" }}>Compliment</option>
              </select>
            </div>
            <br></br>

            <div className="field">
              <textarea
                id="message"
                required
                type="text"
                name="message"
                placeholder="Message"
              />
            </div>

            <button
              id="submit"
              className="ui button massive inverted basic learnMore yellow circular fluid"
              style={{ marginTop: "2rem" }}
            >
              <a href="thanks" style={{ color: "gold" }}>
                Submit
              </a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
