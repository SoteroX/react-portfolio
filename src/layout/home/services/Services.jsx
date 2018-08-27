import React from "react";
import ServiceBox from "./components/ServiceBox";

const Services = () => (
  <section className="services">
    <div className="service-container">
      <ServiceBox icon="fas fa-laptop-code">
        <p>jajfkdasngkasnkhdbgkahbsdgkasdbgajnsdgkajs</p>
      </ServiceBox>
      <ServiceBox icon="fab fa-wordpress" />
      <ServiceBox icon="fas fa-mobile-alt" />
    </div>
  </section>
);

export default Services;
