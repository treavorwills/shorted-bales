import sendEmail from "./sendEmail";
import devSendEmail from "./devSendEmail";

export default async function updateCustomers(customers) {
  const updatedCustomers = await Promise.all(customers.map(async (customer) => {
    try {
      const response = await devSendEmail(customer);

      if (response.response.data.id > 0){
        return { ...customer, updated: true, ticket: response.response.data.id} 
      } else {
          return customer;
      }
     } catch (error) {
      console.log(`error updating customer: ${error.message}`);
      return { ...customer, updated: false} 
    }
  }));

  return updatedCustomers;
}
