import React, { useContext, useState } from "react";
import MultipleChoice from "./MultipleChoice";
import Flashcard from "./Flashcard";
import { ThemeContext } from "./contexts/ThemeContext";
import { QuizContext } from "./contexts/QuizContext";
import {
  StyledParagraph,
  StyledTitle,
} from "./elements/MultipleChoiceElements";
import {
  Page,
  ContentWrapper,
  Content,
  QuizContent,
  QuizDetails,
  Navigation,
  NavButton,
  QuizSection,
  TitleSection,
  InfoContainer,
} from "./elements/QuizElements";

const Quiz = () => {
  const theme = useContext(ThemeContext)[0];
  const [clicked, setClicked] = useState("");
  const [quizMode, setQuizMode] = useState("multiple_choice");
  const { difficulty, number, topic, quizTitle, setQuizTitle } = useContext(
    QuizContext
  );

  const SelectedQuiz = () => {
    if (quizMode === "multiple_choice") {
      setQuizTitle("Select the correct answer!");
      return <MultipleChoice />;
    } else {
      setQuizTitle("Flip the card and check the answer!");
      return <Flashcard />;
    }
  };

  return (
    <Page>
      <ContentWrapper>
        <Content>
          <QuizContent>
            <QuizDetails>
              <Navigation>
                <TitleSection>
                  <InfoContainer>
                    <StyledParagraph theme={theme}>
                      Category: {topic}
                    </StyledParagraph>
                    <StyledParagraph theme={theme}>
                      Difficulty: {difficulty}
                    </StyledParagraph>
                    <StyledParagraph theme={theme}>
                      Number of questions: {number}
                    </StyledParagraph>
                  </InfoContainer>
                </TitleSection>
                <NavButton
                  name="multiple_choice"
                  quizMode={quizMode}
                  onClick={() => {
                    setQuizMode("multiple_choice");
                  }}
                >
                  Multiple choice
                </NavButton>
                <NavButton
                  name="flashcard"
                  quizMode={quizMode}
                  onClick={() => {
                    setQuizMode("flashcard");
                  }}
                >
                  Flashcards
                </NavButton>
              </Navigation>
              <QuizSection>
                <TitleSection>
                  <StyledTitle>{quizTitle}</StyledTitle>
                </TitleSection>
                <SelectedQuiz />
              </QuizSection>
            </QuizDetails>
          </QuizContent>
        </Content>
      </ContentWrapper>
    </Page>
  );
};

export default Quiz;
