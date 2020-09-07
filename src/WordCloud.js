import React from "react";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

const options = {
  rotations: 2,
  rotationAngles: [-90, 0],
  fontSizes: [15, 120],
};

function WordCloud(props) {
  const words = Object.entries(props.words).map((word) => {
    return { text: word[0], value: word[1] };
  });

  return (
    <div style={{ height: 400, width: 800 }}>
      <ReactWordcloud options={options} words={words} />
    </div>
  );
}

export default WordCloud;
