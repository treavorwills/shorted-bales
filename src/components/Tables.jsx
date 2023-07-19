import React, { useState, useEffect } from "react";

// defines the function component Tables, which receives the transformedData prop
function Tables({ data }) {
  return (
    <>
      {data.map((customer) => (
        <div key={customer.customerId}>
          <h1>{customer.name}</h1>
          {customer.orders.map((order) => (
            <div key={order.orderId}>
              <h2>PO: {order.po}</h2>
              {order.materials.map((material) => (
                <div key={material.materialId}>{material.materialId}</div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default Tables;
