import styled from "styled-components";

export const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  border-radius: 25px;
  border: 2px solid
    ${(props) => (props.themeMode === "light" ? "whitesmoke" : "whitesmoke")};
`;

export const StyledInput = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  height: 0;
  background-color: ${(props) =>
    props.themeMode === "light" ? "#2196f3" : ""};
  -webkit-transform: ${(props) =>
    props.themeMode === "light" ? "translateX(26px)" : ""};
  -ms-transform: ${(props) =>
    props.themeMode === "light" ? "translateX(26px)" : ""};
  transform: ${(props) =>
    props.themeMode === "light" ? "translateX(26px)" : ""};
`;

export const StyledSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  -webkit-transform: ${(props) =>
    props.theme === "light" ? "" : "translateX(30px)"};
  -ms-transform: ${(props) =>
    props.theme === "light" ? "" : "translateX(30px)"};
  transform: ${(props) => (props.theme === "light" ? "" : "translateX(30px)")};
  border-radius: 30px;
  &::before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
