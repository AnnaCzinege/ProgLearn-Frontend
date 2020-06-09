import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledTitle = styled.h1`
  text-align: center;
  margin-top: 150px;
  font-size: 32px;
  font-weight: bold;
  font-family: "Raleway-Regular";
  letter-spacing: 1.5px;
  color: ${(props) => (props.theme === "light" ? "#1f2833" : "whitesmoke")};
`;

export const StyledTopicLink = styled(Link)`
  align-items: center;
  z-index: 2;
  display: inline-block;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font: inherit;
  margin: 1.5rem 0.6rem 0;
  outline: none;
  justify-content: flex-start;
  box-sizing: inherit;
  text-decoration: none;
  font-family: "Raleway-Medium";
  font-weight: bold;
  font-size: 20px;
  color: #008080;
  vertical-align: center;
`;

export const CardTitle = styled.h4`
  font-family: "Raleway-Regular";
  font-size: 20px;
  padding-top: 30px;
  color: ${(props) => (props.theme === "light" ? "#1f2833" : "#45a29e")};
`;

export const CardImg = styled.div`
  background-image: ur();
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 50%;
  width: 50%;
  align-self: center;
  background-position: center;
`;

export const Card = styled.div`
  background-color: transparent;
  align-items: center;
  vertical-align: center;
  text-align: center;
  border-radius: 0.25rem;
  height: 10rem;
  margin: 1.5rem 0.6rem 0;
  width: 20rem;
  box-shadow: 0 0 0.4rem 0 rgba(0, 0, 0, 0.25);
  transition: all 0.12s;
  justify-content: flex-start;
  box-sizing: inherit;
  border: 5px solid #c5c6c7;
  &:hover {
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.2);
    border: 5px solid #45a29e;
    background: whitesmoke;
  }
`;

export const CardContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  box-sizing: inherit;
`;

export const CardSection = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 3rem;
  padding-right: 3rem;
  box-sizing: inherit;
`;

export const StyledSection = styled.div`
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  height: 100%;
  background-color: ${(props) => props.currentTheme};
`;

export const Section = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.currentTheme};
`;
