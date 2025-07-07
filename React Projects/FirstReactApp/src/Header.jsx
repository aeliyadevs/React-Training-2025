function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="logo">
          <img src="travele-logo-main.png" alt="Travele Logo" />
        </div>
        <div className="navigation-menu">
          <ul>
            <li>Home</li>
            <li>Tour</li>
            <li>Packages</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <button className="primary-button">Book Now</button>
      </div>
    </div>
  );
}
export default Header;
