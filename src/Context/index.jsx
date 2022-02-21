import React, { useState, createContext } from "react";

export const QuizContext = createContext();

function ContextProvider(props) {
  const [isQuizStarted, setQuizStarted] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [minutes, setMinutes] = useState();
  const [mode, setMode] = useState(0);

  const value = {
    isQuizStarted,
    setQuizStarted,
    isActive,
    setIsActive, 
    minutes,
    setMinutes,
    mode,
    setMode
  };

  return (
    <QuizContext.Provider value={value}>{props.children}</QuizContext.Provider>
  );
}

export default ContextProvider;
