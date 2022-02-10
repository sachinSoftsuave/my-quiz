import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

function Result() {
  let navigate = useNavigate();
  let [showError, setShowError] = useState(false);
  let [showMessage, setShowMessage] = useState(false);

  const updateUsers = () => {
    const userName = document.getElementById("userName").value;
    if (userName.length === 0) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
      const userData = {
        name: userName,
        score: Number(localStorage.getItem("userScore")),
      };
      let usersList = JSON.parse(localStorage.getItem("usersList")) || [];

      const isUserExists =
        usersList.find(
          (user) => user.name.toLowerCase() === userName.toLowerCase()
        ) || "";
      if (isUserExists) {
        console.log("user exists");
        setShowError(true);
      } else {
        usersList.push(userData);
        localStorage.setItem("usersList", JSON.stringify(usersList));
        navigate("/highscore");
      }
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    setShowError(false);
    updateUsers();
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
        <div>
          {showError === true ? (
            <p className="errorMessage"> please enter a unique name </p>
          ) : (
            <div></div>
          )}
          {showMessage === true ? (
            <p className="errorMessage"> please enter the initials </p>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Result;
