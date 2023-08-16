import sendEmail from "./sendEmail";
import devSendEmail from "./devSendEmail";

export default async function updateCustomers(customers, key) {
  const updatedCustomers = await Promise.all(customers.map(async (customer) => {
    try {
      const response = await devSendEmail(customer, key);

      if (response.id > 0){
        return { ...customer, updated: true, ticket: response.id} 
      } else {
          return customer;
      }
     } catch (error) {
      console.log(`error updating customer: ${error.message}`);
      return { ...customer, updated: false, ape: true} 
    }
  }));

  return updatedCustomers;
}
