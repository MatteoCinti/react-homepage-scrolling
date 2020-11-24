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
        )}
}

export default handleScroll