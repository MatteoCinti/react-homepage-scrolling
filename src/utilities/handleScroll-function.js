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



export { handleScroll, handleArrowScroll }
