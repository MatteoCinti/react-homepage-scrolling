import React from "react";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { handleScroll, handleArrowScroll } from '../../../utilities/handleScroll-function'

import video1 from "../../../assets/videos/anima2-2.mp4";

import "./homepage-process.styles.scss";


function HomepageProcess({ url }) {
  return (
    <motion.div
        exit={{opacity:0}} 
       className="homepageprocess"
    >
      <div className="hp-p-wrapper">
        <div className="hp-p-texts">
          <div className="hp-p-text1">What process do you follow?</div>
          <div className="hp-p-text2">Process!</div>
          <div className="hp-p-text3">
            Well at <span>Dunderdog</span> there is <span>no general</span> set
            in stone <span>process.</span> It starts with “What if?” And
            becomes, “Wouldn’t it be cool if?” Then it turns into, “Now that’s
            cool!” Ideas are ideas. We believe every product exists within a
            different context and that is why <span>we create</span> a{" "}
            <span>tailored design process</span> specifically for your idea.
          </div>
        </div>
        <div className="hp-p-animation">
          <video src={video1} autoPlay={true} loop muted />
        </div>
      </div>
    </motion.div>
  );
}

export default HomepageProcess;
