import React, { useContext } from "react";
import { motion } from 'framer-motion';
import { pageTransitionUp, pageTransitionDown } from '../../../utilities/framer-motion-variants';

import Button from '../../buttons/link-button/link-button.component'
import { ReactComponent as DesignAndDevelopmentLogotype } from '../../../assets/logo/design_and_development.svg'
import { ReactComponent as Imagotype } from '../../../assets/logo/imagotype.svg'

import "./homepage-contact.styles.scss";
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
      {/* <h1 className="display-text sliding-text sliding-text-start">
        DESIGN & DEVELOPMENT
      </h1>
      <h1 className="display-text sliding-text sliding-text-2">
        DESIGN & DEVELOPMENT
      </h1>
      <h1 className="display-text sliding-text sliding-text-3">
        DESIGN & DEVELOPMENT
      </h1> */}
      <DesignAndDevelopmentLogotype className="sliding-text" viewBox="60 55" preserveAspectRatio={true.toString()}/>
    </div>
    <div  className="bottom-half-background">
      <Imagotype className="imagotype landing-contact-imagotype"/>
      <p className="subtitle">
        Want to make something great,
      </p>
      <Button section="Let 's talk"/>  
    </div>
  </motion.div>
)};

export default HomepageContact;
