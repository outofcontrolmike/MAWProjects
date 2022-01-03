import React from "react";
import HikeContent from "../../../components/hikes/HikeContent";
import HikeFooter from "../../../components/hikes/HikeFooter";
import HikeGPS from "../../../components/hikes/HikeGPS";
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
        <HikeContent />
        <HikeGPS />
      </div>

      <HikeFooter />
    </div>
  );
}

export default Hikes;
