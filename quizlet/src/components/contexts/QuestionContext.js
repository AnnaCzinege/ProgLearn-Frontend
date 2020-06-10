import React, { useState, createContext, useEffect, useCallback } from "react";
import Axios from "axios";

export const QuestionContext = createContext();

export const QuestionProvider = (props) => {
  const [allQuestions, setAllquestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const array = ["easy", "medium", "hard"];

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

  const fetchGeneralQuestions = useCallback(() => {
    for (let item of array) {
      Axios.get(
        `https://opentdb.com/api.php?amount=50&category=9&difficulty=${item}&type=multiple`
      ).then((resp) => {
        let array = resp.data.results;
        for (let item of array) {
          item.question = convert(item.question);
          item.question = convertOtherSymbols(item.question);
          setAllquestions((prevData) => [...prevData, item]);
        }
      });
    }
  }, [array]);

  const fetchScienceNatureQuestions = useCallback(() => {
    for (let item of array) {
      Axios.get(
        `https://opentdb.com/api.php?amount=50&category=17&difficulty=${item}&type=multiple`
      ).then((resp) => {
        let array = resp.data.results;
        for (let item of array) {
          item.question = convert(item.question);
          item.question = convertOtherSymbols(item.question);
          setAllquestions((prevData) => [...prevData, item]);
        }
      });
    }
  }, [array]);

  const fetchMythologyQuestions = useCallback(() => {
    for (let item of array) {
      Axios.get(
        `https://opentdb.com/api.php?amount=50&category=20&difficulty=${item}&type=multiple`
      ).then((resp) => {
        let array = resp.data.results;
        for (let item of array) {
          item.question = convert(item.question);
          item.question = convertOtherSymbols(item.question);
          setAllquestions((prevData) => [...prevData, item]);
        }
      });
    }
  }, [array]);

  const fetchHistoryQuestions = useCallback(() => {
    for (let item of array) {
      Axios.get(
        `https://opentdb.com/api.php?amount=50&category=23&difficulty=${item}&type=multiple`
      ).then((resp) => {
        let array = resp.data.results;
        for (let item of array) {
          item.question = convert(item.question);
          item.question = convertOtherSymbols(item.question);
          setAllquestions((prevData) => [...prevData, item]);
        }
      });
    }
  }, [array]);

  const fetchPoliticsQuestions = useCallback(() => {
    for (let item of array) {
      Axios.get(
        `https://opentdb.com/api.php?amount=50&category=24&difficulty=${item}&type=multiple`
      ).then((resp) => {
        let array = resp.data.results;
        for (let item of array) {
          item.question = convert(item.question);
          item.question = convertOtherSymbols(item.question);
          setAllquestions((prevData) => [...prevData, item]);
        }
      });
    }
  }, [array]);

  const fetchAnimalsQuestions = useCallback(() => {
    for (let item of array) {
      Axios.get(
        `https://opentdb.com/api.php?amount=50&category=27&difficulty=${item}&type=multiple`
      ).then((resp) => {
        let array = resp.data.results;
        for (let item of array) {
          item.question = convert(item.question);
          item.question = convertOtherSymbols(item.question);
          setAllquestions((prevData) => [...prevData, item]);
        }
      });
    }
  }, [array]);

  useEffect(() => {
    fetchGeneralQuestions();
    // fetchAnimalsQuestions();
    //fetchHistoryQuestions();
    // fetchMythologyQuestions();
    // fetchScienceNatureQuestions();
    // fetchPoliticsQuestions();
  }, [fetchGeneralQuestions]);

  return (
    <QuestionContext.Provider
      value={{ allQuestions, selectedQuestions, setSelectedQuestions }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};
