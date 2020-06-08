import styled from "styled-components";

export const StyledTitle = styled.p`
  text-align: center;
  margin-top: 150px;
  font-size: 32px;
  font-family: "Raleway-Regular";
  letter-spacing: 1.5px;
  color: whitesmoke;
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
  margin: 0;
  padding: 0;
  overflow: auto;
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
`;

export const StyledRadioButton = styled.div`
  display: block;
  position: absolute;
  border: 3px solid #aaaaaa;
  border-color: ${(props) => (props.checked ? "#66fcf1" : "#aaaaaa")};
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
    background: ${(props) => (props.checked ? "#66fcf1" : "")};
  }
`;

export const RadioButtonContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const StyledLabel = styled.label`
  text-align: left;
  display: block;
  position: relative;
  font-weight: ${(props) => (props.checked ? "400" : "200")};
  font-size: 1.35em;
  padding: 25px 25px 25px 80px;
  margin: 10px auto;
  height: 30px;
  z-index: 5;
  cursor: pointer;
  transition: all 0.25s linear;
  color: ${(props) => (props.checked ? "#66fcf1" : "#aaaaaa")};
`;
