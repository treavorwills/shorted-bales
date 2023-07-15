import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Input from './components/Input.jsx';
import Table from './components/Table.jsx';
import Output from './components/Output.jsx';

function App() {
  const [fileContent, setFileContent] = useState('');

  const handleFileContent = (content) => {
    setFileContent(content);
  };

  return (
    <>
      <Header></Header>
      <Input onFileContent={handleFileContent}></Input>
      <Table fileContent={fileContent}></Table>
      <Output></Output>
    </>
  )
}

export default App
