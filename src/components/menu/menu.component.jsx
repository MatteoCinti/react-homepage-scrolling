import React from 'react';

import { ReactComponent as Imagotype} from '../../assets/logo/doubleD-logo.svg'
import { Link, } from 'react-router-dom'

import './menu.styles.scss'

const Menu = () => (
  <nav className='site-nav'>
    {/* <ul className='dropdown-menu'>
      <li><a href="">Work</a></li>
      <li><a href="">Contact</a></li>
      <li><a href="">About Us</a></li>
    </ul> */}
    <div className="dropdown-links">
      <Link to="work">Work</Link>
      <Link to="contact">Contact</Link>
      <Link to="about">About Us</Link>
    </div>
    <Imagotype className='imagotype'/>
  </nav>
)

export default Menu