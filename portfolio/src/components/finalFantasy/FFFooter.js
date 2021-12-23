import React from "react";

//Footer component
export default function FFFooter() {
  return (
    <div id="ffFooter">
      <footer
        className="ui text container segment footer"
        style={{ color: "black" }}
      >
        <p id="ffP">
          All Final Fantasy Info is sourced from{" "}
          <a
            id="ffA"
            target="_blank"
            rel="noreferrer"
            href="https://www.moogleapi.com/"
            style={{ color: "lightblue" }}
          >
            Moogle API Project.{" "}
          </a>
          If you want to help more with the dataset information or add any
          feedback, please reach out to them by following the link above!
        </p>
      </footer>
    </div>
  );
}
