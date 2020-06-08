import React, { useState } from "react";
import {
  Container,
  StyledTitle,
  StyledLi,
  StyledUl,
  HiddenRadioButton,
  StyledLabel,
  StyledRadioButton,
  RadioButtonContainer,
} from "./elements/LearningModeElements";

const LearningMode = (props) => {
  const urlString = props.location.pathname;

  const getTopicName = (string) => {
    let n = string.lastIndexOf("/");
    let topic = string.substring(n + 1);
    return topic.replace(/-/g, " ");
  };

  const title = (string) => {
    let array = string.split(" ");
    console.log(array);
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
      console.log(array[i]);
    }

    return array.join(" ");
  };

  const [easy, setEasy] = useState({ checked: false });
  const [medium, setMedium] = useState({ checked: false });
  const [hard, setHard] = useState({ checked: false });

  const handleCheckboxChange1 = (event) => {
    setEasy({ checked: event.target.checked });
    setMedium({ checked: false });
    setHard({ checked: false });
  };

  const handleCheckboxChange2 = (event) => {
    setMedium({ checked: event.target.checked });
    setEasy({ checked: false });
    setHard({ checked: false });
  };

  const handleCheckboxChange3 = (event) => {
    setHard({ checked: event.target.checked });
    setMedium({ checked: false });
    setEasy({ checked: false });
  };

  const RadioButton = ({ checked, ...props }) => {
    return (
      <RadioButtonContainer>
        <HiddenRadioButton checked={checked} {...props} />
        <StyledRadioButton checked={checked} />
      </RadioButtonContainer>
    );
  };

  return (
    <div>
      <StyledTitle>{title(getTopicName(urlString))}</StyledTitle>
      <form>
        <Container>
          <h2>Select Difficulty:</h2>
          <StyledUl>
            <StyledLi>
              <HiddenRadioButton />
              <StyledLabel checked={easy.checked}>
                Easy
                <RadioButton
                  checked={easy.checked}
                  onChange={handleCheckboxChange1}
                />
              </StyledLabel>
            </StyledLi>
            <StyledLi>
              <StyledLabel checked={medium.checked}>
                Medium
                <RadioButton
                  checked={medium.checked}
                  onChange={handleCheckboxChange2}
                />
              </StyledLabel>
            </StyledLi>
            <StyledLi>
              <StyledLabel checked={hard.checked}>
                Hard
                <RadioButton
                  checked={hard.checked}
                  onChange={handleCheckboxChange3}
                />
              </StyledLabel>
            </StyledLi>
          </StyledUl>
        </Container>
      </form>
    </div>
  );
};

export default LearningMode;
