import React, { useState, useEffect } from "react";
import updateCustomers from "../helpers/updateCustomers";
import sendEmail from "../helpers/sendEmail";

// defines the function component Tables, which receives the transformedData prop
function Tables({ data, setData }) {

  const handleEmailChange = (customerId, emailAddress) => {
    const updatedData = data.map((customer) =>
      customer.customerId === customerId
        ? { ...customer, email: emailAddress }
        : customer
    );

    setData(updatedData)
    // console.log(data);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Email Address</th>
            <th>Orders Shorted</th>
            <th>Status</th>
            {/* <th>Include</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((customer) => (
            <CustomerRow
              key={customer.customerId}
              customer={customer}
              onEmailChange={handleEmailChange}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

function CustomerRow({ customer, onEmailChange }) {
  const handleEmailInput = (e) => {
    const emailAddress = e.target.value;
    onEmailChange(customer.customerId, emailAddress);
  };

  return (
    <tr key={customer.customerId} className="customer-row">
      <td>
        <a href="#{customerId}" target="_blank">
          {customer.name}
        </a>
      </td>
      <td>
        <input
          type="email"
          value={customer.email || ""}
          onChange={handleEmailInput}
        />
      </td>
      <td className="td-orders-table">
        {customer.orders.map((order) => (
          <table key={order.orderId} className="orders-table">
            <tbody>
              <tr>
                <td className="po">
                  <a href={"#" + order.orderId} target="_blank">
                    {order.po}
                  </a>
                </td>
                <td>
                  {order.materials.map((material) => (
                    <ul key={material.materialId}>
                      <li>
                        {material.width}" {material.grade}
                        {material.flute}{" "}
                        {material.print == "YES" ? `Print` : ""} - Shipped:{" "}
                        {material.qtyShipped}/{material.qtyOrdered} bales
                      </li>
                    </ul>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </td>
      <td>{customer.updated}</td>
      {/* <td>
        <input type="checkbox" />
      </td> */}
    </tr>
  );
}

export default Tables;
