import React, { useContext, useEffect, useReducer, useRef } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();
//Provider, Consumer

const initialState = {
  sessionLength: 25,
  breakLength: 5,
  timer: `25:00`,
  active: "Session",
  activate: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { timer, active, activate } = state;

  const timerRef = useRef(null);

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const reset = () => {
    let sound = document.getElementById("beep");
    sound.pause();
    sound.currentTime = 0;
    dispatch({ type: "RESET" });
  };

  const startStopSession = () => {
    dispatch({ type: "START_STOP_SESSION" });
  };

  const scheduleNext = (sessionName) => {
    sessionName = sessionName.toUpperCase();
    if (!timerRef.current) {
      timerRef.current = setTimeout(() => {
        timerRef.current = null;
        dispatch({ type: `UPDATE_${sessionName}` });
      }, 1000);
    }
  };
  const clearNextTimeOut = () => {
    clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  //

  useEffect(() => {
    if (!activate) {
      clearNextTimeOut();

      return;
    }
    //
    if (timer === "0:00") {
      let sound = document.getElementById("beep");
      sound.play();
      return dispatch({ type: "CHANGE_SESSION" });
    }
    //change active session_________________

    if (active === "Session") {
      scheduleNext(active);
    }
    if (active === "Break") {
      scheduleNext(active);
    } //___________________________
  }, [activate, active, timer]);

  return (
    <AppContext.Provider
      value={{ ...state, decrease, increase, reset, startStopSession }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
