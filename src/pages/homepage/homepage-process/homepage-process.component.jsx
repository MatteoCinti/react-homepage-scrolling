import React from 'react'

import { useNavigate } from 'react-router-dom';

import handleScroll from '../handleScroll-function'

const HomepageProcess = ({url}) => {
    const navigate = useNavigate();
    const {up, down} = url

    return (
        <div className="homepage-process"
            onWheel={e => handleScroll(e, up, down, navigate)}
        >
            <h1>Process Page</h1>
        </div>    
    )
}


export default  HomepageProcess