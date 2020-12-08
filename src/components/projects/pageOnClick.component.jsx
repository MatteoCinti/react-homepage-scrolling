import React from "react";
import "./pageOnClick.styles.scss";

import "bootstrap/dist/css/bootstrap.min.css";

import mobile from "./image/mobile.png";
import vistapp from "./image/vistapp.png";

function PageOnClick() {
  return (
    <div className="page-on-click">
      <div className="container-fluid">
        <div className="row">
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
          <div className="col-sm-1">
            <img src={vistapp} alt="" />
          </div>
          <div className="col-sm-5">
            <img src={mobile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageOnClick;
