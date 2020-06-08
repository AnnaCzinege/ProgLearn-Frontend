import React, { useContext } from "react";
import {
  StyledTitle,
  StyledTopicLink,
  Card,
  CardContainer,
  CardTitle,
  CardImg,
  CardSection,
} from "./elements/SiteIndexElements";
import { QuestionContext } from "./contexts/QuestionContext";

const SiteIndex = () => {
  const { easyGeneral } = useContext(QuestionContext);

  const questions = easyGeneral.map((item) => {
    return <div>{item.question}</div>;
  });

  return (
    <div className="area">
      <CardSection>
        <StyledTitle>Welcome!</StyledTitle>
        <CardContainer>
          <StyledTopicLink
            to={{
              pathname: `/topic/general-knowledge`,
            }}
          >
            <Card>
              <CardTitle>General knowledge</CardTitle>
              <CardImg />
            </Card>
          </StyledTopicLink>
        </CardContainer>
      </CardSection>
    </div>
  );
};

export default SiteIndex;
