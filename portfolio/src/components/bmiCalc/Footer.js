import React from "react";

//Footer for BMI Calculator Project
function Footer() {
  return (
    <div id="footer" className="ui segment container bmiFooter">
      <footer>
        <div className="ui container">
          <div className="column grid stackable" style={{ height: "fit" }}>
            <p style={{ fontSize: "1rem" }}>
              Disclaimer!!! *I do not claim to be accuarte with determining your
              BMI, BMR and Daily Caloric Needs. All the math is based on what I
              researched through google.
              <a href="/projects">
                <button
                  id="bmiBacktoProjects"
                  className="ui button"
                  style={{
                    position: "relative",
                    bottom: ".5rem",
                    float: "right",
                  }}
                >
                  Back to Projects
                </button>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
