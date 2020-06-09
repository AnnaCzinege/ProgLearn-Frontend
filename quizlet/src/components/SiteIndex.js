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
          <StyledTopicLink
            to={{
              pathname: `/topic/general-knowledge`,
            }}
          >
            <Card>
              <CardTitle theme={theme}>General knowledge</CardTitle>
              <CardImg />
            </Card>
          </StyledTopicLink>
          <StyledTopicLink
            to={{
              pathname: `/topic/general-knowledge`,
            }}
          >
            <Card>
              <CardTitle theme={theme}>General knowledge</CardTitle>
              <CardImg />
            </Card>
          </StyledTopicLink>
          <StyledTopicLink
            to={{
              pathname: `/topic/general-knowledge`,
            }}
          >
            <Card>
              <CardTitle theme={theme}>General knowledge</CardTitle>
              <CardImg />
            </Card>
          </StyledTopicLink>
          <StyledTopicLink
            to={{
              pathname: `/topic/general-knowledge`,
            }}
          >
            <Card>
              <CardTitle theme={theme}>General knowledge</CardTitle>
              <CardImg />
            </Card>
          </StyledTopicLink>
          <StyledTopicLink
            to={{
              pathname: `/topic/general-knowledge`,
            }}
          >
            <Card>
              <CardTitle theme={theme}>General knowledge</CardTitle>
              <CardImg />
            </Card>
          </StyledTopicLink>
          <StyledTopicLink
            to={{
              pathname: `/topic/general-knowledge`,
            }}
          >
            <Card>
              <CardTitle theme={theme}>General knowledge</CardTitle>
              <CardImg />
            </Card>
          </StyledTopicLink>
        </CardContainer>
      </CardSection>
    </Section>
  );
};

export default SiteIndex;
