import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { QuizContext } from "../../../Context/index";

import "./index.css";

function Timer() {
  const { isQuizStarted, isActive, setIsActive, minutes, setMinutes } =
    useContext(QuizContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (isQuizStarted) {
      setMinutes(100);
      startTimer();
    }
  }, [isQuizStarted]);

  function startTimer() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    let interval = null;
    if (isActive && minutes > 0) {
      interval = setInterval(() => {
        setMinutes((minutes) => minutes - 1);
      }, 1000);
    } else if (minutes <= 0) {
      clearInterval(interval);
      setIsActive(false);
      navigate("/results");
    }
    return () => clearInterval(interval);
  }, [isActive, minutes]);

  return (
    <div>
      <p className="timer"> Time:{minutes} </p>
    </div>
  );
}

export default Timer;
