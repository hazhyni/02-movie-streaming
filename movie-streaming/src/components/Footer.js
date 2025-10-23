import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>HyFlix</h3>
          <p>Your ultimate streaming destination</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#careers">Careers</a>
            <a href="#press">Press</a>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <a href="#help">Help Center</a>
            <a href="#contact">Contact Us</a>
            <a href="#terms">Terms of Service</a>
          </div>

          <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#facebook">📘</a>
              <a href="#twitter">🐦</a>
              <a href="#instagram">📷</a>
              <a href="#youtube">📺</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Hazhiyah Yumni (hazhyni) &copy; 2025 HyFlix. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
