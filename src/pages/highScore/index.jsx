import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function HighScore() {
  let navigate = useNavigate();

  function goback() {
    navigate("../");
  }
  return (
    <div className="scoreContainer">
      <div className="modelHighScore">
        <h1>Highscores</h1>
        <div className="btnWrapper">
          <button className="back-btn" onClick={goback}>
            GoBack
          </button>
          <button className="clear-btn">Clear Highscore</button>
        </div>
      </div>
    </div>
  );
}

export default HighScore;
