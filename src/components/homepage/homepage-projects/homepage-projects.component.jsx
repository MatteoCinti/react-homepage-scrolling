import React from "react";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { handleScroll, handleArrowScroll } from '../../../utilities/handleScroll-function'
import Projects from "../../projects/projects.component";

const HomepageProjects = ({ url }) => {
  return (
    <motion.div 
      exit={{opacity:0}}
    >
      <Projects />
    </motion.div>
)};

export default HomepageProjects;
