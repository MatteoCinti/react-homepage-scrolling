import React from "react";

import { Link } from "react-router-dom";

import "./menu.styles.scss";

const Menu = () => (
  <nav className="site-nav">
    <div className="dropdown-links">
      <Link to="/home/projects">Work</Link>
      <Link to="/home/contact">Contact</Link>
      <Link to="home/about-us">About Us</Link>
    </div>
  </nav>
);

export default Menu;
