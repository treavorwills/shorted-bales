import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx'; 
import Input from './components/Input.jsx';
import Table from './components/Table.jsx';
import Output from './components/Output.jsx';
import Papa from 'papaparse';

function App() {
  const [fileContent, setFileContent] = useState([]);

  const parseCSV = (file) => {
    const result = Papa.parse(file, {
      delimiter: ',',
      header: true,
      dynamicTyping: true,
    }).data;

    return result;
  };

  const handleFileContent = (content) => {
    const rows = parseCSV(content);
    // console.log('rows', rows);
    setFileContent(rows);
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
