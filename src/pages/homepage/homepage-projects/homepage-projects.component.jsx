import React from 'react'

import { useNavigate } from 'react-router-dom';

import handleScroll from '../handleScroll-function'

const HomepageProjects = ({url}) =>{
    const navigate = useNavigate();
    const {up, down} = url
  
    return (
        <div className="homepage-projects"
            onWheel={e => handleScroll(e, up, down, navigate)}
        >
            <h1>Projects Page</h1>
        </div>    
    )
}


export default  HomepageProjects