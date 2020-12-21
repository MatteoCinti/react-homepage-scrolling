import React from "react";
import { Link } from "react-router-dom";
import "./homepage-about-us.styles.scss";

// const HomepageAboutUs = ({url}) => (
//     <React.Fragment>
//         <h1>About Us Page</h1>
//     </React.Fragment>
// )

function HomepageAboutUs({ url }) {
  return (
    <div className="homepageaboutus">
      <div className="hp-au-wrapper">
        <div className="hp-au-texts">
          <div className="hp-au-text1">Traditional, mundane....</div>
          <div className="hp-au-text2">Who are we?</div>
          <div className="hp-au-text3">
            <span>
              Bunch of <span>creative</span> people
            </span>{" "}
            based in Sweden. We call ourselves Dunderdog - a design,
            development, and strategy firm. We dare to be different and so we
            work every second to light sparks in our clients and their user's
            hearts, by creatively balancing their needs, with a team of
            innovators in a unique non-hierarchical environment.
          </div>
          <div className="hp-au-subtitle">
            <Link to="/home/about-us">
              Know more
              <img src={underline} alt=""></img>
            </Link>
          </div>
        </div>
        <div className="hp-au-animation">
          <video src={video2} autoPlay={true} loop muted />
        </div>
      </div>
    </div>
  );
}

export default HomepageAboutUs;
