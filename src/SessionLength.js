import React from "react";
import { TiArrowDownThick, TiArrowUpThick } from "react-icons/ti";
import { useGlobalContext } from "./Context";

const SessionLength = () => {
  const { sessionLength, increase, decrease } = useGlobalContext();
  return (
    <div className="length">
      <p id="session-label">Session Length</p>
      <div className="container">
        <button
          id="session-decrement"
          className="icon-container"
          onClick={(e) => decrease(e.target.closest("button").id)}
        >
          <TiArrowDownThick className="icon" />
        </button>
        <p id="session-length" className="string">{`${sessionLength}`}</p>
        <button
          id="session-increment"
          className="icon-container"
          onClick={(e) => increase(e.target.closest("button").id)}
        >
          <TiArrowUpThick className="icon" />
        </button>
      </div>
    </div>
  );
};

export default SessionLength;
