import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import { handleScroll, handleArrowScroll } from '../handleScroll-function'

const HomepageProcess = ({url}) => {
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