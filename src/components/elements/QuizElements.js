import styled from "styled-components";

export const Page = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: ${(props) => props.currentTheme};
`;

export const ContentWrapper = styled.div`
  position: relative;
`;

export const Content = styled.div`
  box-sizing: inherit;
`;

export const QuizContent = styled.div`
  margin: 0 auto;
  max-width: 54.5625rem;
  padding: 2.5rem;
  padding-top: 25px;
  position: relative;
  @media screen and (min-width: 64.0625em) {
    max-width: 77.125rem;
  }
`;

export const TitleSection = styled.div`
  align-content: flex-end;
  flex-wrap: nowrap;
  margin-bottom: 2.5rem;
`;

export const InfoContainer = styled.div`
  border-bottom: 2px dashed;
  border-color: ${(props) =>
    props.theme === "light" ? "rgb(0, 0, 0, 0.25)" : "#c5c6c7"};
  padding-top: 30px;
`;

export const QuizDetails = styled.div`
  margin-top: 200px;
  box-sizing: inherit;
  display: flex;
  flex-direction: row;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  padding-bottom: 200px;
  overflow: visible;
  border-right: 2px dashed;
  border-color: ${(props) =>
    props.theme === "light" ? "rgb(0, 0, 0, 0.25)" : "#c5c6c7"};
`;

export const NavButtonContainer = styled.div`
  justify-content: flex-start;
`;

export const NavButton = styled.div`
  display: inline-block;
  text-align: left;
  cursor: pointer;
  margin: 0 0 0.8125rem;
  padding: 5px;
  font-size: 20px;
  font-family: "Raleway-Medium";
  color: ${(props) =>
    props.theme === "light" && props.name !== props.quizMode
      ? "#0b0c10"
      : props.theme === "dark" && props.name !== props.quizMode
      ? "whitesmoke"
      : "#ffae6d"};
  &:hover {
    text-decoration: underline #ffae6d;
  }
`;

export const QuizSection = styled.div`
  flex: 1;
  padding: 0;
  overflow-x: visible;
`;
