import React, { useState, useContext, useEffect } from "react";
import {
  Container,
  StyledTitle,
  StyledLi,
  StyledUl,
  HiddenRadioButton,
  StyledLabel,
  StyledRadioButton,
  RadioButtonContainer,
  StyledParagraph,
  StyledLink,
} from "./elements/QuizSettingsElements";
import { StyledSection, CardContainer } from "./elements/SiteIndexElements";
import { QuizContext } from "./contexts/QuizContext";
import { QuestionContext } from "./contexts/QuestionContext";
import { ThemeContext } from "./contexts/ThemeContext";
import AppTheme from "./Colors";

const LearningMode = (props) => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  const {
    difficulty,
    number,
    setDifficulty,
    topic,
    setTopic,
    setNumber,
  } = useContext(QuizContext);

  const { allQuestions, setSelectedQuestions } = useContext(QuestionContext);

  const urlString = props.location.pathname;
  const [category, setCategory] = useState("");

  const getTopicName = (string) => {
    let n = string.lastIndexOf("/");
    let topicName = string.substring(n + 1);
    topicName = topicName.replace(/-/g, " ");
    return topicName;
  };

  const title = (string) => {
    let array = string.split(" ");
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    let result = array.join(" ");
    return result;
  };

  const [easy, setEasy] = useState({ checked: false });
  const [medium, setMedium] = useState({ checked: false });
  const [hard, setHard] = useState({ checked: false });
  const [ten, setTen] = useState({ checked: false });
  const [thirty, setThirty] = useState({ checked: false });
  const [fifty, setFifty] = useState({ checked: false });

  const handleCheckboxChange1 = (event) => {
    setEasy({ checked: event.target.checked });
    setMedium({ checked: false });
    setHard({ checked: false });
    setDifficulty("easy");
  };

  const handleCheckboxChange2 = (event) => {
    setMedium({ checked: event.target.checked });
    setEasy({ checked: false });
    setHard({ checked: false });
    setDifficulty("medium");
  };

  const handleCheckboxChange3 = (event) => {
    setHard({ checked: event.target.checked });
    setMedium({ checked: false });
    setEasy({ checked: false });
    setDifficulty("hard");
  };

  const handleCheckboxChange4 = (event) => {
    setTen({ checked: event.target.checked });
    setThirty({ checked: false });
    setFifty({ checked: false });
    setNumber(10);
  };

  const handleCheckboxChange5 = (event) => {
    setThirty({ checked: event.target.checked });
    setTen({ checked: false });
    setFifty({ checked: false });
    setNumber(30);
  };

  const handleCheckboxChange6 = (event) => {
    setFifty({ checked: event.target.checked });
    setThirty({ checked: false });
    setTen({ checked: false });
    setNumber(50);
  };

  const RadioButton = ({ checked, ...props }) => {
    return (
      <RadioButtonContainer>
        <HiddenRadioButton checked={checked} {...props} />
        <StyledRadioButton checked={checked} theme={theme} />
      </RadioButtonContainer>
    );
  };

  const selectQuestions = () => {
    let questions = [];
    let counter = 0;
    for (let item of allQuestions) {
      if (
        item["category"] === topic &&
        item["difficulty"] === difficulty &&
        counter < number
      ) {
        questions.push(item);
        counter++;
      }
    }
    for (let item of questions) {
      setSelectedQuestions((prev) => [...prev, item]);
    }
  };

  useEffect(() => {
    let topicName = title(getTopicName(urlString));
    setCategory(topicName);
    setTopic(topicName);
  }, [setTopic, urlString]);

  return (
    <StyledSection currentTheme={currentTheme}>
      <StyledTitle theme={theme}>{category}</StyledTitle>
      <form>
        <Container>
          <CardContainer>
            <StyledUl>
              <StyledParagraph theme={theme}>
                Select Difficulty:
              </StyledParagraph>
              <StyledLi>
                <HiddenRadioButton />
                <StyledLabel checked={easy.checked} theme={theme}>
                  Easy
                  <RadioButton
                    checked={easy.checked}
                    onChange={handleCheckboxChange1}
                  />
                </StyledLabel>
              </StyledLi>
              <StyledLi>
                <StyledLabel checked={medium.checked} theme={theme}>
                  Medium
                  <RadioButton
                    checked={medium.checked}
                    onChange={handleCheckboxChange2}
                  />
                </StyledLabel>
              </StyledLi>
              <StyledLi>
                <StyledLabel checked={hard.checked} theme={theme}>
                  Hard
                  <RadioButton
                    checked={hard.checked}
                    onChange={handleCheckboxChange3}
                  />
                </StyledLabel>
              </StyledLi>
            </StyledUl>
            <StyledUl>
              <StyledParagraph theme={theme}>
                Number of Questions:
              </StyledParagraph>
              <StyledLi>
                <HiddenRadioButton />
                <StyledLabel checked={ten.checked} theme={theme}>
                  10
                  <RadioButton
                    checked={ten.checked}
                    onChange={handleCheckboxChange4}
                  />
                </StyledLabel>
              </StyledLi>
              <StyledLi>
                <StyledLabel checked={thirty.checked} theme={theme}>
                  30
                  <RadioButton
                    checked={thirty.checked}
                    onChange={handleCheckboxChange5}
                  />
                </StyledLabel>
              </StyledLi>
              <StyledLi>
                <StyledLabel checked={fifty.checked} theme={theme}>
                  50
                  <RadioButton
                    checked={fifty.checked}
                    onChange={handleCheckboxChange6}
                  />
                </StyledLabel>
              </StyledLi>
            </StyledUl>
          </CardContainer>
          <CardContainer></CardContainer>
        </Container>
      </form>
      <StyledLink
        theme={theme}
        to={{
          pathname: `/quiz${urlString}/${difficulty}/${number}`,
        }}
        onClick={selectQuestions}
      >
        Let's Start!
      </StyledLink>
    </StyledSection>
  );
};

export default LearningMode;
