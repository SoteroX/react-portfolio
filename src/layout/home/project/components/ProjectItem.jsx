import React, { Component } from "react";

class ProjectItem extends Component {
  render() {
    return (
      <section className="spotlight">
        <span className="images">
          <img
            src={process.env.PUBLIC_UR + "../../asset/img/coming-soon.png"}
            alt=""
          />
        </span>
        <div className="content">
          <header>
            <h3>DevConnector</h3>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos magna fames ac
            turpis egestas amet non lorem amet.
          </p>
          <footer>
            <ul className="action">
              <li>
                <a href="#" className="project-button">
                  Demo
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </section>
    );
  }
}

export default ProjectItem;
