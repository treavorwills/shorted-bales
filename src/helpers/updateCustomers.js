import React from "react";
import axios from "axios";

export default function updateCustomers(data) {
  console.log("updateCustomers data:", data);
  console.log("zero: ", data[0]);

  const customer = data[0];

  const apiKey = import.meta.env.VITE_REACT_APP_FRESHDESK_API_KEY;
  const domain = import.meta.env.VITE_REACT_APP_FRESHDESK_DOMAIN;

  const endpoint = `https://${domain}.freshdesk.com/api/v2/tickets/outbound_email`;

  const ticketData = {
    email: "treavor.wills@packsize.com",
    subject: `${customer.name} test ticket`,
    email_config_id: 73000114268,
    description: `Test ticket for Customer: ${customer.name} (${customer.customerId}) email: ${customer.email}`,
    type: "Order Changes- Material / qty's",
    status: 5,
    priority: 1,
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${btoa(apiKey + ":X")}`,
  };

  return axios
    .post(endpoint, ticketData, { headers })
    .then((response) => {
      console.log(`Ticket # ${response.data.id} created successfully`);
      return response.data;
    })
    .catch((error) => {
      console.error("Error creating ticket: ", error);
      throw error;
    });
}
