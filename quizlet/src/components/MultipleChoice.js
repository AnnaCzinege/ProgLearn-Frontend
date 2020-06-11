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
        return <Question>{item.question}</Question>;
      }
    }
  };

  const incorrectAnswers = (options) => {
    options.map((option) => {
      return (
        <OptionContainer>
          <OptionOuter>
            <OptionInner>
              <Option>{option}</Option>
            </OptionInner>
          </OptionOuter>
        </OptionContainer>
      );
    });
  };

  const CurrentOptions = (props) => {
    console.log(props);
    console.log(selectedQuestions);
    for (let item of selectedQuestions) {
      console.log(item.id);
      if (item.id === props.id) {
        return (
          <OptionContent>
            <OptionContainer>
              <OptionOuter>
                <OptionInner>
                  <Option>{item.incorrect_answers[0]}</Option>
                </OptionInner>
              </OptionOuter>
            </OptionContainer>
            <OptionContainer>
              <OptionOuter>
                <OptionInner>
                  <Option>{item.incorrect_answers[1]}</Option>
                </OptionInner>
              </OptionOuter>
            </OptionContainer>
            <OptionContainer>
              <OptionOuter>
                <OptionInner>
                  <Option>{item.incorrect_answers[2]}</Option>
                </OptionInner>
              </OptionOuter>
            </OptionContainer>
            <OptionContainer>
              <OptionOuter>
                <OptionInner>
                  <Option>{item.correct_answer}</Option>
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
      <ViewLayer>
        <Content>
          <QuestionContent>
            <QuestionContainer>
              <CurrentQuestion id={currentId} />
            </QuestionContainer>
          </QuestionContent>
          <OptionContent>
            <CurrentOptions id={currentId} />
          </OptionContent>
        </Content>
      </ViewLayer>
    </Section>
  );
};

export default MultipleChoice;
