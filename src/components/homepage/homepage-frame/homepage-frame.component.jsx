import React from 'react'
import { useNavigate } from 'react-router-dom';

import { handleScroll, handleArrowScroll, HandleHomepageRouting } from '../../../utilities/handleScroll-function'



const HomepageFrame = ({url, children, section}) =>{
  const navigate = useNavigate();
  const {up, down} = url

  // HandleHomepageRouting(up, down, navigate,section);
 
  return (
      <div
        className={`${section ? `homepage-${section}` : '' } homepage-section`}
        onWheel={e => handleScroll(e, up, down, navigate)}
        onKeyDown={e => handleArrowScroll(e, up, down, navigate)}
        tabIndex={0}
      >
        {children}
      </div> 
  )
}

export default HomepageFrame