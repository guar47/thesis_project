import React, { useState } from "react";
import Graphs from "./Graphs";
import "./Form.css";

function Form() {
  const [textField, setTextField] = useState("");
  const [showGraph, setShowGraph] = useState(false);

  const handleTextFieldChange = (e) => {
    setTextField(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowGraph(true);
  };

  if (showGraph) {
    return <Graphs value={textField} />;
  } else {
    return (
      <main>
        <form name="text-form" className="Form-main" onSubmit={handleSubmit}>
          <label htmlFor="corpus-input">Insert your text</label>
          <textarea
            placeholder="Insert your corpus"
            className="Form-text-area"
            name="corpus-input"
            id="corpus-input"
            cols="70"
            rows="10"
            onChange={handleTextFieldChange}
            value={textField}
          ></textarea>
          <button for="text-form" className="Form-submit" type="submit">
            Submit
          </button>
        </form>
      </main>
    );
  }
}

export default Form;
