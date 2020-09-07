import React from "react";
import WordCloud from "./WordCloud";

const ignoredWords = {
  a: true,
  at: true,
  by: true,
  but: true,
  in: true,
  to: true,
  the: true,
};

const splitWords = (text) => {
  return text
    .replace(/[.,/#!$%^&*;:{}=\-_`~()"']/g, "")
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => !ignoredWords[word]);
};

const getWordsFrequency = (words) => {
  const wordsMap = {};

  words.forEach((word) => {
    if (wordsMap.hasOwnProperty(word)) {
      wordsMap[word] += 1;
    } else {
      wordsMap[word] = 1;
    }
  });
  return wordsMap;
};

function Graphs(props) {
  const words = getWordsFrequency(splitWords(props.value));

  return <WordCloud words={words} />;
}

export default Graphs;
