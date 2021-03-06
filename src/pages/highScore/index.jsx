import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { QuizContext } from "../../Context/index";

import "./index.css";

function HighScore() {
  const navigate = useNavigate();
  const [usersData, setUsersData] = useState(
    JSON.parse(localStorage.getItem("usersList")) || []
  );
  const { setQuizStarted, setMinutes } = useContext(QuizContext);
  function goback() {
    setMinutes();
    setQuizStarted(false);
    navigate("/");
  }

  const clearUserDetails = () => {
    localStorage.removeItem("usersList");
    setUsersData([]);
  };
  
  function compare( a, b ) {
    if ( a.score > b.score ){
      return -1;
    }
    if ( a.score < b.score ){
      return 1;
    }
    return 0;
  }

  usersData.sort(compare);

  return (
    <div className="scoreContainer">
      <div className="modelHighScore">
        <h1>Highscores</h1>
        {usersData.map((user, index) => (
          <div className="score" key={index}>
            <span>{`${index + 1}. ${user.name} - ${user.score}`}</span>
          </div>
        ))}
        <div className="btnWrapper">
          <button className="backBtn" onClick={goback}>
            GoBack
          </button>
          <button className="clearBtn" onClick={clearUserDetails}>
            Clear Highscore
          </button>
        </div>
      </div>
    </div>
  );
}

export default HighScore;
