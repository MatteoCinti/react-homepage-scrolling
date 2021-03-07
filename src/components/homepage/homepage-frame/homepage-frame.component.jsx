import React, { useContext } from "react";
import { AnimatePresence, usePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

import { ScrollContext } from '../../../utilities/scrollContext'
import { handleScroll, handleArrowScroll } from "../../../utilities/handleScroll-function";
import './homepage-frame.styles.scss'



const HomepageFrame = ({ url, children, section }, ...props) => {
  const navigate = useNavigate();
  const { up, down } = url;

  const Handler = debounce(handleScroll, 180);
  const { scrollDirection, toggleScrollDirection } = useContext(ScrollContext)

  return (
    <div
      className={`${section ? `homepage-${section}` : ""} homepage-section`}
      onWheel={(e) => {
        e.persist();
        Handler(e, up, down, navigate, scrollDirection, toggleScrollDirection);
      }}
      onKeyDown={(e) => handleArrowScroll(e, up, down, navigate, scrollDirection, toggleScrollDirection)}
      tabIndex={0}
    >
      <AnimatePresence initial={false} exitBeforeEnter>
        {children}
      </AnimatePresence>
    </div>
  );
};

export default HomepageFrame;
