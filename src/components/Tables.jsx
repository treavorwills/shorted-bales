import React, { useState, useEffect } from "react";

// defines the function component Tables, which receives the transformedData prop
function Tables({ data }) {
  return (
    <>
      {data.map((customer) => (
        <div key={customer.customerId}>
          {customer.name}
        </div>
      ))}
    </>
  );
}

export default Tables;
