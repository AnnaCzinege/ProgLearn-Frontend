import React, { useState, createContext, useEffect, useCallback } from "react";
import Axios from "axios";

export const QuestionContext = createContext();

export const QuestionProvider = (props) => {
  const [easyGeneral, setEasyGeneral] = useState([]);
  const [mediumGeneral, setMediumGeneral] = useState([]);
  const [hardGeneral, setHardGeneral] = useState([]);

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

  const fetchEasyGeneral = useCallback(() => {
    Axios.get(
      "https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple"
    ).then((resp) => {
      let array = resp.data.results;
      for (let item of array) {
        item.question = convert(item.question);
        item.question = convertOtherSymbols(item.question);
        setEasyGeneral((prevData) => [...prevData, item]);
      }
    });
  }, []);

  const fetchMediumGeneral = useCallback(() => {
    Axios.get(
      "https://opentdb.com/api.php?amount=50&category=9&difficulty=medium&type=multiple"
    ).then((resp) => {
      let array = resp.data.results;
      for (let item of array) {
        item.question = convert(item.question);
        item.question = convertOtherSymbols(item.question);
        setMediumGeneral((prevData) => [...prevData, item]);
      }
    });
  }, []);

  const fetchHardGeneral = useCallback(() => {
    Axios.get(
      "https://opentdb.com/api.php?amount=50&category=9&difficulty=hard&type=multiple"
    ).then((resp) => {
      let array = resp.data.results;
      for (let item of array) {
        item.question = convert(item.question);
        item.question = convertOtherSymbols(item.question);
        setHardGeneral((prevData) => [...prevData, item]);
      }
    });
  }, []);

  useEffect(() => {
    fetchEasyGeneral();
    fetchMediumGeneral();
    fetchHardGeneral();
  }, [fetchEasyGeneral, fetchMediumGeneral, fetchHardGeneral]);

  return (
    <QuestionContext.Provider
      value={{ easyGeneral, mediumGeneral, hardGeneral }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};
