import React, { useState, useContext } from "react";
import {
  CardContainer,
  CardInner,
  CardFront,
  CardBack,
  Answer,
} from "./elements/FlashcardElements";
import { Question } from "./elements/MultipleChoiceElements";
import { QuestionContext } from "./contexts/QuestionContext";
import { ThemeContext } from "./contexts/ThemeContext";

const Flashcard = () => {
  const [clicked, setClicked] = useState("");
  const { selectedQuestions } = useContext(QuestionContext);
  const theme = useContext(ThemeContext)[0];
  const [currentId, setCurrentId] = useState(1);

  const CurrentQuestion = (props) => {
    for (let item of selectedQuestions) {
      if (item.id === props.id) {
        return <Question theme={props.theme}>{item.question}</Question>;
      }
    }
  };

  const CurrentAnswer = (props) => {
    for (let item of selectedQuestions) {
      if (item.id === props.id) {
        return <Answer theme={props.theme}>{item.correct_answer}</Answer>;
      }
    }
  };

  const clickedOnCard = () => {
    clicked === "" ? setClicked("clicked") : setClicked("");
  };

  return (
    <div>
      <CardContainer>
        <CardInner clicked={clicked} onClick={clickedOnCard}>
          <CardFront>
            <CurrentQuestion id={currentId} theme={theme} />
          </CardFront>
          <CardBack>
            <CurrentAnswer id={currentId} theme={theme} />
          </CardBack>
        </CardInner>
      </CardContainer>
    </div>
  );
};

export default Flashcard;
