export default function transformShortedBaleData(data) {
  const transformedData = [];

  //
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

    const customer = transformedData.find((c) => c.customerId === customerId);

    if (!customer) {
      const newCustomer = {
        customerId: customerId,
        name: name,
        orders: [],
      };

      const newOrder = {
        orderId: orderId,
        po: po,
        tmsId: tmsId,
        materials: [
          {
            materialId: materialId,
            custPartNumber: custPartNumber,
            qtyOrdered: qtyOrdered,
            qtyShipped: qtyShipped,
            qtyShorted: qtyShorted,
            width: width,
            flute: flute,
            grade: grade,
            print: print,
          },
        ],
      };

      newCustomer.orders.push(newOrder);
      transformedData.push(newCustomer);
    } else {
      const order = customer.orders.find((o) => o.orderId === orderId);

      if (!order) {
        const newOrder = {
          orderId: orderId,
          po: po,
          tmsId: tmsId,
          materials: [
            {
              materialId: materialId,
              custPartNumber: custPartNumber,
              qtyOrdered: qtyOrdered,
              qtyShipped: qtyShipped,
              qtyShorted: qtyShorted,
              width: width,
              flute: flute,
              grade: grade,
              print: print,
            },
          ],
        };

        customer.orders.push(newOrder);
      } else {
        const material = order.materials.find(
          (m) => m.materialId === materialId
        );

        if (!material) {
          order.materials.push({
            materialId: materialId,
            custPartNumber: custPartNumber,
            qtyOrdered: qtyOrdered,
            qtyShipped: qtyShipped,
            qtyShorted: qtyShorted,
            width: width,
            flute: flute,
            grade: grade,
            print: print,
          });
        }
      }
    }
  });

//   console.log("data in to transform function: ", data);
//   console.log("data that has been transformed: ", transformedData);
//   console.log("data type of transformed Data: ", typeof transformedData);

  console.log("transformed data: ", transformedData);
  return transformedData;
}
