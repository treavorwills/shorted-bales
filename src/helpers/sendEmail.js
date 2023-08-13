import axios from "axios";
import constructEmail from "./constructEmail";

export default function sendEmail(customer) {
  const apiKey = import.meta.env.VITE_REACT_APP_FRESHDESK_API_KEY;
  const apiKey2 = 45;
  const domain = import.meta.env.VITE_REACT_APP_FRESHDESK_DOMAIN;

  const endpoint = `https://${domain}.freshdesk.com/api/v2/tickets/outbound_email`;

  const emailBody = constructEmail(customer);


  const ticketData = {
    email: "treavor.wills@packsize.com",
    subject: `Short Shipping Notification`,
    email_config_id: 73000114268,
    // description: `Test ticket for Customer: ${customer.name} (${customer.customerId}) email: ${customer.email}`,
    description: `${emailBody}`,
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
      console.log(`Ticket # ${response.data.id} for ${customer.name} created successfully`);
      return response.data;
    })
    .catch((error) => {
      console.error("Error creating ticket: ", error);
      throw error;
    });
}
