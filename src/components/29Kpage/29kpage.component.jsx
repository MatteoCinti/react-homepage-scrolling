import React from "react";
import "./29kpage.styles.scss";

import mobile from "../../assets/image/mobile.png";
import vistapp from "../../assets/image/vistapp.png";

function TwentyNinePage() {
  return (
    <div className="page-on-click">
      <div className="wrapper-whole">
        <div className="col-sm-4 texts-wrapper">
          <div className="text-onclick1">
            “We are proud to{" "}
            <span style={{ color: "#F8F025" }}>contribute</span> to{" "}
            <span style={{ color: "#EEBECE" }}>29k</span> wellbeing”
          </div>
          <br />
          <div className="text-onclick2">
            The world's first personal growth programs combining the best
            science based tools with live group conversations - made available
            wherever you are, whenever you need it.
          </div>
          <br />
          <div className="text-onclick3">
            Role - Branding, Web design and Lead generation
          </div>
        </div>
        <div className="vist-icon">
          <img src={vistapp} alt="" />
        </div>
        <div className="mobile-image">
          <img src={mobile} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TwentyNinePage;
