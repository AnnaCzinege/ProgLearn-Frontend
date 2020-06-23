import React, { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = (props) => {
  const [difficulty, setDifficulty] = useState("easy");
  const [number, setNumber] = useState(10);
  const [topic, setTopic] = useState("general knowledge");
  const [quizTitle, setQuizTitle] = useState("Select the correct answer!");
  return (
    <QuizContext.Provider
      value={{
        difficulty,
        number,
        topic,
        quizTitle,
        setDifficulty,
        setNumber,
        setTopic,
        setQuizTitle,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};
