import React from "react";

function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-row">
            <h5>React Phone Store</h5>
            <p> copyright 2020 @joshErias All rights reserved.</p>
          </div>
          <div className="footer-row">
            <span>Terms and Conditions</span>
            <span>Privacy Policy</span>
            <span>Contact Us</span>
          </div>
          <div className="footer-row">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-youtube"></i>
            <i className="fa fa-github"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
