import React from 'react'

import { useNavigate } from 'react-router-dom';

import handleScroll from '../handleScroll-function'

const HomepageContact = ({url}) => {
    const navigate = useNavigate();
    const {up, down} = url

    return (
        <div className="homepage-contact"
            onWheel={e => handleScroll(e, up, down, navigate)}
        >
            <h1>Contact Page</h1>
        </div>    
    )
}


export default  HomepageContact