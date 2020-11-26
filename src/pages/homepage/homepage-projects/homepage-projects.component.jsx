import React from 'react'
import { useNavigate } from 'react-router-dom';

import { handleScroll, HandleHomepageRouting } from '../handleScroll-function'

const HomepageProjects = ({url}) =>{
    const navigate = useNavigate();
    const {up, down} = url

    HandleHomepageRouting(up, down, navigate, 'projects');
   
    return (
        <div className="homepage-projects"
            onWheel={e => handleScroll(e, up, down, navigate)}
            // onKeyUp={e => handleArrowScroll(e, up, down, navigate)}
            // tabIndex={0}
        >
            <h1>Projects Page</h1>
        </div>    
    )
}


export default  HomepageProjects