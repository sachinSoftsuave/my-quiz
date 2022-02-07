import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

function Result() {
  let navigate = useNavigate();

  const updateUsers = () => {
    const userName = document.getElementById("userName").value;
    const userData = {
      name: userName,
      score: Number(localStorage.getItem("userScore")),
    };
    let usersList = JSON.parse(localStorage.getItem("usersList")) || [];
    usersList.push(userData);
    localStorage.setItem("usersList", JSON.stringify(usersList));
  };

  function handleSubmit() {
    updateUsers();
    navigate("/highscore");
  }
  return (
    <div className="resultsContainer">
      <div className="modelResults">
        <h1 className="headerText">All done!</h1>
        <p className="subHeaderText">
          Your final score is {Number(localStorage.getItem("userScore"))}
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <label className="label">Enter initials:</label>
          <input type="text" className="input" id="userName" />
          <button className="submitBtn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Result;
