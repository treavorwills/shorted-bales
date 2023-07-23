import React, { useState, useEffect } from "react";

// defines the function component Tables, which receives the transformedData prop
function Tables({ data }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Email Address</th>
            <th>Orders Shorted</th>
            <th>Include</th>
          </tr>
        </thead>
        <tbody>
          {data.map((customer) => (
            <tr key={customer.customerId}>
              <td>
                <a href="#{customerId}" target="_blank">
                  {customer.name}
                </a>
              </td>
              <td>
                <input type="email" />
              </td>
              <td>
                {customer.orders.map((order) => (
                    <table>
                      <tbody>
                        <tr key={order.orderId}>
                          <td>
                            <a href={"#" + order.orderId} target="_blank">
                              {order.po}
                            </a>
                          </td>
                          <td>
                            {order.materials.map((material) => (
                              <ul>
                                <li>
                                  {material.width}" {material.grade}
                                  {material.flute}{" "}
                                  {material.print == "YES" ? `Print` : ""} -
                                  Shipped: {material.qtyShipped}/
                                  {material.qtyOrdered} bales
                                </li>
                              </ul>
                            ))}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                ))}
              </td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Tables;
