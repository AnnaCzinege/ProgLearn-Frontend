import React, { useContext, useState } from "react";
import MultipleChoice from "./MultipleChoice";
import Flashcard from "./Flashcard";
import { ThemeContext } from "./contexts/ThemeContext";
import AppTheme from "./Colors";
import { QuizContext } from "./contexts/QuizContext";
import { QuestionContext } from "./contexts/QuestionContext";
import {
  StyledParagraph,
  StyledTitle,
  ButtonContainer,
  Button,
  Number,
} from "./elements/MultipleChoiceElements";
import {
  Page,
  ContentWrapper,
  Content,
  QuizContent,
  QuizDetails,
  Navigation,
  NavButtonContainer,
  NavButton,
  QuizSection,
} from "./elements/QuizElements";

const Quiz = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const [currentId, setCurrentId] = useState(1);
  const { selectedQuestions } = useContext(QuestionContext);
  const { difficulty, number, topic, quizTitle } = useContext(QuizContext);

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

  return (
    <Page>
      <ContentWrapper>
        <Content>
          <QuizContent>
            <div>
              <StyledTitle theme={theme}>{quizTitle}</StyledTitle>
              <StyledParagraph theme={theme}>Category: {topic}</StyledParagraph>
              <StyledParagraph theme={theme}>
                Difficulty: {difficulty}
              </StyledParagraph>
              <StyledParagraph theme={theme}>
                Number of questions: {number}
              </StyledParagraph>
            </div>
            <QuizDetails>
              <Navigation>
                <NavButtonContainer>
                  <NavButton>Multiple choice</NavButton>
                </NavButtonContainer>
                <NavButtonContainer>
                  <NavButton>Flashcards</NavButton>
                </NavButtonContainer>
              </Navigation>
              <QuizSection>
                <MultipleChoice />
                <Flashcard />
                <ButtonContainer>
                  <Button onClick={clickedOnPrevious}>Previous</Button>
                  <Number theme={theme}>{currentId}</Number>
                  <Button onClick={clickedOnNext}>Next</Button>
                </ButtonContainer>
              </QuizSection>
            </QuizDetails>
          </QuizContent>
        </Content>
      </ContentWrapper>
    </Page>
  );
};

export default Quiz;
