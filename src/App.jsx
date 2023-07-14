import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Input from './components/Input.jsx';
import Table from './components/Table.jsx';
import Output from './components/Output.jsx';

function App() {
  const [fileContents, setFileContents] = useState('');

  const handleFileContents = (contents) => {
    setFileContents(contents);
  };

  return (
    <>
      <Header></Header>
      <Input onFileContents={handleFileContents}></Input>
      <Table fileContents={fileContents}></Table>
      <Output></Output>
    </>
  )
}

export default App
