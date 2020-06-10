import React from "react";

const Editor = ({ textareaValue, setTextarea }) => {
  return (
    <div className="editor-container">
      <div className="container-title">Editor</div>
      <textarea
        value={textareaValue}
        onChange={(e) => setTextarea(e.target.value)}
        id="editor"
      />
    </div>
  );
};

export default Editor;
