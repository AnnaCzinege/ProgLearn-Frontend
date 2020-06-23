import React, { useContext } from "react";
import {
  StyledTitle,
  StyledTopicLink,
  Card,
  CardContainer,
  CardTitle,
  CardImg,
  CardSection,
  Section,
} from "./elements/SiteIndexElements";
import { StyledParagraph } from "./elements/QuizSettingsElements";
import { ThemeContext } from "./contexts/ThemeContext";
import AppTheme from "./Colors";
import Flashcard from "./Flashcard";

const SiteIndex = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <Section currentTheme={currentTheme}>
      <CardSection>
        <StyledTitle theme={theme}>Welcome!</StyledTitle>
        <CardContainer>
          <StyledParagraph theme={theme}>
            Select a category and test your knowledge!
          </StyledParagraph>
          <Flashcard />
          <CardContainer>
            <StyledTopicLink
              to={{
                pathname: `/topic/entertainment:-music`,
              }}
              //12
            >
              <Card theme={theme}>
                <CardTitle theme={theme}>Entertainment: Music</CardTitle>
                <CardImg />
              </Card>
            </StyledTopicLink>
            <StyledTopicLink
              //15
              to={{
                pathname: `/topic/entertainment:-video-games`,
              }}
            >
              <Card theme={theme}>
                <CardTitle theme={theme}>Entertainment: Video Games</CardTitle>
                <CardImg />
              </Card>
            </StyledTopicLink>
            <StyledTopicLink
              to={{
                pathname: `/topic/geography`,
              }}
              //22
            >
              <Card theme={theme}>
                <CardTitle theme={theme}>Geography</CardTitle>
                <CardImg />
              </Card>
            </StyledTopicLink>
            <StyledTopicLink
              to={{
                pathname: `/topic/general-knowledge`,
              }}
              //9
            >
              <Card theme={theme}>
                <CardTitle theme={theme}>General knowledge</CardTitle>
                <CardImg />
              </Card>
            </StyledTopicLink>
          </CardContainer>
        </CardContainer>
      </CardSection>
    </Section>
  );
};

export default SiteIndex;
