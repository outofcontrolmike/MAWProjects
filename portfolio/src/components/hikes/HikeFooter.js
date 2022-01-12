import React from "react";

//Footer
export default function HikeFooter() {
  return (
    <div
      className="ui footer fluid center aligned segment"
      style={{ color: "black", height: "4rem" }}
    >
      <p className="ui text center aligned" style={{ fontSize: "20px" }}>
        Thank you for visiting my hike page. Info is based on personal
        experience and google.  All pictures were taken by myself (Michael Wilson)
        <span style={{float: "right"}}>
          <a href="https://www.instagram.com/explodingsnes">
          <i class="instagram icon large"></i>
            </a></span>
      </p>
    </div>
  );
}
