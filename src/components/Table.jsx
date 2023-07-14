import React, { useState, useEffect } from "react";

function Table({ fileContents }) {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const parsedData = parseCSVData(fileContents);
    setTableData(parsedData);
  }, [fileContents]);

  const parseCSVData = (csvData) => {
    // split into rows
    const rows = csvData.split("\n");

    // define the header row
    const headers = rows[0].split(',');

    // remove header row
    rows.shift();

    // parse each row into an array of objects
    const data = rows.map((row) => {
      const rowData = row.split(",");

      // create header object with header values as keys
      return headers.reduce((obj, header, index) => {
        obj[header] = rowData[index];
        return obj;
      }, {});
    });

    return data;
  };

  const handleExtraDataChange = (event, rowIndex) => {
    const { name, value } = event.target;

    // update the row with the new data
    setTableData((prevData) => {
      const updatedData = [...prevData];
      updatedData[rowIndex][name] = value;
      return updatedData;
    });
  };

  return (
    <>
      <div>Table</div>
      <div>{fileContents}</div>
      <div>
        <table>
          <thead>
            <tr>
              {Object.keys(tableData[0] || {}).map((header) => (
                <th key={header}>{header}</th>
              ))}
              <th>Extra Data</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
                <td>
                  <input
                    type="text"
                    name="extraData"
                    value={row.extraData || ""}
                    onChange={(e) => handleExtraDataChange(e, rowIndex)}
                  />
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
