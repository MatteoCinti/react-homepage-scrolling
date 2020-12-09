import React from 'react'

import {menuToggle} from './menu-toggler'
import './menu-toggle.styles.scss'

const MenuToggle = () =>(
  <div className="menu-toggle" 
    onClick={menuToggle}
  >
    <div className="hamburger"></div>
  </div>
)

export default MenuToggle