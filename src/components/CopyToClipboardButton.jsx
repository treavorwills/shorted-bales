import React, { useState } from 'react';

function CopyToClipboardButton({ textToCopy, buttonText }) {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    // Create a new textarea element to hold the text to copy
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;

    // Append the textarea to the DOM
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the textarea from the DOM
    document.body.removeChild(textarea);

    // Set the copied state to true
    setCopied(true);

    // Reset the copied state after a brief delay
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
      <button onClick={handleCopyClick} className="copyButton">
        {copied ? 'Copied!' : buttonText}
      </button>
  );
}

export default CopyToClipboardButton;
