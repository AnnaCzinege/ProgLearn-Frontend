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
import ExampleApp from "./Checkbox";

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

  const [state, setState] = useState({ checked: false });

  const handleCheckboxChange = (event) => {
    setState({ checked: event.target.checked });
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
              <StyledLabel checked={state.checked}>
                Easy
                <RadioButton
                  checked={state.checked}
                  onChange={handleCheckboxChange}
                />
              </StyledLabel>
            </StyledLi>
            <StyledLi>
              <StyledLabel checked={state.checked}>
                Medium
                <RadioButton
                  checked={state.checked}
                  onChange={handleCheckboxChange}
                />
              </StyledLabel>
              <HiddenRadioButton type="radio" name="selector" />
            </StyledLi>
            <StyledLi>
              <StyledLabel checked={state.checked}>
                Hard
                <RadioButton
                  checked={state.checked}
                  onChange={handleCheckboxChange}
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
