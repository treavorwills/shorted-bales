import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header.jsx'; 
import Input from './components/Input.jsx';
import Table from './components/Table.jsx';
import Output from './components/Output.jsx';
import Papa from 'papaparse';
import validateShortedBaleInput from './helpers/validateShortedBaleInput';
import transformShortedBaleData from './helpers/transformShortedBaleData';

function App() {
  const [fileContent, setFileContent] = useState([]);
  const [tableData, setTableData] = useState([]);

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
    console.log("shorted bales?: ", validateShortedBaleInput(rows));
    validateShortedBaleInput(rows) ? setFileContent(rows) : setFileContent([{Error: 'Shorted Bales CSV file not selected. Please try again.'}]);
  };

  useEffect(() => {
    const data = fileContent.map((obj) => {
      const { "CSC Due Date": cscDueDat, Plant, ...rest } = obj;
      return rest;
    });
    // console.log("data with fields removed: ", data);
    const transformedData = transformShortedBaleData(data);
    setTableData(data);
  }, [fileContent])

  return (
    <>
      <Header></Header>
      <Input onFileContent={handleFileContent}></Input>
      <Table tableData={tableData}></Table>
      <Output></Output>
    </>
  )
}

export default App
