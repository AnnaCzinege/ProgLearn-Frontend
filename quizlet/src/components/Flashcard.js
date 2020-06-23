import React from "react";

const Flashcard = () => {
  return (
    <div>
      <h1>Flashcards</h1>
      <div class="container">
        <div class="flipper">
          <div class="front">
            <span id="flashcard--content_en">almonds</span>
          </div>
          <div class="back">
            <span id="flashcard--content_es">almendras</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
