import React, { useState, useContext } from "react";
import {
  CardContainer,
  CardInner,
  CardFront,
  CardBack,
  Answer,
} from "./elements/FlashcardElements";
import {
  ButtonContainer,
  Button,
  Number,
} from "./elements/MultipleChoiceElements";
import { QuestionContext } from "./contexts/QuestionContext";
import { ThemeContext } from "./contexts/ThemeContext";
import { Content } from "./elements/MultipleChoiceElements";

const Flashcard = () => {
  const [clicked, setClicked] = useState("");
  const { selectedQuestions } = useContext(QuestionContext);
  const theme = useContext(ThemeContext)[0];
  const [currentId, setCurrentId] = useState(1);

  const CurrentQuestion = (props) => {
    for (let item of selectedQuestions) {
      if (item.id === props.id) {
        return <Answer theme={props.theme}>{item.question}</Answer>;
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

  const clickedOnNext = () => {
    if (currentId < selectedQuestions.length) {
      setCurrentId(currentId + 1);
    }
  };

  const clickedOnPrevious = () => {
    if (currentId > 1) {
      setCurrentId(currentId - 1);
    }
  };

  const clickedOnCard = () => {
    clicked === "" ? setClicked("clicked") : setClicked("");
  };

  return (
    <Content>
      <CardContainer>
        <CardInner clicked={clicked} onClick={clickedOnCard}>
          <CardFront>
            <CurrentQuestion id={currentId} theme={theme} />
          </CardFront>
          <CardBack>
            <CurrentAnswer id={currentId} theme={theme} />
          </CardBack>
        </CardInner>
        <ButtonContainer>
          <Button onClick={clickedOnPrevious}>Previous</Button>
          <Number theme={theme}>{currentId}</Number>
          <Button onClick={clickedOnNext}>Next</Button>
        </ButtonContainer>
      </CardContainer>
    </Content>
  );
};

export default Flashcard;
