export default function constructEmail(customer) {
  const orderDetails = customer.orders
    .map((order) => {
      const orderDetails = order.materials
        .map((material) => {
          return `
  <table style="border-collapse: collapse; border: 1px solid black;">
  <tr>
  <th colspan="5" style="border: 1px solid black; padding: 10px; text-align: center;">PO: ${order.po}</th>
  </tr>
  <tr>
  <th style="border: 1px solid black; padding: 10px; text-align: center;">Material #</th>
  <th style="border: 1px solid black; padding: 10px; text-align: center;">Material</th>
  <th style="border: 1px solid black; padding: 10px; text-align: center;">Qty Ordered</th>
  <th style="border: 1px solid black; padding: 10px; text-align: center;">Qty Shipped</th>
  <th style="border: 1px solid black; padding: 10px; text-align: center;">Qty Short</th>
  </tr>
<td style="border: 1px solid black; padding: 10px; text-align: center;">${material.materialId}</td>
<td style="border: 1px solid black; padding: 10px; text-align: center;">${material.width}" ${material.grade} ${material.flute} ${
            material.print === "YES" ? "Print" : ""
          }</td>
<td style="border: 1px solid black; padding: 10px; text-align: center;">${material.qtyOrdered}</td>
<td style="border: 1px solid black; padding: 10px; text-align: center;">${material.qtyShipped}</td>
<td style="border: 1px solid black; padding: 10px; text-align: center;">${material.qtyShorted}</td>
</table>
<br>
`;
        })
        .join("\n");

      return `
<br>
<div style="margin: 0 auto; width: 100%; max-width: 600px; padding: 0 15px;">
  ${orderDetails}
</div>

`;
    })
    .join("\n");

  return `
<html>
  <body>
    Hello,
    <br>
    I wanted to reach out and let you know that due to production quality, the following line items will be shipped short.
    <br>
    ${orderDetails}
    <br>
    You will only be charged for the amount shipped and this order is considered complete. I apologize for any inconvenience this may cause.
    <br>
    Thank you,
    <br>
    Packsize Customer Operations
    <br>
    ***We have a new email address! Please send all future correspondence and requests to customeroperations.us.ticketing@packsize.com***
  </body>
</html>
`;
}
