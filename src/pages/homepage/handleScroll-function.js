import React, { useEffect } from 'react'

const handleScroll = (e, up, down, navigate) => {
    if (e.deltaY < 0) {
        console.log('scrolling up');
        return(
            navigate(up)
        )
    } else if (e.deltaY > 0) {
        console.log('scrolling down');
        return(
            navigate(down)
        )
    } 
}

const handleArrowScroll = (e, up, down, navigate) => {
    if (e.keyCode === 38) {
        console.log('keying up');
        return(
            navigate(up)
        )
    } else if (e.keyCode === 40){
        console.log('keying down');
        return(
            navigate(down)
        )
    }
}

const HandleHomepageRouting = (up, down, navigate, page) => {
            useEffect( () => {
            // window.addEventListener('wheel', e => {
            //     handleScroll(e, up, down, navigate)
            // })
            window.addEventListener('keydown', e => {
                console.log(`mounted ${page}`)
                handleArrowScroll(e, up, down, navigate)
            }, false)
            return () => {
                // window.removeEventListener('wheel', e => {
                //     handleScroll(e, up, down, navigate)
                // })
                console.log(`unmounted ${page}`)
                window.removeEventListener('keydown', e => {
                    handleArrowScroll(e, up, down, navigate)
                })
            }
        }, []) 
}


export { handleScroll, handleArrowScroll, HandleHomepageRouting }
