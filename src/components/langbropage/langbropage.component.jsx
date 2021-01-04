import React from "react";
import "./langbropage.styles.scss";

import chef from "../../assets/image/chef.png";
import icon from "../../assets/image/visitweb.png";

function LangbroPage() {
  return (
    <div className="langbro-page">
      <div className="lbpage-wrapper">
        <div className="lbpage-texts">
          <div className="lbpage-header">
            “We are proud to{" "}
            <span style={{ color: "#F8F025" }}>contribute</span> to{" "}
            <span style={{ color: "#EEBECE" }}>Langbro</span> Success”
          </div>
          <div className="lbpage-text1">
            Långbro Värdshus is restaurant open 24 hours and they serve our
            customers good food based on the flavors and ingredients of the
            season.
          </div>
          <div className="lbpage-text2">
            Role - Branding, Web design and Lead generation
          </div>
        </div>
        <div className="lbpage-images">
          <div className="lbpage-image">
            <img src={chef} alt="" />
          </div>
          <div className="lbpage-icon">
            <img src={icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LangbroPage;
