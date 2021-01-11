import React from 'react';

import { Link } from 'react-router-dom'

import './menu.styles.scss'

const Menu = () => (
  <nav className='site-nav'>
    <div className="dropdown-links">
      <Link to="work">Work</Link>
      <Link to="contact">Contact</Link>
      <Link to="about">About Us</Link>
    </div>
  </nav>
)

export default Menu