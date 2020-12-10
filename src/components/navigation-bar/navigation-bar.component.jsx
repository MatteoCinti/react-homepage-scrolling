import React from 'react'

import Menu from '../menu/menu.component'
import MenuToggle from '../menu-toggle/menu-toggle.component'
import { ReactComponent as Logotype } from '../../assets/logo/dunderdog.svg'

import './navigation-bar.styles.scss'

const NavigationBar = () => (
  <div className="navigation-bar">
    <Logotype className='logotype'/>
    <Menu />
    <MenuToggle />
  </div>
)

export default NavigationBar