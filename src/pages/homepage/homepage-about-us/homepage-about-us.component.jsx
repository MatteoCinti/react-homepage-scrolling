import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import { handleScroll, handleArrowScroll } from '../handleScroll-function'

const HomepageAboutUs = ({url}) =>{
    const navigate = useNavigate();
    const {up, down} = url

    useEffect( () => {
        // document.addEventListener('wheel', e => {
        //     handleScroll(e, up, down, navigate)
        // })
        document.addEventListener('keyup', e => {
            handleArrowScroll(e, up, down, navigate)
        })
        return () => {
            // document.removeEventListener('wheel', e => {
            //     handleScroll(e, up, down, navigate)
            // })
            document.removeEventListener('keyup', e => {
                handleArrowScroll(e, up, down, navigate)
            })
        }
    }, [] )  
  
    return (
        <div className="homepage-about"
            onWheel={e => handleScroll(e, up, down, navigate)}
            // onKeyPress={e => handleArrowScroll(e, up, down, navigate)}
        >
            <h1>About Us Page</h1>
        </div>    
    )
}


export default  HomepageAboutUs