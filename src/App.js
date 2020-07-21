import React, { Component } from "react";
import Countdown from "./Countdown.js";
import logo from "./logo.svg";
import github from "./github.png";

class App extends Component {
  render() {
    const currentDate = new Date();
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>🎉🥂 Graduation Countdown 🥂🎉</h2>

          <a
            href="https://github.com/kristinbaumann/react-countdown"
            target="_blank"
          >
            <img src={github} alt="github" className="githubIcon" />
            <span>View on Github</span>
          </a>
        </div>

        <h3 className="title">Midnight of 2nd October, UTC time:</h3>
        <Countdown date={`${year}-10-02T00:00:00`} />
      </div>
    );
  }
}

export default App;
