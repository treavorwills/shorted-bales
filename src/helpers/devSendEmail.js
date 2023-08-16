import constructEmail from "./constructEmail";


export default function devSendEmails(customer, key) {
  console.log('devSendEmail customer:', customer);

  const emailBody = constructEmail(customer);
  console.log(emailBody);

  // for development
  const simulateSuccess = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Ticket for ${customer.name} created successfully`);
        resolve({
          response: {
            data: {
              status: "success",
              id: 123456,
            },
          },
        });
      }, 1000); // i second delay
    });
  };

  // error scenario
  const simulateError = () => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        console.error(`Error creating ticket`);
        reject(new Error("Failed to create ticket"));
      }, 1000); // delay
    });
  };

  const successObject = {
    cc_emails: [],
    fwd_emails: [],
    reply_cc_emails: [],
    ticket_cc_emails: [],
    fr_escalated: false,
    spam: false,
    email_config_id: 73000114268,
    group_id: null,
    priority: 1,
    requester_id: 73017082192,
    responder_id: 73017082192,
    source: 10,
    company_id: null,
    status: 5,
    subject: `${customer.name} test ticket`,
    support_email: "customeroperations.us.ticketing@packsize.com",
    to_emails: ["customeroperations.us.ticketing@packsize.com"],
    product_id: null,
    id: 246454, // This should be unique for each customer
    type: "Order Changes- Material / qty's",
    due_by: "2023-08-16T23:00:00Z",
    fr_due_by: "2023-08-14T18:00:00Z",
    is_escalated: false,
    description: `<div>Test ticket for Customer: ${customer.name} (${customer.customerId}) email: </div>`,
    description_text: `Test ticket for Customer: ${customer.name} (${customer.customerId}) email:`,
    custom_fields: {},
    created_at: "2023-08-12T17:09:51Z",
    updated_at: "2023-08-12T17:09:51Z",
    tags: [],
    attachments: [],
    nr_due_by: null,
    nr_escalated: false,
  };

  return successObject;
  // return simulateSuccess();
  // return simulateError();
}
