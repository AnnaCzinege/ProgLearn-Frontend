import React, { useContext, useState } from "react";
import {
  Content,
  QuestionContent,
  OptionContent,
  QuestionContainer,
  Question,
  OptionContainer,
  OptionOuter,
  Card,
} from "./elements/MultipleChoiceElements";
import { ThemeContext } from "./contexts/ThemeContext";
import { QuestionContext } from "./contexts/QuestionContext";

const MultipleChoice = () => {
  const theme = useContext(ThemeContext)[0];
  const { selectedQuestions } = useContext(QuestionContext);
  const [currentId, setCurrentId] = useState(1);

  const CurrentQuestion = (props) => {
    for (let item of selectedQuestions) {
      if (item.id === props.id) {
        return <Question theme={props.theme}>{item.question}</Question>;
      }
    }
  };

  const clickedOnOption = (event) => {
    let answer = event.target.getAttribute("data-answer");
    console.log(answer);
    if (answer === "true") {
      event.target.setAttribute("data-answer", "right");
    } else {
      event.target.setAttribute("data-answer", "wrong");
    }
    console.log(event.target.getAttribute("data-answer"));
    setTimeout(clickedOnNext, 1000);
  };

  const clickedOnNext = () => {
    if (currentId < selectedQuestions.length) {
      setCurrentId(currentId + 1);
    }
  };

  const shuffleOptions = (item) => {
    let array = [];
    array.push({ option: item.correct_answer, correct: "true" });
    for (let answer of item.incorrect_answers) {
      array.push({ option: answer, correct: "false" });
    }
    array = shuffleArray(array);
    return array;
  };

  const shuffleArray = (array) => {
    let counter = array.length;

    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  };

  const CurrentOptions = (props) => {
    for (let item of selectedQuestions) {
      if (item.id === props.id) {
        let options = shuffleOptions(item);
        return (
          <OptionContent>
            <OptionContainer>
              <OptionOuter
                theme={theme}
                data-answer={options[0].correct}
                onClick={clickedOnOption}
              >
                {options[0].option}
              </OptionOuter>
            </OptionContainer>
            <OptionContainer>
              <OptionOuter
                theme={theme}
                data-answer={options[1].correct}
                onClick={clickedOnOption}
              >
                {options[1].option}
              </OptionOuter>
            </OptionContainer>
            <OptionContainer>
              <OptionOuter
                theme={theme}
                data-answer={options[2].correct}
                onClick={clickedOnOption}
              >
                {options[2].option}
              </OptionOuter>
            </OptionContainer>
            <OptionContainer>
              <OptionOuter
                theme={theme}
                data-answer={options[3].correct}
                onClick={clickedOnOption}
              >
                {options[3].option}
              </OptionOuter>
            </OptionContainer>
          </OptionContent>
        );
      }
    }
  };

  return (
    <Content>
      <Card theme={theme}>
        <QuestionContent>
          <QuestionContainer>
            <CurrentQuestion id={currentId} theme={theme} />
          </QuestionContainer>
        </QuestionContent>
        <OptionContent>
          <CurrentOptions id={currentId} />
        </OptionContent>
      </Card>
    </Content>
  );
};

export default MultipleChoice;
