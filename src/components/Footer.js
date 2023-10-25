import { LOGO_URL } from "../utils/constants";

const Footer = () => {
    return (
      <div className="footer">
        <div>
          <img src={LOGO_URL} alt="Company Logo"/>
          <p>Copyright Swiggy</p>
        </div>
        <div className="footer-company-nav">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
          </ul>
        </div>
        <div className="footer-contactus-nav">
          <h4>Contact Us</h4>
          <ul>
            <li>Help & Support</li>
            <li>Partner with Us</li>
            <li>Ride With Us</li>
          </ul>
        </div>
        <div className="footer-legal-nav">
          <h4>Legal</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-servicingcity-nav">
          <h4>We Deliver To:</h4>
          <ul>
            <li>Bangalore</li>
            <li>Gurugram</li>
            <li>Noida</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
            <li>+589 Cities</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Footer;