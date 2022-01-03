import React from "react";
import HikeHeader from "../../../components/hikes/HikeHeader";
import HikeNavigation from "../../../components/hikes/HikeNavigation";
import HikingTrails from "../../../components/hikes/HikingTrails";

function Hikes() {
  return (
    <div className="ui" style={{ backgroundColor: "white", color: "black" }}>
      <HikeHeader />
      <HikeNavigation />
      <div className="ui three column stackable grid very relaxed padded">
        <HikingTrails />
      </div>
    </div>
  );
}

export default Hikes;
