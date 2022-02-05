import React from "react";
import './index.css'

function Option({ index, option, displayAnswer }) {
  return (
    <div key={index} className="optionsContainer">
      <p
        className="option"
        onClick={() => displayAnswer(option.id, index)}
      >{`${option.id}. ${option.value}`}</p>
    </div>
  );
}

export default Option;
