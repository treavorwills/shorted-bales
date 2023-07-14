import React from "react";

function Input({ onFileContents }) {
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;
      console.log(contents);
      onFileContents(contents);
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
