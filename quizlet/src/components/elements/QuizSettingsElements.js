import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledTitle = styled.p`
  text-align: center;
  margin-top: 150px;
  font-size: 32px;
  font-family: "Raleway-Regular";
  letter-spacing: 1.5px;
  color: ${(props) => (props.theme === "light" ? "#1f2833" : "whitesmoke")};
  /* #45a29e */
`;

export const StyledParagraph = styled.p`
  text-align: left;
  padding: 10px;
  font-size: 22px;
  font-family: "Raleway-Regular";
  color: ${(props) => (props.theme === "light" ? "#1f2833" : "whitesmoke")};
  /* #c5c6c7 */
`;

export const Container = styled.div`
  display: block;
  position: relative;
  margin: 40px auto;
  height: auto;
  width: auto;
  padding: 20px;
`;

export const StyledUl = styled.ul`
  list-style: none;
  margin: 0 30px;
  padding: 0 30px;
  overflow: auto;
  justify-content: flex-start;
`;

export const StyledLi = styled.li`
  color: #aaaaaa;
  display: block;
  position: relative;
  float: left;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #333;
`;

export const HiddenRadioButton = styled.input.attrs({ type: "radio" })`
  position: absolute;
  visibility: hidden;
  border: 0;
  height: 1px;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
  width: 1px;
`;

export const StyledRadioButton = styled.div`
  display: block;
  position: absolute;
  border: 3px solid #aaaaaa;
  border-color: ${(props) =>
    props.checked && props.theme === "dark"
      ? "#ffae6d"
      : props.checked && props.theme === "light"
      ? "#ffae6d"
      : "#aaaaaa"};
  border-radius: 100%;
  height: 15px;
  width: 15px;
  top: 30px;
  left: 30px;
  z-index: 5;
  transition: border 0.25s linear;
  &::before {
    display: block;
    position: absolute;
    content: "";
    border-radius: 100%;
    height: 9px;
    width: 9px;
    top: 3.3px;
    left: 3.3px;
    margin: auto;
    background: ${(props) =>
      props.checked && props.theme === "dark"
        ? "#ffae6d"
        : props.checked && props.theme === "light"
        ? "#ffae6d"
        : ""};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.theme === "dark" ? "#1f2833" : "whitesmoke")};
  border: 3px solid
    ${(props) => (props.theme === "dark" ? "#66fcf1" : "#ffae6d")};
  padding: 20px;
  border-radius: 0.25rem;
  font-size: 22px;
  background-color: ${(props) =>
    props.theme === "dark" ? "#66fcf1" : "#ffae6d"};
  font-family: "Raleway-Regular";
`;

export const RadioButtonContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const StyledLabel = styled.label`
  text-align: left;
  display: block;
  position: relative;
  font-weight: 400;
  font-size: 1.35em;
  padding: 25px 25px 25px 80px;
  margin: 10px auto;
  height: 30px;
  z-index: 5;
  cursor: pointer;
  transition: all 0.25s linear;
  color: ${(props) =>
    props.checked && props.theme === "dark"
      ? "#ffae6d"
      : props.checked && props.theme === "light"
      ? "#ffae6d"
      : "#aaaaaa"};
`;
