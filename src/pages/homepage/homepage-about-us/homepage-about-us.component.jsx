import React from 'react'

import { useNavigate } from 'react-router-dom';

import handleScroll from '../handleScroll-function'

const HomepageAboutUs = ({url}) =>{
    const navigate = useNavigate();
    const {up, down} = url
  
    return (
        <div className="homepage-about"
            onWheel={e => handleScroll(e, up, down, navigate)}
        >
            <h1>About Us Page</h1>
        </div>    
    )
}


export default  HomepageAboutUs