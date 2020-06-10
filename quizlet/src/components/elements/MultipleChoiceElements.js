import styled from "styled-components";

export const Section = styled.div`
  top: 0.3125rem;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  background-color: ${(props) => props.currentTheme};
`;

export const ViewLayer = styled.div`
  padding: 2rem 2rem 0;
  display: flex;
  justify-content: center;
  overflow: hidden;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuestionContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 2rem;
  height: 100%;
  min-height: 50%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const OptionContent = styled.div`
  flex-grow: 0;
  width: 100%;
  z-index: 1;
  display: flex;
`;

export const QuestionContainer = styled.div`
  max-height: 100%;
  justify-content: flex-start;
`;

export const Question = styled.div`
  font-family: "Raleway-Regular";
`;

export const OptionContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const OptionOuter = styled.div`
  border: 0.125rem solid #3ccfcf;
  border-radius: 0.25rem;
  cursor: pointer;
  padding: 0.75rem;
  position: relative;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.625;
  transition: none 0.12s cubic-bezier(0.47, 0, 0.745, 0.715);
  transition-property: border-color;
  width: 25%;
`;

export const OptionInner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const Option = styled.div`
  font-family: "Raleway-Regular";
  position: relative;
  display: block;
`;
