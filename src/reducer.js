// const initialState = {
//     sessionLength: 25min,
//   breakLength: 5min,
//   isSessionActive: false,
// };

let calcSession = function (state) {
  let mins = Number(state.timer.split(":")[0]);
  let seconds = Number(state.timer.split(":")[1]);
  if (seconds === 0) {
    seconds = 60;
    if (mins !== 0) {
      mins = mins - 1;
    }
  }
  seconds = seconds - 1;
  return `${mins}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
};

const reducer = (state, action) => {
  let updatedVal = calcSession(state);
  switch (action.type) {
    case "INCREASE": {
      const component = action.payload.split("-")[0];

      let intVal =
        state[`${component}Length`] === 60
          ? 60
          : state[`${component}Length`] + 1;

      return {
        ...state,
        [`${component}Length`]: intVal,
        timer: component === "session" ? `${intVal}:00` : state.timer,
      };
    }
    case "DECREASE": {
      const component = action.payload.split("-")[0];

      let intVal =
        state[`${component}Length`] === 1 ? 1 : state[`${component}Length`] - 1;

      return {
        ...state,
        [`${component}Length`]: intVal,
        timer: component === "session" ? `${intVal}:00` : state.timer,
      };
    }

    case "RESET":
      return {
        ...state,
        sessionLength: 25,
        breakLength: 5,
        timer: `25:00`,
        active: "Session",
        activate: false,
      };

    case "START_STOP_SESSION":
      return {
        ...state,
        activate: !state.activate,
      };

    case "UPDATE_SESSION":
      return {
        ...state,
        timer: updatedVal,
      };

    case "UPDATE_BREAK":
      return {
        ...state,
        timer: updatedVal,
      };

    case "CHANGE_SESSION":
      const session = state.active === "Session";
      // const breakS = state.active === "Break";

      return {
        ...state,
        active: session ? "Break" : "Session",
        timer: session
          ? `${state.breakLength}:00`
          : `${state.sessionLength}:00`, //gergergerg
      };
  }

  return { ...state };
};

export default reducer;
