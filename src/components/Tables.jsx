import React, { useState, useEffect } from "react";

// defines the function component Tables, which receives the transformedData prop
function Tables({ data }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Customer</td>
            <td>Email Address</td>
            <td>Orders Shorted</td>
            <td>Include</td>
          </tr>
        </thead>
        <tbody>
          {data.map((customer) => (
            <tr key={customer.customerId}>
              <td><a href="#{customerId}" target="_blank">{customer.name}</a></td>
              <td>email</td>
              {customer.orders.map((order) => (
                <table>
                  <td key={order.orderId}>{order.po}</td>
                  <td>
                    {order.materials.map((material) => (
                      <ul>
                        <li>{material.materialId}</li>
                      </ul>
                    ))}
                  </td>
                </table>
              ))}
              <td><input type="checkbox" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Tables;
