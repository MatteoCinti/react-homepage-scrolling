import React, { useContext } from "react";
import { motion } from 'framer-motion';
import { pageTransitionUp, pageTransitionDown } from '../../../utilities/framer-motion-variants';

import Button from '../../buttons/link-button/link-button.component'

import "./homepage-projects.styles.scss";
import { ScrollContext } from '../../../utilities/scrollContext'

const HomepageContact = ({ url }) => {
  const { scrollDirection } = useContext(ScrollContext)
  let pageTransition = scrollDirection === 'up' ? pageTransitionUp : pageTransitionDown

  return (
  <motion.div
    variants={ pageTransition }
    initial="initial"
    animate="animate"
    exit="exit"
    transition="transition"
  >
    <div className="top-half-background">
    <div className="top-half-background">
      <h1 className="sliding-text">This is page 3. Scroll up or down.</h1>
    </div>
    </div>
    <div  className="bottom-half-background">
      <Button section="Button to pillar page 3"/>  
    </div>
  </motion.div>
)};

export default HomepageContact;
