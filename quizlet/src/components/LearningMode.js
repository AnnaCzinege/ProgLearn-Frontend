import React from "react";
import {
  Container,
  StyledTitle,
  StyledLi,
  StyledUl,
  StyledInput,
  StyledLabel,
  Check,
} from "./elements/LearningModeElements";

const LearningMode = (props) => {
  const urlString = props.location.pathname;
  const difficulty = ["easy", "medium", "hard"];
  const numbers = [10, 30, 50];

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

  const difficultyList = difficulty.map((item) => {
    return <option value={item}>{item}</option>;
  });

  const numberOfquestions = numbers.map((item) => {
    return <option value={item}>{item}</option>;
  });

  return (
    <div>
      <StyledTitle>{title(getTopicName(urlString))}</StyledTitle>
      <form>
        <Container>
          <h2>Select Difficulty:</h2>
          <StyledUl>
            <StyledLi>
              <StyledInput type="radio" name="selector" />
              <StyledLabel>Easy</StyledLabel>
              <Check></Check>
            </StyledLi>
            <StyledLi>
              <StyledInput type="radio" name="selector" />
              <StyledLabel>Medium</StyledLabel>

              <Check>
                <div className="inside"></div>
              </Check>
            </StyledLi>
            <StyledLi>
              <StyledInput type="radio" name="selector" />
              <StyledLabel>Hard</StyledLabel>

              <Check>
                <div className="inside"></div>
              </Check>
            </StyledLi>
          </StyledUl>
        </Container>
      </form>
      <form>
        <div className="container">
          <h2>Your favorite thing in the world:</h2>

          <ul>
            <li>
              <input type="radio" id="f-option" name="selector" />
              <label>Pizza</label>

              <div className="check"></div>
            </li>

            <li>
              <input type="radio" id="s-option" name="selector" />
              <label>Bacon</label>

              <div className="check">
                <div className="inside"></div>
              </div>
            </li>

            <li>
              <input type="radio" id="t-option" name="selector" />
              <label>Cats</label>

              <div className="check">
                <div className="inside"></div>
              </div>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default LearningMode;
