import React from "react";
import "./Reader.css";

function Reader(props) {
  return (
    <div className="Reader-container">
      <p className="Reader-text">{props.text}</p>
    </div>
  );
}

export default Reader;
