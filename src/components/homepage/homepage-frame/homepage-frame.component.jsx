import React, { useEffect } from "react";

import { AnimatePresence, usePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

import {
  handleScroll,
  handleArrowScroll,
} from "../../../utilities/handleScroll-function";

const transition = { duration: 3, ease: [0.43, 0.13, 0.23, 0.6] };

const HomepageFrame = ({ url, children, section }) => {
  const navigate = useNavigate();
  const { up, down } = url;

  const Handler = debounce(handleScroll, 50);

  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000);
  }, [isPresent]);

  return (
    <div
      className={`${section ? `homepage-${section}` : ""} homepage-section`}
      onWheel={(e) => {
        e.persist();
        Handler(e, up, down, navigate);
      }}
      onKeyDown={(e) => handleArrowScroll(e, up, down, navigate)}
      tabIndex={0}
    >
      <AnimatePresence initial={false} exitBeforeEnter>
        {children}
      </AnimatePresence>
    </div>
  );
};

export default HomepageFrame;
