import styled from "styled-components";

export const StyledTitle = styled.h1`
  text-align: center;
  margin-top: 150px;
  font-size: 32px;
  font-weight: bold;
  font-family: "Raleway-Medium";
  letter-spacing: 1.5px;
  color: #66fcf1;
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

export const StyledInput = styled.input`
  position: absolute;
  visibility: hidden;
`;

export const StyledLabel = styled.label`
  display: block;
  position: relative;
  font-weight: 300;
  font-size: 1.35em;
  padding: 25px 25px 25px 80px;
  margin: 10px auto;
  height: 30px;
  z-index: 9;
  cursor: pointer;
  transition: all 0.25s linear;
  &:hover {
    color: #ffffff;
  }
  &:checked {
    color: #0dff92;
  }
`;

export const Check = styled.div`
  display: block;
  position: absolute;
  border: 5px solid #aaaaaa;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  top: 30px;
  left: 20px;
  z-index: 5;
  transition: border 0.25s linear;
  -webkit-transition: border 0.25s linear;
  &:hover {
    border: 5px solid #ffffff;
  }
  &::before {
    display: block;
    position: absolute;
    content: "";
    border-radius: 100%;
    height: 15px;
    width: 15px;
    top: 5px;
    left: 5px;
    margin: auto;
    &:checked {
      background: #0dff92;
    }
  }
  &:checked {
    border: 5px solid #0dff92;
  }
`;
