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

    setData(updatedData);
    // console.log(data);
  };

  return (
    <>
      <table className="main-table">
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
      <td className="td-orders">
        {customer.orders.map((order) => (
          <div key={order.orderId} className="orders-table">
            <a href={" https://supply.packsize.com/orders/" + order.orderId} target="_blank">
              Purchase Order: {order.po}
            </a>
            {order.materials.map((material) => (
              <ul key={material.materialId}>
                <li>
                  {material.width}" {material.grade} {material.flute}{" "}
                  {material.print == "YES" ? `Print` : ""} - shipped {material.qtyShipped} of {material.qtyOrdered} bales
                </li>
              </ul>
            ))}
          </div>
        ))}
      </td>
      <td>
        {customer.updated ? (
          <img
            src="apeIcon.png"
            width="50"
            height="50"
            alt="Customer Notified"
          />
        ) : (
          <p></p>
        )}
      </td>
    </tr>
  );
}

export default Tables;


