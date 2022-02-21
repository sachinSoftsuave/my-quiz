import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

function Home() {
  const navigate = useNavigate();

  function handleStart() {
    navigate("/quizmode");
  }

  return (
    <div className="homeContainer">
      <div className="modelHome">
        <h1 className='titleText'>Coding Quiz Challenge</h1>
        <p className="subTitleText1">
          Try to answer to code-related question within the timelimit
        </p>
        <p className="subTitleText2">
          Keep in mind that incorrect answers will penalize your score/time 
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
