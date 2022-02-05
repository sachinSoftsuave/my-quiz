import React, {useState } from 'react';
import './index.css'
function Page1(){
  const [selectedQuestion, setSelectedQuestion] = useState(0);

    const questions = [
        {
          questionText: "Commonly used data types DO NOT include:",
          options:[
            {id: "1", value:"strings"},
            {id: "2", value:"booleans"},
            {id: "3", value:"alerts"},
            {id: "4", value:"numbers"},
          ],
          answer: {id: "3", value:"alerts"},
        },
        {
          questionText: "Arrays in JavaScript can be used to store ______.",
          options: [
            {id: "1", value:"numbers and strings"},
            {id: "2", value:"other arrays"},
            {id: "3", value:"booleans"},
            {id: "4", value:"all of the above"},
          ],
          answer:  {id: "4", value:"all of the above"},
        },
        {
          questionText:
            "String values must be enclosed within _____ when being assigned to variables.",
          options:[
            {id: "1", value:"commas"},
           {id: "2", value:" curly brackets"},
           {id: "3", value:"quotes"},
           {id: "4", value:"parentheses"},
          ],
          answer:  {id: "3", value:"quotes"},
        },
        {
          questionText:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
          options: [
           {id: "1", value:"JavaScript"},
           {id: "2", value:"terminal/bash"},
           {id: "3", value:"for loops"},
           {id: "4", value:"console.log"},
          ],
          answer:  {id: "4", value:"console.log"}
        },
        {
          questionText:
            "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
          options:[
            {id: "1", value:"break"},
           {id: "2", value:"stop"},
           {id: "3", value:"halt"},
           {id: "4", value:"exit"},
          ],
          answer: {id: "1", value:"break"},
        },
      ];

      const [selectedAnswer, setSelectedAnswer] = useState("");
      
      const isRighrAnswer = (id) => {
        return questions[selectedQuestion].answer.id === id ? true : false;
      }

      function displayAnswer(id){
        setSelectedAnswer(id)
        if(!isRighrAnswer(id))
        {
          console.log("reduce timings by 10 sec");
        }
        setTimeout(() => {
          setSelectedAnswer("")
          setSelectedQuestion(selectedQuestion+1)
        }, 1000);
      }

    return (
        <div className='question'>
            <div>
            <h2>{questions[selectedQuestion].questionText}</h2>
            {questions[selectedQuestion].options.map((option, index) => 
            <p key={index} className='options' onClick={() => displayAnswer(option.id)}>{`${option.id}. ${option.value}`}</p>)}
            {selectedAnswer && 
            <p>{questions[selectedQuestion].answer.id === selectedAnswer ? "Correct!" : "Incorrect!"}</p>}
            </div>
            <br/>
        </div>
    )

}

export default Page1;