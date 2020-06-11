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
