import React from "react";
import './index.css'

function Navbar() {
  return (
    <div>
      <a className="linkHighScore" href="./highScore">
        View Highscore <i className="fas fa-hand-point-left fa-lg"></i>
      </a>
    </div>
  );
}

export default Navbar;
