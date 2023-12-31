import React from "react";

import "./../Styles/Footer.css";
import img1 from "./../../public/logo2.png";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className=" paddings innerWidth flexCenter footer-container">
        {/* left-footer */}

        <div className="left-footer">
          <img src={img1} alt="logo" />
          <div className="secondaryText">
            Our vision is to make all people the best place to live for them.
          </div>
        </div>

        {/* right-footer */}

        <div className="right-footer">
          <div className="flexCenter textfooter">
            <span className="primaryText">Information</span>
            <span className="secondaryText">145 New York, FL 5467, USA</span>
          </div>

          <ul>
            <li>
              <a>Property</a>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Product</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
