import React from "react";

import Home from "../pages/home/index";
import Quiz from "../pages/quiz/index";
import HighScore from "../pages/highScore";
import Result from "../pages/results/index";
import Quizmode from "../pages/quizMode/index"

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
    path: "/high_score",
    element: <HighScore />,
  },
  {
    path: "/results",
    element: <Result />,
  },
  {
    path : "/quizmode",
    element : <Quizmode/>
  }
];
