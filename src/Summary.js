import React from "react";

function Summary(props) {
  // const data = Object.entries(props.words).map((word) => {
  //   return { text: word[0], value: word[1] };
  // });
  const words = props.words;
  const wordsCount = words.length;
  const minutes = props.totalWords / 200;
  const displayed = Math.ceil(minutes.toFixed(2));

  return (
    <div style={{ padding: "0 5rem" }}>
      <p>
        This text has {props.totalWords} total words and {wordsCount} unique
        words.
      </p>
      <p>
        The most frequent words in the text: {words[0][0]}({words[0][1]}),{" "}
        {words[1][0]}({words[1][1]}), {words[2][0]}({words[2][1]}),{" "}
        {words[3][0]}({words[3][1]}), {words[4][0]}({words[4][1]}),{" "}
        {words[5][0]}({words[5][1]}), {words[6][0]}({words[6][1]}),{" "}
        {words[7][0]}({words[7][1]}), {words[8][0]}({words[8][1]}),{" "}
        {words[9][0]}({words[9][1]}), {words[10][0]}({words[10][1]})
      </p>
      <p>Approximate reading time is {displayed} min.</p>
    </div>
  );
}

export default Summary;
