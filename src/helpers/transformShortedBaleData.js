export default function transformShortedBaleData(data) {
    const transformedData = {};

    data.forEach((entry) => {
        const customerId = entry["Cust #"];
        if (!transformedData[customerId]) {
            transformedData[customerId] = [];
        }
        transformedData[customerId].push(entry);
    });

    console.log("data in to transform function: ", data);
    console.log("data that has been transformed: ", transformedData);
    console.log("data type of transformed Data: ", typeof transformedData);
    return transformedData;
}