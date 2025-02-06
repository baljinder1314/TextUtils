
import { createContext, useReducer, useState } from "react";

export const stored = createContext({
  handleUpperCase: () => {},
  handleLowerCase: () => {},
  text: "",
  handleOnChange: () => {},
  handleCopyText: () => {},
  handleToClearText: () => {},
  handleToCapitalize: () => {},
  handleToRemoveExtraSpaces: () => {},
  handleToggleMode: () => {},
  mode: "white",
  modeText: "",
  alert: "",
});

const reducerFun = (currectState, action) => {
  let newCurrentState = currectState;
  if (action.type === "ON_CHANGE") {
    newCurrentState = action.payload.event;
  } else if (action.type === "UPPER_CASE") {
    newCurrentState = currectState.toUpperCase();
  } else if (action.type === "CAPITALIZED") {
    newCurrentState =
      currectState.charAt(0).toUpperCase() + currectState.slice(1);
  } else if (action.type === "CLEAR_TEXT") {
    newCurrentState = document.querySelector("#floatingTextarea").value = "";
  } else if (action.type === "TOUPPERCASE") {
    newCurrentState = currectState.toLowerCase();
  } else if (action.type === "REMOVE_EXTRA_SPACES") {
    newCurrentState = currectState.replace(/ +/g, " ");
  }
  return newCurrentState;
};

export const ComponentContainer = ({ children }) => {
  const [text, dispatchText] = useReducer(reducerFun, "");
  const [modeText, setModeText] = useState("Enable Dark Mode");

  const [mode, setMode] = useState({
    backgroundColor: "white",
    color: "black",
  });

  const [alert, setAlert] = useState(null);

  const alertMsg = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  setInterval(() => {
    setAlert(null);
  }, 1500);
  const handleToggleMode = () => {
    if (mode.backgroundColor === "white") {
      setMode({ backgroundColor: "black", color: "white" });
      document.body.style.backgroundColor = "#000e2a";
      document.body.style.color = "white";
      setModeText("Enable Light Mode");
      alertMsg("Dark Mode Enabled", "success");
    } else {
      setMode({ backgroundColor: "white", color: "black" });
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setModeText("Enable Dark Mode");
      alertMsg("Light Mode Enabled", "success");
    }
  };

  const handleOnChange = (event) => {
    dispatchText({
      type: "ON_CHANGE",
      payload: {
        event: event.target.value,
      },
    });
  };
  const handleUpperCase = () => {
    dispatchText({
      type: "UPPER_CASE",
    });
    alertMsg("Uppercase", "success");
  };
  const handleToCapitalize = () => {
    dispatchText({
      type: "CAPITALIZED",
    });
    alertMsg("Capitalized", "success");
  };
  const handleToClearText = (event) => {
    dispatchText({
      type: "CLEAR_TEXT",
      payload: {
        event: event.target.value,
      },
    });
    alertMsg("Text cleared", "success");
  };
  
  const handleCopyText = () => {
    let newText = document.querySelector("#floatingTextarea");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    alertMsg("Copy to Clip Board", "success");
  };
  
  const handleLowerCase = () => {
    dispatchText({ type: "TOUPPERCASE" });
    alertMsg("Lowercased", "success");
  };
  
  const handleToRemoveExtraSpaces = () => {
    dispatchText({ type: "REMOVE_EXTRA_SPACES" });
    alertMsg("Removed Extra spaces", "success");
  };
  

  return (
    <stored.Provider
      value={{
        handleUpperCase: handleUpperCase,
        handleLowerCase: handleLowerCase,
        text: text,
        handleOnChange: handleOnChange,
        handleCopyText: handleCopyText,
        handleToClearText: handleToClearText,
        handleToCapitalize: handleToCapitalize,
        handleToRemoveExtraSpaces: handleToRemoveExtraSpaces,
        handleToggleMode: handleToggleMode,
        mode: mode,
        modeText: modeText,
        alert: alert,
      }}
    >
      {children}
    </stored.Provider>
  );
};
