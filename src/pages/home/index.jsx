import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("./quiz");
  }

  return (
    <div className="homeContainer">
      <div className="modelHome">
        <h1 className="line1">Coding Quiz Challenge</h1>
        <p className="line2">
          Try to answer to code-related question within the timelimit
        </p>
        <p className="line3">
          Keep in mind that incorrect answers will penalize your score/time by
          ten seconds
        </p>
        <div className="startBtnContainer">
          <button className="start-btn" onClick={handleClick}>
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
