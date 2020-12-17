import React from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { handleScroll, handleArrowScroll } from '../../../utilities/handleScroll-function'

const HomepageAboutUs = ({url}) => { 
  return (
    <motion.div 
      exit={{opacity: 0}}
    >
      <h1>About Us Page</h1>
    </motion.div>        
  )}


export default  HomepageAboutUs