import React from 'react'
import { useNavigate } from 'react-router-dom';

import { handleScroll, HandleHomepageRouting } from '../handleScroll-function'

const HomepageProcess = ({url}) => {
    const navigate = useNavigate();
    const {up, down} = url

    HandleHomepageRouting(up, down, navigate, 'process');

    return (
        <div className="homepage-process"
            onWheel={e => handleScroll(e, up, down, navigate)}
            // onKeyUp={e => handleArrowScroll(e, up, down, navigate)}
            // tabIndex={0}
        >
            <h1>Process Page</h1>
        </div>    
    )
}


export default  HomepageProcess