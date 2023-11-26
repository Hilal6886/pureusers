// Updated Footer Component
import React from 'react';
import gpt3Logo from './ddr.png';
import './footer.css';
import {  Link } from 'react-router-dom';

const Footer = () => (
  <footer className="gpt3__footer section__padding">
    <div className="gpt3__footer-content">
      <div className="gpt3__footer-logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>
          At our company, we offer a cutting-edge Data Insights Platform that empowers businesses with comprehensive and real-time information.
        </p>
        <ul className="social-icons">
          <li><a href="https://www.facebook.com/profile.php?id=100093720302841" aria-label="Facebook"><i className="fab fa-facebook"></i></a></li>
          <li><a href="https://twitter.com/Naz75730eerAhme" aria-label="Twitter"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/in/nazeer-ahmed-318843278" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
      </div>
      <div className="gpt3__footer-links">
        <div className="footer-links-section">
          <h4>Links</h4>
          <Link to="/home" ><p>Home</p></Link>
          <Link to="/categories"><p>CATEGORIES</p></Link>
          <Link to="/CBlog"> <p>BLOGS</p></Link>
          <Link to="/contact-us" ><p>CONTACT</p></Link>
       
        </div>
        <div className="footer-links-section">
          <h4>Company</h4>
          <Link to="/TermsAndConditions" ><p>Terms & Conditions</p></Link>
          <Link to="/PrivacyPolicy" ><p>Privacy Policy</p></Link>
         
          
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
