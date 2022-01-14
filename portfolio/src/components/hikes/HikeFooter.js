import React from "react";

//Footer
export default function HikeFooter() {
  return (
    <div
      className="ui footer center aligned segment"
      style={{ color: "black"}}
      id="hikeFooter"
    >
      <p className="ui text center aligned" style={{ fontSize: "20px" }}>
        Thank you for visiting my hiking site! The information is based on personal
        experience and google and all of the photos were taken by me.
        <span style={{float: "right"}}>
          <a href="https://www.instagram.com/explodingsnes/">
          <i class="instagram icon large"></i>
            </a></span>
      </p>
    </div>
  );
}
