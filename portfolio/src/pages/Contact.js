import Navigation from "../components/layout/Navigation";

//Contact form , uses a emailer package to send emails - formsubmit
export default function Contact() {
  return (
    <div id="contactPage">
      <Navigation />
      <div className="ui column stackable very padded relaxed container">
        <form
          action="https://formsubmit.co/outofcontrolmike@gmail.com"
          method="POST"
          className="ui form large"
        >
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
          <div className="field">
            <input
              id="email"
              type="text"
              required
              name="email"
              placeholder="Preferred Email Address"
            />
          </div>
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
            className="ui button yellow fluid basic"
            id="submit"
            type="submit"
            style={{ color: "gold", fontSize: "1.4rem", outline: "ridge" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
