import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import { handleScroll, HandleHomepageRouting } from '../handleScroll-function'

const LandingPage = ({url}) =>{
    const navigate = useNavigate();
    const {up, down} = url

    HandleHomepageRouting(up, down, navigate, 'landing');
    

    return (
        <div className="homepage-landing"
            onWheel={e => handleScroll(e, up, down, navigate)}
            // onKeyUp={e => handleArrowScroll(e, up, down, navigate)}
            // tabIndex={0}
        >
            <h1>Landing Page</h1>
        </div>    
    )
}


export default  LandingPage