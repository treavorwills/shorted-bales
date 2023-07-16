export default function transformShortedBaleData(data) {
  const customers = {};

  // Create an array of customer numbers from this report
  data.forEach((entry) => {
    const {
      "Cust #": customerId,
      "Cust Name": name,
      Customer_PO: po,
      "TMS ID": tmsId,
      "PKZ ID": orderId,
      "Cust P/N": custPartNumber,
      "Material #": materialId,
      "Bale Width": width,
      Grade: grade,
      Flute: flute,
      "Print?": print,
      "Ordered Qty": qtyOrdered,
      "Shipped Qty": qtyShipped,
      "Shorted Qty": qtyShorted,
    } = entry;

    if (!customers[customerId]) {
      customers[customerId] = {
        customerId: customerId,
        name: name,
        orders: {},
      };
    }

    const customer = customers[customerId];

    if (!customer.orders[orderId]) {
      customer.orders[orderId] = {
        orderId: orderId,
        po: po,
        tmsId: tmsId,
        materials: {},
      };
    }

    const order = customer.orders[orderId];

    order.materials[materialId] = {
      materialId: materialId,
      custPartNumber: custPartNumber,
      qtyOrdered: qtyOrdered,
      qtyShipped: qtyShipped,
      qtyShorted: qtyShorted,
      width: width,
      flute: flute,
      grade: grade,
      print: print,
    };
  });

  console.log("customers: ", customers);
  // console.log("data in to transform function: ", data);
  // console.log("data that has been transformed: ", transformedData);
  // console.log("data type of transformed Data: ", typeof transformedData);
  const transformedData = customers;
  return transformedData;
}
