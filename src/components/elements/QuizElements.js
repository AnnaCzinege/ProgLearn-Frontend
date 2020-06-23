import styled from "styled-components";

export const Page = styled.div`
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  display: block;
  flex-grow: 1;
  width: 100%;
  margin-bottom: 0;
  min-height: 37.5rem;
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
  position: relative;
  @media screen and (min-width: 64.0625em) {
    max-width: 77.125rem;
  }
`;

export const QuizDetails = styled.div`
  box-sizing: inherit;
  display: flex;
  flex-direction: row;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
`;

export const NavButtonContainer = styled.div`
  justify-content: flex-start;
`;

export const NavButton = styled.div`
  display: inline-block;
  margin: 0 0 0.8125rem;
  padding: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

export const QuizSection = styled.div`
  flex: 1;
  padding: 0;
  overflow-x: visible;
`;
