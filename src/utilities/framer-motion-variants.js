const transition = { duration: 1.3, ease: [0.43, 0.13, 0.23, 0.6]}

const pageTransitionUp = {
  initial: { opacity: 0, y: -400 },
  animate: { opacity: 1, y: 0, transition: {duration: 2, ease:[0.25, 1, 0.5, 1]} },
  exit: { opacity: 0, y: 400 },
  transition: { transition } 
}
const pageTransitionDown = {
  initial: { opacity: 0, y: +400 },
  animate: { opacity: 1, y: 0, transition: {duration: 2, ease:[0.25, 1, 0.5, 1]} },
  exit: { opacity: 0, y: -400 },
  transition: { transition } 
}

export { pageTransitionDown, pageTransitionUp }

