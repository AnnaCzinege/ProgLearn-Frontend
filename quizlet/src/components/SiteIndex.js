import React from "react";
import {
  StyledTitle,
  StyledTopicLink,
  Card,
  CardContainer,
  CardTitle,
  CardImg,
  CardSection,
} from "./elements/SiteIndexElements";

const SiteIndex = () => {
  return (
    <div className="area">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <CardSection>
        <CardSection>
          <StyledTitle>Welcome!</StyledTitle>
          <CardContainer>
            <StyledTopicLink href="topic/languages">
              <Card>
                <CardTitle>Data structures & Algorithms</CardTitle>
                <CardImg />
              </Card>
            </StyledTopicLink>
            <StyledTopicLink href="topic/languages">
              <Card>
                <CardTitle>Data structures & Algorithms</CardTitle>
                <CardImg />
              </Card>
            </StyledTopicLink>
            <StyledTopicLink href="topic/languages">
              <Card>
                <CardTitle>Data structures & Algorithms</CardTitle>
                <CardImg />
              </Card>
            </StyledTopicLink>
          </CardContainer>
        </CardSection>
      </CardSection>
    </div>
  );
};

export default SiteIndex;
