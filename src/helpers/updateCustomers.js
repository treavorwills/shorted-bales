import createTicket from "./createTicket";

export default function updateCustomers(data) {
    console.log("updateCustomers data:", data);
    console.log("zero: ", data[0]);

    createTicket(data[0]);
};