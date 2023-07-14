import React from 'react';
import './Input.css'

function Input() {
    const handleFileInputChange = (event) => {
      console.log('clicky click clack')
    };

  return (
    <>
    <div>Input</div>
    <div><input type="file" onChange={handleFileInputChange} /></div>
    </>
  )
}

export default Input;
