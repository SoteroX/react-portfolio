import React, { Component } from 'react';
// Imported Custom Components
import NavbarWrapper from "./components/navbar/NavbarWrapper.jsx";
import Home from "./layout/home/Home.jsx";
//Styles
import "./styles/styles.scss";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavbarWrapper />

        <Home />
      </div>
    );
  }
}

export default App;
