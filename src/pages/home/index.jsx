import React, { useContext } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../../hooks/context";

function Home() {
  let navigate = useNavigate();
  const {setQuizStarted} = useContext(QuizContext);

  function handleStart() {
    setQuizStarted(true)
    navigate("/quiz");
  }

  return (
    <div className="homeContainer">
      <div className="modelHome">
        <h1 className='titleText'>Coding Quiz Challenge</h1>
        <p className="subTitleText1">
          Try to answer to code-related question within the timelimit
        </p>
        <p className="subTitleText2">
          Keep in mind that incorrect answers will penalize your score/time by
          ten seconds
        </p>
        <div className="startBtnContainer">
          <button className="startBtn" onClick={handleStart}>
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
