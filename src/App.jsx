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
import updateCustomers from "./helpers/updateCustomers";

function App() {
  const [fileContent, setFileContent] = useState([]);
  const [customersArray, setCustomersArray] = useState([]);

  const parseCSV = (file) => {
    const result = Papa.parse(file, {
      delimiter: ",",
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
    }).data;

    return result;
  };

  const handleFileContent = (content) => {
    const rows = parseCSV(content);
    // console.log('rows', rows);
    // console.log("shorted bales?: ", validateShortedBaleInput(rows));
    validateShortedBaleInput(rows) ? setFileContent(rows) : setFileContent([]); // need to add function to handle when the wrong CSV is uploaded
  };

  useEffect(() => {
    const data = fileContent.map((obj) => {
      const { "CSC Due Date": cscDueDat, Plant, ...rest } = obj;
      return rest;
    });
    // console.log("data with fields removed: ", data);
    const customersArray = transformShortedBaleData(data);

    if (customersArray.length > 0) {
      setCustomersArray(customersArray);
      console.log(customersArray.length);
    } else {
      setCustomersArray([]);
    }
  }, [fileContent]);

  const handleSubmitButton = async () => {
    try {
      const updatedCustomerArray = await updateCustomers(customersArray);
      setCustomersArray(updatedCustomerArray);
    } catch (error) {
      console.error("error updating customer: ", error);
    }
  };

  useEffect (() => {
    console.log("updatedcustomers: ", customersArray);
  }, [customersArray]);



  return (
    <>
      <Header></Header>
      <Input onFileContent={handleFileContent}></Input>
      {customersArray.length > 0 && (
        <>
          <Tables data={customersArray} setData={setCustomersArray}></Tables>
          <button onClick={handleSubmitButton}>Update Customers</button>
        </>
      )}
      <Output></Output>
    </>
  );
}

export default App;
