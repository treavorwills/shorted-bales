function Header() {
  return (
    <div className="header">
      <div className="top-hero">
        <div className="credit">
          <p className="photo-credit">
            photo by
            <a href="https://unsplash.com/@roberto_sorin" target="_blank">
              Roberto Sorin on Unsplash
            </a>
          </p>
        </div>
        <div className="name">
          <p>shorted bales</p>
        </div>
      </div>
      <div className="instructions">
        <p>
          Upload the shorted bales CSV file, add the customer contacts you'd like to notify, and then hit the <strong><i>Update Customers</i></strong> button below! Don't forget to add the "Shorted Bales Review" note to
          the order in TMS!
        </p>
      </div>
    </div>
  );
}

export default Header;
