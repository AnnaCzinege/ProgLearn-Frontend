import React from "react";
import { StyledTitle } from "./elements/LearningModeElements";

const LearningMode = (props) => {
  const urlString = props.location.pathname;

  const getTopicName = (string) => {
    let n = string.lastIndexOf("/");
    let topic = string.substring(n + 1);
    return topic.replace(/-/g, " ");
  };

  const title = (string) => {
    let array = string.split(" ");
    console.log(array);
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
      console.log(array[i]);
    }

    return array.join(" ");
  };

  return (
    <div>
      <StyledTitle>{title(getTopicName(urlString))}</StyledTitle>
    </div>
  );
};

export default LearningMode;
