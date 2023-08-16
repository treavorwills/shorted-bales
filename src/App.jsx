import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
import Table from "./components/Table.jsx";
import Tables from "./components/Tables.jsx";
import TmsNumbers from "./components/TmsNumbers.jsx";
import Papa from "papaparse";
import validateShortedBaleInput from "./helpers/validateShortedBaleInput";
import transformShortedBaleData from "./helpers/transformShortedBaleData";
import updateCustomers from "./helpers/updateCustomers";

function App() {
  const [fileContent, setFileContent] = useState([]);
  const [customersArray, setCustomersArray] = useState([]);
  const [showTables, setShowTables] = useState();
  const [showTmsArray, setShowTmsArray] = useState();
  const [key, setKey] = useState("");

  const parseCSV = (file) => {
    const result = Papa.parse(file, {
      delimiter: ",",
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
    }).data;

    return result;
  };

  // const handleKeyInputChange = (event) => {
  //   setKey(event.target.value);
  //   console.log('key changing');
  // }

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

    setShowTmsArray(false);
  }, [fileContent]);

  const handleSubmitButton = async () => {
    try {
      const updatedCustomerArray = await updateCustomers(customersArray, key);
      setCustomersArray(updatedCustomerArray);
      setShowTmsArray(true);
    } catch (error) {
      console.error("error updating customer: ", error);
    }
  };

  useEffect(() => {
    console.log("updatedcustomers: ", customersArray);
    customersArray.length > 0 ? setShowTables(true) : setShowTables(false);
  }, [customersArray]);

  return (
    <>
      <Header></Header>
      <Input onFileContent={handleFileContent} setKey={setKey}></Input>
      {showTables && (
        <>
          <Tables data={customersArray} setData={setCustomersArray}></Tables>
          <div className="buttons">
            <button className="btn-submit" onClick={handleSubmitButton}>
              Update Customers
            </button>

            {showTmsArray && (
              <TmsNumbers customers={customersArray}></TmsNumbers>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default App;
