import React from "react";

function BrewFooter() {
  return (
    <div>
      <footer id="brewFooter" className="ui" style={{ color: "whitesmoke" }}>
        <h3>The creator of this project is Michael A. Wilson</h3>
        <p>
          Special thanks to Chris J Mears and Wandering Leaf Studios LLC for
          creating and maintaning the brewery information.
        </p>
        <p>
          The initial dataset is provided by{" "}
          <a
            style={{ color: "red" }}
            href="https://www.brewersassociation.org/"
          >
            Brewers Association
          </a>
        </p>
      </footer>
    </div>
  );
}

export default BrewFooter;
