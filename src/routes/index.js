import React from "react";
import Home from "../pages/home/index";
import Quiz from "../pages/quiz/index";
import HighScore from "../pages/highScore";
import Result from "../pages/results/index";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/highscore",
    element: <HighScore />,
  },
  {
    path: "/results",
    element: <Result />,
  },
];
