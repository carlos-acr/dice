import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    return (
      <h1>
        <i className={`Die fas fa-dice-${this.props.face}`} />
      </h1>
    );
  }
}
export default Die;
