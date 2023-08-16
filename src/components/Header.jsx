function Header() {
  return (
    <>
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
      <p>
        Upload the shorted bales CSV file, add or review the email contacts, and
        then hit send! Don't forget to add the "Shorted Bales Review" note to
        the order in TMS!
      </p>
    </>
  );
}

export default Header;
