import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    return (
      <h1>
        <i
          className={`Die fas fa-dice-${this.props.face} ${
            this.props.rolling ? "shaking" : ""
          }`}
        />
      </h1>
    );
  }
}
export default Die;
