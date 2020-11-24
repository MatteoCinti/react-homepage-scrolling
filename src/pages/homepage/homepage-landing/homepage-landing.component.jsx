import React from 'react'

import { useNavigate } from 'react-router-dom';

import handleScroll from '../handleScroll-function'

const LandingPage = ({url}) =>{
    const navigate = useNavigate();
    const {up, down} = url
  
    return (
        <div className="homepage-landing"
            onWheel={e => handleScroll(e, up, down, navigate)}
        >
            <h1>Landing Page</h1>
        </div>    
    )
}


export default  LandingPage