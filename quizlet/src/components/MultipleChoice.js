import React, { useContext, useState } from "react";
import {
  Section,
  ViewLayer,
  Content,
  QuestionContent,
  OptionContent,
  QuestionContainer,
  Question,
  OptionContainer,
  OptionOuter,
  OptionInner,
  Option,
  Card,
  Button,
  ButtonContainer,
  Number,
} from "./elements/MultipleChoiceElements";
import { ThemeContext } from "./contexts/ThemeContext";
import AppTheme from "./Colors";
import { QuestionContext } from "./contexts/QuestionContext";

const MultipleChoice = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const { selectedQuestions } = useContext(QuestionContext);
  const [currentId, setCurrentId] = useState(1);

  const CurrentQuestion = (props) => {
    for (let item of selectedQuestions) {
      if (item.id === props.id) {
        return <Question theme={props.theme}>{item.question}</Question>;
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

  const shuffleOptions = (item) => {
    let array = [];
    array.push(item.correct_answer);
    array = array.concat(item.incorrect_answers);
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
              <OptionOuter theme={theme}>
                <OptionInner>
                  <Option>{options[0]}</Option>
                </OptionInner>
              </OptionOuter>
            </OptionContainer>
            <OptionContainer>
              <OptionOuter theme={theme}>
                <OptionInner>
                  <Option>{options[1]}</Option>
                </OptionInner>
              </OptionOuter>
            </OptionContainer>
            <OptionContainer>
              <OptionOuter theme={theme}>
                <OptionInner>
                  <Option>{options[2]}</Option>
                </OptionInner>
              </OptionOuter>
            </OptionContainer>
            <OptionContainer>
              <OptionOuter theme={theme}>
                <OptionInner>
                  <Option>{options[3]}</Option>
                </OptionInner>
              </OptionOuter>
            </OptionContainer>
          </OptionContent>
        );
      }
    }
  };

  return (
    <Section currentTheme={currentTheme}>
      <Content>
        <Card>
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
      <ButtonContainer>
        <Button onClick={clickedOnPrevious}>Previous</Button>
        <Number>{currentId}</Number>
        <Button onClick={clickedOnNext}>Next</Button>
      </ButtonContainer>
    </Section>
  );
};

export default MultipleChoice;
