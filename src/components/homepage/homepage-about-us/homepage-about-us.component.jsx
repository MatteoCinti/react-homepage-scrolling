import React from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { handleScroll, handleArrowScroll } from '../../../utilities/handleScroll-function'

import underline from "../../../assets/image/Group 75.png";
import video2 from "../../../assets/videos/anima1-2.mp4";


function HomepageAboutUs({ url }) {
  return (
     <motion.div 
      exit={{opacity: 0}} 
      className="homepageaboutus"
     >
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
            <a href="https://test.dunderdog.net/home/about-us">
              Know more
              <img src={underline} alt=""></img>
            </a>
          </div>
        </div>
        <div className="hp-au-animation">
          <video src={video2} autoPlay={true} loop muted />
        </div>
      </div>
    </motion.div>
  );
}

export default HomepageAboutUs;
