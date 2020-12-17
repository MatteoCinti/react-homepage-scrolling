import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';

import { debounce } from 'lodash'
import { handleScroll, handleArrowScroll } from '../../../utilities/handleScroll-function'



const HomepageFrame = ({url, children, section}) =>{
  const navigate = useNavigate();
  const {up, down} = url

  const Handler = debounce( 
    handleScroll
  , 800)

  // HandleHomepageRouting(up, down, navigate,section);
 
  return (
      <div
        className={`${section ? `homepage-${section}` : '' } homepage-section`}
        onWheel={e => {
          e.persist()
          Handler(e, up, down, navigate)}}
        onKeyDown={e => handleArrowScroll(e, up, down, navigate)}
        tabIndex={0}
      >
        {children}
      </div> 
  )
}

export default HomepageFrame