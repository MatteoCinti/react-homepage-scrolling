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


export { handleScroll, handleArrowScroll }
