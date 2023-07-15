import React, { useState, useEffect } from "react";

// defines the function component Table, which receives the fileContent prop
function Table({ fileContent }) {
  // useState hook that defines tableData as an empty array
  const [tableData, setTableData] = useState([]);

  // updates tableData to the parsed fileContent after the fileContent is updated
  useEffect(() => {
    const parsedData = parseCSVData(fileContent);
    setTableData(parsedData);
    console.log('fileContent changed');
  }, [fileContent]);

  useEffect(() => {
    console.log('tableData changed ', tableData);
  }, [tableData]);

  // funtion that parses a csvFile into rows and assumes there is a header row
  const parseCSVData = (csvData) => {
    // defines array of strings, one row per string
    const rows = csvData.split("\n");
    // defines array of the headers
    const headers = rows[0].split(",");
    // removes the first row (the headers)
    rows.shift();

    // parse each row into an object array or data entries
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
