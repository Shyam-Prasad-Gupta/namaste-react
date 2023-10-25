import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logoContainer">
          <img src={LOGO_URL} alt="Company-Logo" />
        </div>
        <div className="header-nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;