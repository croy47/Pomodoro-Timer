import React from "react";
import { useGlobalContext } from "./Context";

const Session = () => {
  const { timer, reset, startStopSession, activate, active } =
    useGlobalContext();

  const formatTimer = (timer) => {
    let first = timer.split(":")[0];
    let second = timer.split(":")[1];

    if (first.length === 1) {
      first = `0${first}`;
    }

    return `${first}:${second}`;
  };
  let formattedTimer = formatTimer(timer);

  return (
    <div className="session length">
      <p id="timer-label">{active}</p>
      <p id="time-left">{formattedTimer}</p>
      <div id="control-btn-container">
        <button
          id="start_stop"
          className="control-btn"
          onClick={startStopSession}
        >
          {activate ? "Stop" : "Start"}
        </button>
        <button id="reset" className="control-btn" onClick={reset}>
          Reset
        </button>
      </div>
      <audio
        id="beep"
        src="https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
      ></audio>
    </div>
  );
};

export default Session;
