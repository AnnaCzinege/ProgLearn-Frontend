import React, { useContext, useState } from "react";
import MultipleChoice from "./MultipleChoice";
import Flashcard from "./Flashcard";
import { ThemeContext } from "./contexts/ThemeContext";
import AppTheme from "./Colors";
import { QuizContext } from "./contexts/QuizContext";

const Quiz = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const { difficulty, number, topic } = useContext(QuizContext);
  return (
    <div>
      <MultipleChoice />
      <Flashcard />
    </div>
  );
};

export default Quiz;
