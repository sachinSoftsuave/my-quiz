import { useState, createContext } from "react";

export const QuizContext = createContext();

function Main(props) {
  const [isQuizStarted, setQuizStarted] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [minutes, setMinutes] = useState();

  const value = {
    isQuizStarted,
    setQuizStarted,
    isActive,
    setIsActive, 
    minutes,
    setMinutes, 
  };

  return (
    <QuizContext.Provider value={value}>{props.children}</QuizContext.Provider>
  );
}

export default Main;
