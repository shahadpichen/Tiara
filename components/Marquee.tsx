import React from "react";

function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee__group">
        <span>tiara. </span>
        <span>tiara. </span>
        <span>tiara. </span>
      </div>
      <div className="marquee__group" aria-hidden="true">
        <span>tiara. </span>
        <span>tiara. </span>
        <span>tiara. </span>
      </div>
    </div>
  );
}

export default Marquee;
