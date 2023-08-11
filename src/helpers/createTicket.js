// import request from "request";
// import dotenv from "dotenv";
import React from "react";
import axios from "axios";

export default function createTicket(customer) {
  const apiKey = process.env.REACT_APP_FRESHDESK_API_KEY;
  const domain = process.env.REACT_APP_FRESHDESK_DOMAIN;
  console.log(domain);

  const endpoint = `https://${domain}.freshdesk.com/api/v2/tickets`;

  const ticketData = {
    description: `Test ticket for Customer: ${customer.name} (${customer.customerId})
    //   email: ${customer.email}`,
    subject: `${customer.name} test ticket`,
    email: "treavor.wills@packsize.com",
    status: 2,
    priority: 2,
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${Buffer.from(apiKey + ":X").toString("base64")}`,
  };

//   return axios
//     .post(endpoint, ticketData, { headers })
//     .then((response) => {
//       console.log("Ticket created successfully: ", response.data);
//       return response.data;
//     })
//     .catch((error) => {
//       console.error("Error creating ticket: ", error);
//       throw error;
//     });

  //   console.log(`Customer: ${customer.name} (${customer.customerId})
  //   email: ${customer.email}`);
}
