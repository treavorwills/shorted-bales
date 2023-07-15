import React from "react";

function Input({ onFileContent }) {
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

  return (
    <>
      <div>Input</div>
      <div>
        <input type="file" onChange={handleFileInputChange} />
      </div>
    </>
  );
}

export default Input;
