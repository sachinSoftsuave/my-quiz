import React from "react";
import Header from "./layouts/Header/index";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <Router>
      <div className="main">
        <Header />
        <Routes>
          {routes.map(({ path, element }) => {
            return <Route exact path={path} element={element} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
