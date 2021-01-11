import React, { useContext } from "react";
import { motion } from 'framer-motion';
import { pageTransitionUp, pageTransitionDown } from '../../../utilities/framer-motion-variants';


import video1 from "../../../assets/videos/anima2-2.mp4";
import "./homepage-process.styles.scss";
import { ScrollContext } from '../../../utilities/scrollContext'


function HomepageProcess(props) {
  const { scrollDirection } = useContext(ScrollContext)
  let pageTransition = scrollDirection === 'up' ? pageTransitionUp : pageTransitionDown

  return (
    <motion.div
      variants={ pageTransition }
      initial="initial"
      animate="animate"
      exit="exit"
      transition="transition" 
      className="homepageprocess"
    >
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
    </motion.div>
  );
}

export default HomepageProcess;





