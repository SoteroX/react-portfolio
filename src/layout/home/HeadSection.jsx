import React from "react";
import Typist from "react-typist";
const HeadSection = () => (
  <section className="head-section">
    <div className="text-wrapper">
      <div className="text-container">
        <div className="Typist">
          <Typist>
            <span> Hi. I'm </span>
            <span> Sotero</span>
            <Typist.Backspace count={6} delay={300} />
            <span>a Front-end developer</span>
            <Typist.Backspace count={19} delay={300} />
            <span>JavaScript developer</span>
            <Typist.Backspace count={20} delay={300} />
            <span>React developer</span>
          </Typist>
        </div>
      </div>
    </div>
  </section>
);

export default HeadSection;
