import CopyToClipboardButton from './CopyToClipboardButton.jsx'


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
    <p>TMS IDs: {tmsIdsList}</p>
    <CopyToClipboardButton textToCopy={tmsIdsList} buttonText='Copy TMS IDs'/>
    </>
  )
}

