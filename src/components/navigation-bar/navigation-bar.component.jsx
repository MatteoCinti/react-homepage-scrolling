import React from "react";
import { Link } from "react-router-dom";

import Menu from "../menu/menu.component";
import MenuToggle from "../menu-toggle/menu-toggle.component";
import { ReactComponent as Logotype } from "../../assets/logo/dunderdog.svg";

import "./navigation-bar.styles.scss";

const NavigationBar = () => (
  <div className="navigation-bar">
    <Link to="/">
      <Logotype className="logotype" />
    </Link>
    <Menu />
    <MenuToggle />
  </div>
);

export default NavigationBar;
