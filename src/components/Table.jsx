import React, { useState, useEffect } from "react";
// import Papa from "papaparse";

// defines the function component Table, which receives the fileContent prop
function Table({ fileContent }) {

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(fileContent);
  }, [fileContent]);

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
            {tableData.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((value, idx) => (
                  <td key={idx}>{value}</td>
                ))}
                <td>
                  <input type="text" name="extraData" />
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
