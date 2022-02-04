import Navigation from "../components/layout/Navigation";

function Contact() {
  return (
    <>
      <Navigation />
      <div
        id="faqDiv"
        className="ui column stackable very padded relaxed container"
      >
        <h1
          className="mainPageh1"
          id="roboHeader"
          style={{ marginBottom: "2rem" }}
        >
          {" "}
          Frequently Asked Questions
        </h1>
        <div id="faqSegment">
          <h2 id="faqHeader">How does your comments page work? </h2>
          <p>
            The comments page functionality works by using{" "}
            <a
              id="reactLink"
              target="_blank"
              href="https://firebase.google.com/"
            >
              Google FireBase{" "}
            </a>
            as a database to upload and retrieve data from. Each comment gets
            stored in a row upon upload. As far as displaying all the comments
            users have posted, my website loops through every one of the rows in
            the database and displays them in a unique way.{" "}
          </p>
        </div>
        <div id="faqSegment">
          <h2>How does your contact form work? </h2>
          <p>
            I actually use a tool named{" "}
            <a id="reactLink" href="https://formsubmit.co/" target="_blank">
              FormSubmit
            </a>
            . It provides a relatively easy way to set up an email address to
            send emails too. If you’re looking for a quick fix for setting up a
            personal contact form, I highly recommend FormSubmit.{" "}
          </p>
        </div>
        <div id="faqSegment">
          <h2>Did you use any tools to help you style your website? </h2>
          <p>
            I used plenty of tools. I used a CSS framework named{" "}
            <a id="reactLink" target="_blank" href="https://fomantic-ui.com/">
              Fomantic-UI{" "}
            </a>
            (which is a community fork of Semantic). I also used{" "}
            <a id="reactLink" target="_blank" href="https://fonts.google.com/">
              Google Fonts
            </a>{" "}
            as a helper for styling my projects individually.{" "}
          </p>
        </div>
        <div id="faqSegment">
          <h2>Where do you want to be?</h2>
          <p>
            I’d love to be at the point where a person hands me an idea and I
            know exactly how to make that idea return results.
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
