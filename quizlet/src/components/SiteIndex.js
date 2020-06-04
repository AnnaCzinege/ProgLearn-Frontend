import React, { useContext, useEffect } from "react";
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
  const { easyGeneral, fetchEasyGeneral } = useContext(QuestionContext);

  const questions = easyGeneral.map((item) => {
    return <div>{item.question}</div>;
  });

  useEffect(() => {
    fetchEasyGeneral();
  }, []);

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
            <StyledTopicLink href="topic/general-knowledge">
              <Card>
                <CardTitle>General knowledge</CardTitle>
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
        <p>{questions}</p>
      </CardSection>
    </div>
  );
};

export default SiteIndex;
