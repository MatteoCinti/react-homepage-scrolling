import React, { useState } from "react"
const ScrollContext = React.createContext('down');

const ScrollContextProvider = ({ children }) => {
  const [ scrollDirection, setScrollDirection ] = useState('down')

  const toggleScrollDirection = ( direction ) => (
    setScrollDirection(
      direction === 'down' ? 'down' : 'up'
    )
  )
  
  return (
    <ScrollContext.Provider value={{ scrollDirection: scrollDirection, toggleScrollDirection: toggleScrollDirection }}>
      {children}
    </ScrollContext.Provider>
)}


export { ScrollContextProvider, ScrollContext }