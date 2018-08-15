import React, { Component } from "react";

const About = () => (
  <section className="about" id="about">
    <div className="box-container">
      <div className="info-container">
        <div className="img-container">
          <img
            src="../../asset/img/pro-pic.jpg"
            alt=""
            height="85"
            width="85"
          />
        </div>
        <div className="text-box">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
