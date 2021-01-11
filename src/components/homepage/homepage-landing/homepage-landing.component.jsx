import React, { useContext } from "react";
import { motion } from 'framer-motion';
import { pageTransitionUp, pageTransitionDown } from '../../../utilities/framer-motion-variants';

import MyCarousel from "../../carousel/carousel.component";

import { ScrollContext } from '../../../utilities/scrollContext'

const HomepageLanding = ({ url }) => {
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
      <MyCarousel />
    </motion.div>
)}
export default HomepageLanding;
