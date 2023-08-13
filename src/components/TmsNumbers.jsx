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
    <div className="tms-ids">
    <p>
      <CopyToClipboardButton textToCopy={tmsIdsList} buttonText='Click here'/> to copy the TMS IDs to add the shorted bale review comments in TMS!
    </p>
    </div>
  )
}

