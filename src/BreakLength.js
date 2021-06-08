import React from "react";
import { TiArrowDownThick, TiArrowUpThick } from "react-icons/ti";

import { useGlobalContext } from "./Context";

const BreakLength = () => {
  const { breakLength, decrease, increase } = useGlobalContext();

  //local variable to get id
  return (
    <div className="length">
      <p id="break-label">Break Length</p>
      <div className="container">
        <button
          id="break-decrement"
          className="icon-container"
          onClick={(e) => decrease(e.target.closest("button").id)}
        >
          <TiArrowDownThick className="icon" />
        </button>
        <p id="break-length" className="string">
          {`${breakLength}`}
        </p>
        <button
          id="break-increment"
          className="icon-container"
          onClick={(e) => increase(e.target.closest("button").id)}
        >
          <TiArrowUpThick className="icon" />
        </button>
      </div>
    </div>
  );
};

export default BreakLength;
