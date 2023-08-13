export default function constructEmail(customer) {
  const orderDetails = customer.orders
    .map((order) => {
      const orderDetails = order.materials
        .map((material) => {
          return `
${material.width}" ${material.grade} ${material.flute} ${material.print === "YES" ? "Print" : ""} - shipped ${material.qtyShipped} of ${material.qtyOrdered} bales
`;
})
        .join("\n");

      return `
Purchase Order: ${order.po}
${orderDetails}
`;
    })
    .join("\n");

  return `
Hello,
  
I wanted to reach out and let you know that due to production quality, the following line items will be shipped short. 
  
${orderDetails}

You will only be charged for the amount shipped and this order is considered complete. I apologize for any inconvenience this may cause.
    
Thank you,

Packsize Customer Operations
    
***We have a new email address! Please send all future correspondence and requests to customeroperations.us.ticketing@packsize.com*** 
`;
}
