import React, { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = (props) => {
  const [difficulty, setDifficulty] = useState("easy");
  const [number, setNumber] = useState(10);
  const [topic, setTopic] = useState("general knowledge");
  return (
    <QuizContext.Provider
      value={{ difficulty, number, topic, setDifficulty, setNumber, setTopic }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};
