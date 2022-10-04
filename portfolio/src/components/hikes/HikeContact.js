import React from "react";

//Hike contact form
export default function HikeContact() {
  return (
    <div className="ui" id="hikeContactContainer">
      {/* Form  - Name, Email, Question box, submit (use placeholders as labels) */}
      <div
        className="ui container form segment relaxed padded very raised stackable"
        id="hikeContactForm"
      >
        <form
          action="https://formsubmit.co/outofcontrolmike@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="Email from portfolio" />
          <input
            type="hidden"
            name="_next"
            value="https://mwportfolio.online/hikeThankYou"
          />
          <input type="hidden" name="_captcha" value="false" />
          <h1
            id="hikeFormText"
            style={{
              color: "black",
              letterSpacing: ".2rem",
              fontSize: "1.6rem",
            }}
          >
            Hiking Contact Form
          </h1>
          <div class="field">
            <input
              required
              type="text"
              id="hikeFormText"
              name="first-name"
              placeholder="First Name or name preferred"
            />
          </div>
          <div class="field">
            <input
              required
              type="text"
              id="hikeFormText"
              name="last-name"
              placeholder="Contact Email"
            />
          </div>
          <div class="field">
            <textarea
              required
              type="text"
              id="hikeFormText"
              name="message"
              placeholder="Ask about something hiking related or anything else..."
            />
          </div>
          <button
            id="hikeFormText"
            class="ui button right floated basic"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
