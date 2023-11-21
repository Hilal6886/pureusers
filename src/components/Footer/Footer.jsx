// Updated Footer Component
import React from 'react';
import gpt3Logo from './ddr.png';
import './footer.css';

const Footer = () => (
  <footer className="gpt3__footer section__padding">
    <div className="gpt3__footer-content">
      <div className="gpt3__footer-logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>
          At our company, we offer a cutting-edge Data Insights Platform that empowers businesses with comprehensive and real-time information.
        </p>
        <ul className="social-icons">
          <li><a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a></li>
          <li><a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
      </div>
      <div className="gpt3__footer-links">
        <div className="footer-links-section">
          <h4>Links</h4>
          <p>Home</p>
          <p>Categories</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="footer-links-section">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-links-section">
          <h4>Get in touch</h4>
          <p> +91 9663565181</p>
          <p> info@pureusers.com</p>
        </div>
      </div>
    </div>
    <div className="gpt3__footer-copyright">
      <p> All rights reserved by Pure Users</p>
    </div>
  </footer>
);

export default Footer;
