import { useState, createContext } from "react";

export const QuizContext = createContext()

function Main(props) {
    const [isQuizStarted, setQuizStarted] = useState(false)

    const value = {
        isQuizStarted,
        setQuizStarted
    }

    return (
        <QuizContext.Provider value={value}>{props.children}</QuizContext.Provider>
    );
  }

  export default Main;