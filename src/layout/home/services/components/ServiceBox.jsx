import React, { Component } from "react";

class ServiceBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="service-box">
        <div className="icon-box">
          <i className={this.props.icon} />
        </div>
        <hr className="line-through" />
        <div className="text-box">{this.props.children}</div>
      </div>
    );
  }
}

export default ServiceBox;
