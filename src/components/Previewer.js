import React from "react";
import ReactMarkdown from "react-markdown";
const Previewer = ({ textareaValue }) => {
  return (
    <>
      <div id="preview" className="preview-container">
        <div className="container-title">Previewer</div>
        <ReactMarkdown id="preview" className="markdown" source={textareaValue} />
      </div>
    </>
  );
};

export default Previewer;
