import React from "react";
import { useNavigate } from "react-router-dom";
import "./highscore.css";

function HighScore() {
  let navigate = useNavigate();

  function goback() {
    navigate("../");
  }
  return (
    <div className="score">
      <h1>Highscores</h1>
      <div className="btn-wrapper">
        <button className="back-btn" onClick={goback}>
          {" "}
          GoBack
        </button>
        <button className="clear-btn">Clear Highscore</button>
      </div>
    </div>
  );
}

export default HighScore;
