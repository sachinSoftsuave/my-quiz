import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

function Start() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("./page1");
  }

  return (
    <div className="start">
      <h1 className="line1">Coding Quiz Challenge</h1>
      <p className="line2">
        {" "}
        Try to answer to code-related question within the timelimit{" "}
      </p>
      <p className="line3">
        {" "}
        Keep in mind that incorrect answers will penalize your score/time by ten
        seconds
      </p>
      <button className="start-btn" onClick={handleClick}>
        {" "}
        Start Quiz{" "}
      </button>
    </div>
  );
}

export default Start;
