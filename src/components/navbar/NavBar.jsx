import React, { Component } from "react";
import DrawerToggleButton from "./sidedrawer/DrawerToggleButton.jsx";

const NavBar = props => (
  <header className="navbar">
    <nav className="navbar-navi">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="navbar-logo">
        <a href="/">Code</a>
      </div>
      <div className="spacer" />
      <div className="navbar-navi-items">
        <ul>
          <li>
            <a href="#about">blank</a>
          </li>
          <li>
            <a href="/">blank</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;
