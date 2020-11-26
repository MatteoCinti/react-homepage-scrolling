import React from 'react'
import { useNavigate } from 'react-router-dom';

import { handleScroll, HandleHomepageRouting } from '../handleScroll-function'

const HomepageAboutUs = ({url}) =>{
    const navigate = useNavigate();
    const {up, down} = url

    HandleHomepageRouting(up, down, navigate, 'about');  
  
    return (
        <div className="homepage-about"
            onWheel={e => handleScroll(e, up, down, navigate)}
            // onKeyUp={e => handleArrowScroll(e, up, down, navigate)}
            // tabIndex={0}
        >
            <h1>About Us Page</h1>
        </div>    
    )
}


export default  HomepageAboutUs