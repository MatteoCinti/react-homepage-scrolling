function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
      e.preventDefault();
    e.returnValue = false;  
  }

 
const handleScroll = (e, up, down, navigate) => {
    if (e.deltaY < 0) {
            console.log('scrolling up');
            e.preventDefault()
            return(
                navigate(up)
            )
    } else if (e.deltaY > 0) {
        console.log('scrolling down');
        e.preventDefault()
        return(
            navigate(down)
        )    
    }     
}

const handleArrowScroll = (e, up, down, navigate) => {
    setTimeout(function(){ 
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
