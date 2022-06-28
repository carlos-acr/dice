import React, { Component } from "react";
import "./App.css";
import RollDice from "./Components/RollDice";
import RollDie from "./Components/RollDice";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RollDice />
      </div>
    );
  }
}

export default App;
