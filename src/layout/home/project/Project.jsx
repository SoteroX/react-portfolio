import React from "react";

const Project = () => (
  <section className="project">
    <div className="project-wrapper">
      <h1 className="project-header-text">Projects</h1>
      <div className="gallery-container">
        <div>
          <img src={process.env.PUBLIC_UR + "../../asset/img/coming-soon.png"} alt="" />
        </div>
        <div>
          <img src={process.env.PUBLIC_UR + "../../asset/img/coming-soon.png"}  alt="" />
        </div>
        <div className="vertical">
          <img src={process.env.PUBLIC_UR + "../../asset/img/coming-soon.png"}  alt="" />
        </div>
        <div className="big">
          <img src={process.env.PUBLIC_UR + "../../asset/img/coming-soon.png"}  alt="" />
        </div>
        <div>
          <img src={process.env.PUBLIC_UR + "../../asset/img/coming-soon.png"}  alt="" />
        </div>
      </div>
    </div>
  </section>
);

export default Project;
