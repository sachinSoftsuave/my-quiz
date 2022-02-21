import React from "react";

import './index.css'

function Option({ index, option, displayAnswer }) {
  
  return (
    <div key={index} className="optionsContainer" id = {option.id}>
      <p disabled='true'
        className="option"
        onClick={() => {displayAnswer(option.id)}}
      >{`${option.id}. ${option.value}`}</p>
    </div>
  );
}

export default Option;
