import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import { handleScroll, HandleHomepageRouting } from '../handleScroll-function'

const HomepageContact = ({url}) => {
    const navigate = useNavigate();
    const {up, down} = url

    HandleHomepageRouting(up, down, navigate, 'contact');

    return (
        <div className="homepage-contact"
            onWheel={e => handleScroll(e, up, down, navigate)}
            // onKeyUp={e => handleArrowScroll(e, up, down, navigate)}
            // tabIndex={0}
        >
            <h1>Contact Page</h1>
        </div>    
    )
}


export default  HomepageContact