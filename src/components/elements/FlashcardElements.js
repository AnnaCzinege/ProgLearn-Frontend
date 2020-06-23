import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: transparent;
  width: 60%;
  height: 200px;
  perspective: 1000px;
`;

export const CardInner = styled.div`
  cursor: pointer;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.4rem 0 rgba(0, 0, 0, 0.25);
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  &:hover {
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.2);
  }
  transform: ${(props) =>
    props.clicked === "clicked" ? "rotateY(180deg)" : ""};
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  border: 3px solid;
  border-color: #45a29e;
  color: #0b0c10;
  text-align: center;
  backface-visibility: hidden;
  background-color: whitesmoke;
`;

export const CardBack = styled.div`
  position: absolute;
  border-radius: 0.25rem;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #45a29e;
  color: whitesmoke;
  transform: rotateY(180deg);
`;

export const Answer = styled.div`
  padding-top: 50px;
  font-family: "Raleway-Regular";
  line-height: 22px;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.theme === "light" ? "#0b0c10" : "whitesmoke")};
`;
