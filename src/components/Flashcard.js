import React, { useState } from "react";
import {
  CardContainer,
  CardInner,
  CardFront,
  CardBack,
} from "./elements/FlashcardElements";

const Flashcard = () => {
  const [clicked, setClicked] = useState("");

  const clickedOnCard = () => {
    clicked === "" ? setClicked("clicked") : setClicked("");
  };

  return (
    <div>
      <h1>Flashcards</h1>
      <CardContainer>
        <CardInner clicked={clicked} onClick={clickedOnCard}>
          <CardFront>
            <span>almonds</span>
          </CardFront>
          <CardBack>
            <span>almendras</span>
          </CardBack>
        </CardInner>
      </CardContainer>
    </div>
  );
};

export default Flashcard;
