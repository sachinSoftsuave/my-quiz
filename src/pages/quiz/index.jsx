import React, { Fragment, useEffect, useState } from "react";

import "./index.css";
import { questions } from "../../db/questionDb";
import Option from "../../components/Option";
import { useNavigate } from 'react-router-dom';

function Quiz() {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  let navigate = useNavigate();

  const isRighrAnswer = (id) => {
    return questions[selectedQuestion].answer.id === id ? true : false;
  };

  useEffect(() => {
    localStorage.removeItem("userScore")
  },[])

  function displayAnswer(id) {
    setSelectedAnswer(id);
    if (!isRighrAnswer(id)) {
      console.log("reduce timings by 10 sec");
    }
    else
    {
      const score = Number(localStorage.getItem("userScore")) + 1;
      localStorage.setItem("userScore", score)
    }
    if (selectedQuestion === questions.length - 1) {
      setTimeout(() => {
        setSelectedAnswer(questions.length - 1);
        navigate('../results')
      }, 1000);
    } else {
      setTimeout(() => {
        setSelectedAnswer("");
        setSelectedQuestion(selectedQuestion + 1);
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
        <div className="resultContainer">
          <p>
            {!!selectedAnswer.length &&
              (questions[selectedQuestion].answer.id === selectedAnswer
                ? "Correct!"
                : "Incorrect!")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
