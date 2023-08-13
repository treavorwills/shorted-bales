export default function TmsNumbers( { customers  } ) {
  let tmsIdsList = '';
  customers.forEach((customer) => {
    customer.orders.forEach((order) => {
      tmsIdsList += `, ${order.tmsId}`;
    });
  });

  tmsIdsList = tmsIdsList.slice(2);

  return (
    <>
    <div>{tmsIdsList}</div>
    </>
  )
}

