import React, { useState } from "react";
import {
  CardContainer,
  CardInner,
  CardFront,
  CardBack,
  StyledSpan,
} from "./elements/FlashcardElements";

const Flashcard = () => {
  const [clicked, setClicked] = useState("");

  const clickedOnCard = () => {
    clicked === "" ? setClicked("clicked") : setClicked("");
  };

  return (
    <div>
      <CardContainer>
        <CardInner clicked={clicked} onClick={clickedOnCard}>
          <CardFront>
            <StyledSpan>almonds</StyledSpan>
          </CardFront>
          <CardBack>
            <StyledSpan>almendras</StyledSpan>
          </CardBack>
        </CardInner>
      </CardContainer>
    </div>
  );
};

export default Flashcard;
