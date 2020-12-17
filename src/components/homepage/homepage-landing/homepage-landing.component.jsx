import React from "react";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { handleScroll, handleArrowScroll } from '../../../utilities/handleScroll-function'

import MyCarousel from "../../carousel/carousel.component";

const HomepageLanding = ({ url }) => {
  return(
    <motion.div 
      exit={{opacity:0}}
    >
      <MyCarousel />
    </motion.div>
)}
export default HomepageLanding;
