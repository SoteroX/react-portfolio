import React, { Component } from "react";
import WOW from "wowjs";
//Should import images like this instead of using public
// import proPic from '../../../asset/img/pro-pic.jpg';

class About extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  render() {
    return (
      <section className="about" id="about">
        <div className="box-container">
          <div className="info-container">
            <div className="img-container">
              <img
                src={process.env.PUBLIC_UR + "../../asset/img/pro-pic.jpg"}
                alt=""
                height="85"
                width="85"
                className="wow bounceInDown"
                data-wow-delay="1s"
              />
            </div>
            <div className="social-icon wow bounceInDown" data-wow-delay="1s">
              <i className="fab fa-twitter-square" />
              <i className="fab fa-github-square" />
              <i className="fab fa-linkedin" />
            </div>
            <div
              className="wow slideInLeft"
              data-wow-offset="10"
              data-wow-delay="2s"
            >
              <div className="text-box">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
