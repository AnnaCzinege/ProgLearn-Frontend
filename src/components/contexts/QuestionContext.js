import React, { useState, createContext, useEffect, useCallback } from "react";
import Axios from "axios";

export const QuestionContext = createContext();

export const QuestionProvider = (props) => {
  const [allQuestions, setAllquestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  const convert = (string) => {
    return string.replace(/&#(?:x([\da-f]+)|(\d+));/gi, function (_, hex, dec) {
      return String.fromCharCode(dec || +("0x" + hex));
    });
  };

  const convertOtherSymbols = (string) => {
    string = string.replace(/&quot;/g, "'");
    string = string.replace(/&rsquo;/g, "'");
    string = string.replace(/&shy;/g, "-");
    string = string.replace(/&hellip;/g, "");
    string = string.replace(/&ldquo;/g, '"');
    string = string.replace(/&rdquo;/g, '"');
    return string;
  };

  const fetchQuestions = useCallback(() => {
    const array = ["easy", "medium", "hard"];
    const categories = [9, 12, 15, 22];
    for (let number of categories) {
      for (let item of array) {
        Axios.get(
          `https://opentdb.com/api.php?amount=50&category=${number}&difficulty=${item}&type=multiple`
        ).then((resp) => {
          let array = resp.data.results;
          for (let item of array) {
            item.question = convert(item.question);
            item.question = convertOtherSymbols(item.question);
            setAllquestions((prevData) => [...prevData, item]);
          }
        });
      }
    }
  }, []);

  useEffect(() => {
    fetchQuestions();
    document.body.style.backgroundColor = "white";
  }, [fetchQuestions]);

  return (
    <QuestionContext.Provider
      value={{ allQuestions, selectedQuestions, setSelectedQuestions }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};
