import React, {useEffect} from "react";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { handleScroll, handleArrowScroll } from '../../../utilities/handleScroll-function'

import "./homepage-contact.styles.scss";
const transition = { duration: 1.3, ease: [0.43, 0.13, 0.23, 0.6]}

const HomepageContact = ({ url }) => {
  return (
  <motion.div
    className = 'homepage-section'
    initial={{opacity: 0, y: -400}}
    animate={{ opacity: 1, y: 0, transition: {duration: 2, ease:[0.25, 1, 0.5, 1]} }}
    exit={{ opacity: 0, y: 400 }}
    transition={transition} 
  >
    <div className="top-half-background">
      <h1 className="display-text sliding-text sliding-text-start">
        DESIGN & DEVELOPMENT
      </h1>
      <h1 className="display-text sliding-text sliding-text-2">
        DESIGN & DEVELOPMENT
      </h1>
      <h1 className="display-text sliding-text sliding-text-3">
        DESIGN & DEVELOPMENT
      </h1>
    </div>
    <div  className="bottom-half-background">
      <p className="subtitle">
        So what do think. want to make something <br />
        great click on double D
      </p>
    </div>
  </motion.div>
)};

export default HomepageContact;
