import constructEmail from "./constructEmail";


export default function devSendEmails(customer) {
  console.log('devSendEmail customer:', customer);

  const emailBody = constructEmail(customer);

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

  return simulateSuccess();
  // return simulateError();
}
