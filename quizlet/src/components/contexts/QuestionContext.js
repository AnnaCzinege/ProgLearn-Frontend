import React, { useState, createContext, useEffect } from "react";
import Axios from "axios";

export const QuestionContext = createContext();

export const QuestionProvider = (props) => {
  const [easyGeneral, setEasyGeneral] = useState([]);

  const convert = (string) => {
    return string.replace("&#039;", "'");
  };

  const fetchEasyGeneral = () => {
    Axios.get(
      "https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple"
    ).then((resp) => {
      let array = resp.data.results;
      for (let item of array) {
        convert(item.question);
        setEasyGeneral((prevData) => [...prevData, item]);
      }
    });
  };

  return (
    <QuestionContext.Provider value={{ easyGeneral, fetchEasyGeneral }}>
      {props.children}
    </QuestionContext.Provider>
  );
};
