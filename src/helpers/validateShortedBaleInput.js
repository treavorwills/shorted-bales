export default function validateShortedBaleInput(data) {
    // console.log("data passed into the validate function: ", data);
    return ((
        data[0].hasOwnProperty("CSC Due Date") &&
        data[0].hasOwnProperty("Plant") &&
        data[0].hasOwnProperty("Cust #") &&
        data[0].hasOwnProperty("Ordered Qty") &&
        data[0].hasOwnProperty("Shipped Qty") &&
        data[0].hasOwnProperty("Shorted Qty")
    ) ? true : false);
}