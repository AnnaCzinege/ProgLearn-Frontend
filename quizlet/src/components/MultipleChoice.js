import React, { useContext, useEffect, useRef, useCallback } from "react";
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
import { QuizContext } from "./contexts/QuizContext";
import { QuestionContext } from "./contexts/QuestionContext";

const MultipleChoice = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const { selectedQuestions } = useContext(QuestionContext);

  const questions = selectedQuestions.map((item) => {
    return <div key={item.question}>{item.question}</div>;
  });

  return (
    <Section currentTheme={currentTheme}>
      <ViewLayer>
        <Content>
          <QuestionContent>
            <QuestionContainer>
              <Question>{questions}</Question>
            </QuestionContainer>
          </QuestionContent>
          <OptionContent>
            <OptionContainer>
              <OptionOuter>
                <OptionInner>
                  <Option>Anna</Option>
                </OptionInner>
              </OptionOuter>
            </OptionContainer>
            <OptionContainer>
              <OptionOuter>
                <OptionInner>
                  <Option>Anna</Option>
                </OptionInner>
              </OptionOuter>
            </OptionContainer>
            <OptionContainer>
              <OptionOuter>
                <OptionInner>
                  <Option>Anna</Option>
                </OptionInner>
              </OptionOuter>
            </OptionContainer>
            <OptionContainer>
              <OptionOuter>
                <OptionInner>
                  <Option>Anna</Option>
                </OptionInner>
              </OptionOuter>
            </OptionContainer>
          </OptionContent>
        </Content>
      </ViewLayer>
    </Section>
  );
};

export default MultipleChoice;
