import React from "react";

//Footer component
function BrewFooter() {
  return (
    <div>
      <footer id="brewFooter" className="ui" style={{ color: "white" }}>
        <p>
          Special thanks to{" "}
          <a
            style={{ color: "gold" }}
            href="https://chrisjmears.com/"
            target="_blank"
            rel="noreferrer"
          >
            Chris J Mears{" "}
          </a>{" "}
          and{" "}
          <a
            style={{ color: "gold" }}
            href="https://wanderingleafstudios.com/"
            target="_blank"
            rel="noreferrer"
          >
            Wandering Leaf Studios LLC
          </a>{" "}
          for creating and maintaining the brewery information.
        </p>
        <p>
          The initial dataset is provided by{" "}
          <a
            style={{ color: "red" }}
            href="https://www.brewersassociation.org/"
            target="_blank"
            rel="noreferrer"
          >
            Brewers Association
          </a>
        </p>
      </footer>
    </div>
  );
}

export default BrewFooter;
