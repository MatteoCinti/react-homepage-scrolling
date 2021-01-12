import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  pageTransitionUp,
  pageTransitionDown,
} from "../../../utilities/framer-motion-variants";

import video2 from "../../../assets/videos/anima1-2.mp4";
import "./homepage-about-us.styles.scss";
import { ScrollContext } from "../../../utilities/scrollContext";
import Button from "../../buttons/link-button/link-button.component";

function HomepageAboutUs({ url }) {
  const { scrollDirection } = useContext(ScrollContext);
  let pageTransition =
    scrollDirection === "up" ? pageTransitionUp : pageTransitionDown;

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      transition="transition"
      className="homepageaboutus"
    >
      <div className="hp-au-texts">
        <div className="hp-au-text1">Traditional, mundane....</div>
        <div className="hp-au-text2">Who are we?</div>
        <div className="hp-au-text3">
          <span>
            Bunch of <span>creative</span> people
          </span>{" "}
          based in Sweden. We call ourselves Dunderdog - a design, development,
          and strategy firm. We dare to be different and so we work every second
          to light sparks in our clients and their user's hearts, by creatively
          balancing their needs, with a team of innovators in a unique
          non-hierarchical environment.
        </div>
        <div className="hp-au-subtitle">
          <Button section="Know more" />
          {/* <Link to="/home/about-us">
          </Link> */}
        </div>
      </div>
      <div className="hp-au-animation">
        <video src={video2} autoPlay={true} loop muted />
      </div>
    </motion.div>
  );
}

export default HomepageAboutUs;
