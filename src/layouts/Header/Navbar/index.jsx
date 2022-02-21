import React from "react";

import './index.css'

function Navbar() {
  return (
    <div>
      <a className="linkHighScore" href="./high_Score">
        View Highscore <i className="fas fa-hand-point-left fa-lg" />
      </a>
    </div>
  );
}

export default Navbar;
