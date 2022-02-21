import React, { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { questions } from "../../db/questionDb";
import Option from "../../components/Option";
import { QuizContext } from "../../Context/index";

import "./index.css";

function Quiz() {
  const { setIsActive, mode} = useContext(QuizContext);
  const [selectedQuestion, setSelectedQuestion] = useState(mode*5);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  
  const isRightAnswer = (id) => {
    return questions[selectedQuestion].answer.id === id ? true : false;
  };
    
  useEffect(() => {
    localStorage.removeItem("userScore");
  }, []);

  function displayAnswer(id) {
    var co = document.getElementById(id);
    if (isRightAnswer(id) && disabled === false) {
      const score = Number(localStorage.getItem("userScore")) + 1;
      localStorage.setItem("userScore", score);
      setDisabled(true);
      co.style.backgroundColor = ('Green');
    } else {
      co.style.backgroundColor = ('Red');
    }

    if (selectedQuestion === questions.length - 1) {
      setTimeout(() => {
        setIsActive(false);
        setDisabled(false);
        navigate("/results");
      }, 1000);
    } else { 
      setTimeout(() => {
        co.style.backgroundColor = ('');
        setSelectedQuestion(selectedQuestion + 1);
        setDisabled(false);
      }, 1000);
    }
  }

  return (
    <div className="quizContainer">
      <div className="quizModel">
        <h2 className="quizeQuestion">
          {questions[selectedQuestion]?.questionText}
        </h2>
        {questions[selectedQuestion]?.options.map((option, index) => (
          <Fragment key={index}>
            <Option
              index={index}
              option={option}
              displayAnswer={displayAnswer}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
