import Navigation from "../components/layout/Navigation";

//Contact form , uses a emailer package to send emails - formsubmit
export default function Contact() {
  return (
    <div id="contactPage">
      <Navigation />
      <h1 className="mainPageh1" id="roboHeader">
           Contact Me
          </h1>
      <div className="ui stackable very padded relaxed container" id="contactFormSegment">
        <form
          action="https://formsubmit.co/outofcontrolmike@gmail.com"
          method="POST"
          className="ui form ui raised very padded text container commentsForm"
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
          <br></br>

          <button
            className="ui button yellow fluid basic circular"
            id="submit"
            type="submit"
            style={{fontSize: "1.4rem", outline: "ridge" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
