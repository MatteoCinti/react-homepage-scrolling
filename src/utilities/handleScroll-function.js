const handleScroll = (e, up, down, navigate, scrollDirection, toggleScrollDirection) => {
    if (e.deltaY < 0) {
            e.preventDefault()
            toggleScrollDirection('up');
            return(
                navigate(up)
            )
    } else if (e.deltaY > 0) {
        e.preventDefault()
        toggleScrollDirection('down');
        return(
            navigate(down)
        )    
    }     
}

const handleArrowScroll = (e, up, down, navigate, scrollDirection, toggleScrollDirection) => {
    setTimeout(function(){ 
        if (e.keyCode === 38) {
            toggleScrollDirection('up');
            return(
                navigate(up)
            )
        } else if (e.keyCode === 40){
            toggleScrollDirection('down');
            return(
                navigate(down)
            )
        }
    }, 30)
}

// const HandleHomepageRouting = (up, down, navigate, section) => {
//     useEffect( () => {
//     window.addEventListener('wheel', e => {
//         handleScroll(e, up, down, navigate)
//     })
//     window.addEventListener('keydown', e => {
//         console.log(`mounted ${section}`)
//         handleArrowScroll(e, up, down, navigate)
//     }, false)
//     return () => {
//         window.removeEventListener('wheel', e => {
//             handleScroll(e, up, down, navigate)
//         })
//         console.log(`unmounted ${section}`)
//         window.removeEventListener('keydown', e => {
//             handleArrowScroll(e, up, down, navigate)
//         })
//     }
// }, []) 
// }


export { handleScroll, handleArrowScroll }
