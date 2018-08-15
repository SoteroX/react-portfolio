import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import Backdrop from "./backdrop/Backdrop.jsx";
import SideDrawer from "./sidedrawer/SideDrawer.jsx";

class NavbarWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideDrawerOpen: false
    };

    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
  }

  drawerToggleClickHandler() {
    this.setState(prevState => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      };
    });
  }

  backdropClickHandler() {
    this.setState({ sideDrawerOpen: false });
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div>
        <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
    );
  }
}

export default NavbarWrapper;
