import React from "react";
import SessionLength from "./SessionLength";
import BreakLength from "./BreakLength";
import Session from "./Session";
import { FaTwitter, FaFreeCodeCamp, FaGithubSquare } from "react-icons/fa";

const App = () => {
  return (
    <div id="app">
      <h1 id="project-title">
        <u>25 + 5 Clock</u>{" "}
      </h1>
      <div id="length-container">
        <SessionLength />
        <BreakLength />
      </div>
      <Session />
      <footer>
        <p>
          Designed by{" "}
          <a href="mailto:croy4744@gmail.com" id="check">
            {" "}
            Chandan Roy
          </a>
        </p>

        <p>
          {" "}
          <a
            href="https://github.com/croy47/Pomodoro-Timer"
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            Source Code
          </a>
        </p>
        <div>
          <a
            href="https://twitter.com/chandan_py_js"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="contact-icons" />
          </a>
          <a
            href="https://www.freecodecamp.org/croy4744"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFreeCodeCamp className="contact-icons" />
          </a>

          <a
            href="https://github.com/croy47/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="contact-icons" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
