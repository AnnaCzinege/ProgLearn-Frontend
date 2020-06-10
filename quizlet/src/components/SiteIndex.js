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
          <CardContainer>
            <StyledTopicLink
              to={{
                pathname: `/topic/animals`,
              }}
            >
              <Card theme={theme}>
                <CardTitle theme={theme}>Animals</CardTitle>
                <CardImg />
              </Card>
            </StyledTopicLink>
            <StyledTopicLink
              to={{
                pathname: `/topic/history`,
              }}
            >
              <Card theme={theme}>
                <CardTitle theme={theme}>History</CardTitle>
                <CardImg />
              </Card>
            </StyledTopicLink>
            <StyledTopicLink
              to={{
                pathname: `/topic/politics`,
              }}
            >
              <Card theme={theme}>
                <CardTitle theme={theme}>Politics</CardTitle>
                <CardImg />
              </Card>
            </StyledTopicLink>
            <StyledTopicLink
              to={{
                pathname: `/topic/science-&-nature`,
              }}
            >
              <Card theme={theme}>
                <CardTitle theme={theme}>Science & Nature</CardTitle>
                <CardImg />
              </Card>
            </StyledTopicLink>
            <StyledTopicLink
              to={{
                pathname: `/topic/mythology`,
              }}
            >
              <Card theme={theme}>
                <CardTitle theme={theme}>Mythology</CardTitle>
                <CardImg />
              </Card>
            </StyledTopicLink>
            <StyledTopicLink
              to={{
                pathname: `/topic/general-knowledge`,
              }}
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
