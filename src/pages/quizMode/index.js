import React, { useContext } from "react";

import "./index.css";
import { modes } from "../../db/questionDb";
import { QuizContext } from "../../Context/index";
import { useNavigate } from "react-router-dom";

function Quizmode() {
  const navigate = useNavigate();
  const { setMode, setQuizStarted } = useContext(QuizContext);

  function handlemode(mode) {
    setMode(modes.findIndex((mod) => mod === mode));
    setQuizStarted(true);
    navigate("/quiz");
  }
  return (
    <div className="quizmodeContainer">
      <div className="quizmodeModel">
        <h1>Quizmode</h1>
        <div className="modebtnWrapper">
          <button className="easymodeBtn" onClick={() => handlemode("EASY")}>
            Easy
          </button>
          <button className="mediummodeBtn" onClick={() => handlemode("MEDIUM")}>
            Medium
          </button>
          <button className="hardmodeBtn" onClick={() => handlemode("HARD")}>
            Hard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quizmode;
