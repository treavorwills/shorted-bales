import React from "react";

function Input({ onFileContent, setKey }) {
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      // console.log(content);
      onFileContent(content);
    };

    reader.readAsText(file);
  };

  const handleKeyInputChange = (event) => {
    const keyInput = event.target.value;
    setKey(keyInput);
  }

  return (
      <div className="input-container">
        <label htmlFor="key">Key: <input type="text" onChange={handleKeyInputChange} id="key"/></label> 
        <input type="file" onChange={handleFileInputChange} />
      </div>
  );
}

export default Input;
