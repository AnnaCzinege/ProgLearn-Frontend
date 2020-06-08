import React, { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = (props) => {
  const [difficulty, setDifficulty] = useState("easy");
  const [number, setNumber] = useState(10);
  const [mode, setMode] = useState("multiple choice");
  return (
    <QuizContext.Provider
      value={{ difficulty, number, mode, setDifficulty, setNumber, setMode }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};
