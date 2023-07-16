export default function transformShortedBaleData(data) {
    const transformedData = {};
    const customersArray = {};

    // Create an array of customer numbers from this report
    data.forEach((entry) => {
        const {"Cust #": customerId, "Cust Name": name, Customer_PO: po, "TMS ID": tmsId, "PKZ ID": orderId, "Cust P/N": custPartNumber, "Material #": materialId, "Bale Width": width, Grade: grade, Flute: flute, "Print?": print, "Ordered Qty": qtyOrdered, "Shipped Qty": qtyShipped, "Shorted Qty": qtyShorted } = entry;
        if (!customersArray[customerId]) {
            customersArray[customerId] = {
                customerId: customerId,
                name: name,
                orders: {},
            };
        }
    });

    Object.entries(customersArray).forEach(([key, value]) => {
        console.log("key and value: ", key, value);
    })

    console.log("customersArray: ", customersArray);
    // console.log("data in to transform function: ", data);
    // console.log("data that has been transformed: ", transformedData);
    // console.log("data type of transformed Data: ", typeof transformedData);
    return transformedData;
}