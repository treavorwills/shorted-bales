import React, { useState, useEffect } from "react";
import Papa from "papaparse";

// defines the function component Table, which receives the fileContent prop
function Table({ fileContent }) {
  // useState hook that defines tableData as an empty array
  const [tableData, setTableData] = useState([]);

  // updates tableData to the parsed fileContent after the fileContent is updated
  useEffect(() => {
    const parsedData = parseCSVData(fileContent);
    setTableData(parsedData);
    console.log("fileContent changed");
  }, [fileContent]);

  useEffect(() => {
    console.log("tableData changed ", tableData);
  }, [tableData]);

  // funtion that parses a csvFile into rows and assumes there is a header row
  const parseCSVData = (csvData) => {
    const parsedData = Papa.parse(csvData, {
      delimiter: ",",
      header: true,
      dynamicTyping: true,
    }).data;

    return parsedData;
  };

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              {Object.keys(tableData[0] || {}).map((header) => (
                <th key={header}>{header}</th>
              ))}
              <th key="extra">Extra Data</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
                <td>
                  <input type="text" name="extraData" value={row.extraData} />
                </td>
                <td>
                  <input type="submit" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
