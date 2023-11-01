import { LOGO_URL } from "../utils/constants";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Header = () => {
  
  console.log("Header Component Rendered.")
  const [loginLogoutBtn, setLoginLogoutBtn] = useState("Login");
  useEffect(()=>{
    console.log("UserEffect hook is called in Header Component.")
  }, [loginLogoutBtn]);

    return (
      <div className="header">
        <div className="logoContainer">
          <img src={LOGO_URL} alt="Company-Logo" />
        </div>
        <div className="header-nav-items">
          <ul>
            <li> 
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <button onClick={() => {
              if(loginLogoutBtn == "Login"){
                setLoginLogoutBtn("Logout");
              }else{
                setLoginLogoutBtn("Login");
              }
            }}>{loginLogoutBtn}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;