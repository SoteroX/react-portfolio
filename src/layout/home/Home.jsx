import React, { Component } from "react";
import HeadSection from "./HeadSection.jsx";
import About from "./about/About.jsx";
import Project from "./project/Project.jsx";
import Contact from "./contact/Contact.jsx";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <HeadSection />
        <About />
        <Project />
        <Contact />
      </React.Fragment>
    );
  }
}

export default Home;
