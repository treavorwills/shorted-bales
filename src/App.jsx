import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
import Table from "./components/Table.jsx";
import Tables from "./components/Tables.jsx";
import Output from "./components/Output.jsx";
import Papa from "papaparse";
import validateShortedBaleInput from "./helpers/validateShortedBaleInput";
import transformShortedBaleData from "./helpers/transformShortedBaleData";

function App() {
  const [fileContent, setFileContent] = useState([]);
  const [transformedData, setTransformedData] = useState([]);

  const parseCSV = (file) => {
    const result = Papa.parse(file, {
      delimiter: ",",
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true
    }).data;

    return result;
  };

  const handleFileContent = (content) => {
    const rows = parseCSV(content);
    console.log('rows', rows);
    // console.log("shorted bales?: ", validateShortedBaleInput(rows));
    validateShortedBaleInput(rows)
      ? setFileContent(rows)
      : setFileContent([]); // need to add function to handle when the wrong CSV is uploaded 
  };

  useEffect(() => {
    const data = fileContent.map((obj) => {
      const { "CSC Due Date": cscDueDat, Plant, ...rest } = obj;
      return rest;
    });
    // console.log("data with fields removed: ", data);
    const transformedData = transformShortedBaleData(data);

    if (transformedData.length > 0) {
    setTransformedData(transformedData);
    console.log(transformedData.length);
    } else {setTransformedData([])};
  }, [fileContent]);

  // useEffect(() => {
  //   console.log("App component - transformed data: ", transformedData);
  // }, [transformedData]);

  return (
    <>
      <Header></Header>
      <Input onFileContent={handleFileContent}></Input>
      {/* <Table tableData={tableData}></Table> */}
      {transformedData.length > 0 && <Tables data={transformedData}></Tables>}
      <Output></Output>
    </>
  );
}

export default App;
