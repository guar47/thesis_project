import React from "react";
import WordCloud from "./WordCloud";
import "./Graphs.css";
import Reader from "./Reader";
import Summary from "./Summary";
import BarChartComponent from "./BarChartComponent";

const ignoredWords = {
  a: true,
  at: true,
  by: true,
  but: true,
  in: true,
  to: true,
  the: true,
  and: true,
  on: true,
  of: true,
  is: true,
  are: true,
  was: true,
  were: true,
  for: true,
  if: true,
  from: true,
  i: true,
  it: true,
  that: true,
  my: true,
  you: true,
  im: true,
  this: true,
  be: true,
  about: true,
  just: true,
  so: true,
  its: true,
  as: true,
  not: true,
  all: true,
  with: true,
  me: true,
  we: true,
  or: true,
  youre: true,
};

const splitWords = (text) => {
  return text
    .replace(/[.,/#!$%^&*;:{}=\-_`~()"']/g, "")
    .toLowerCase()
    .split(/\s+/);
};

const ignoreWords = (wordsArr) => {
  return wordsArr.filter((word) => !ignoredWords[word]);
};

const getWordsFrequency = (wordsArr) => {
  const wordsMap = {};

  wordsArr.forEach((word) => {
    if (wordsMap.hasOwnProperty(word)) {
      wordsMap[word] += 1;
    } else {
      wordsMap[word] = 1;
    }
  });
  return wordsMap;
};

const sortByFrequency = (wordsObj) => {
  const sortedwords = Object.entries(wordsObj).sort((a, b) => {
    return b[1] - a[1];
  });

  return sortedwords;
};

function Graphs(props) {
  const splittedText = splitWords(props.text);
  const withIgnoredWords = ignoreWords(splittedText);
  const words = getWordsFrequency(withIgnoredWords);
  const sortedWords = sortByFrequency(words);

  return (
    <React.Fragment>
      <Summary words={sortedWords} totalWords={splittedText.length} />
      <div className="Graphs-container">
        <WordCloud words={sortedWords} />
        <BarChartComponent words={sortedWords} />
      </div>
      <Reader text={props.text} />
    </React.Fragment>
  );
}

export default Graphs;
