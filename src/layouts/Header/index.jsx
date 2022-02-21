import React from "react";

import './index.css'
import Navbar from "./Navbar";
import Timer from "./Timer";

function Header() {

  return <div className="header">
       <Navbar/>
       <Timer/>
  </div>;
}

export default Header;
