import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

function Result() {
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const inputRef = useRef(null);

  const updateUsers = () => {
  //  const userName = document.getElementById("userName").value;
  const userName = inputRef.current.value;
   
    if (userName.length === 0) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
      const userData = {
        name: userName,
        score: Number(localStorage.getItem("userScore")),
      };
      const usersList = JSON.parse(localStorage.getItem("usersList")) || [];

      const isUserExists =
        usersList.find(
          (user) => user.name.toLowerCase() === userName.toLowerCase()
        ) || "";
      if (isUserExists) {
        setShowError(true);
      } else {
        usersList.push(userData);
        localStorage.setItem("usersList", JSON.stringify(usersList));
        navigate("/high_score");
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
          <input type="text" className="input" ref={inputRef} />
          <button className="submitBtn">Submit</button>
        </form>
        <div>
          {showError && (
            <p className="errorMessage"> please enter a unique name </p>
          )}
          {showMessage && (
            <p className="errorMessage1"> please enter the initials </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Result;
