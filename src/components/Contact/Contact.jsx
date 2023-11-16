// ContactForm.js

import React, { useState } from 'react';
import './contact.scss'; // Assuming you have a corresponding CSS file
import con from './cont.jpg'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
   < div>
    <section className="section-wrapper">
      <div className="box-wrapper">
        <div className="info-wrap">
          <h2 className="info-title">Contact Information</h2>
          <h3 className="info-sub-title">Fill up the form and our Team will get back to you within 24 hours</h3>
          <ul className="info-details">
            <li>
              <i className="fas fa-phone-alt"></i>
              <span>Phone:</span> <a href="tel:+1235235598">+91 9663565181</a>
            </li>
            <li>
              <i className="fas fa-paper-plane"></i>
              <span>Email:</span> <a href="mailto:info@yoursite.com">info@pureusers.com</a>
            </li>
            <li>
              <i className="fas fa-globe"></i>
              <span>Website:</span> <a href="ww">pureusers.com</a>
            </li>
          </ul>
          <ul className="social-icons">
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
        <div className="form-wrap">
          <form action="#" method="POST">
            <h2 className="form-title">Send us a message</h2>
            <div className="form-fields">
              <div className="form-group">
                <input type="text" className="fname" placeholder="First Name" />
              </div>
              <div className="form-group">
                <input type="text" className="lname" placeholder="Last Name" />
              </div>
              <div className="form-group">
                <input type="email" className="email" placeholder="Mail" />
              </div>
              <div className="form-group">
                <input type="number" className="phone" placeholder="Phone" />
              </div>
              <div className="form-group">
                <textarea name="message" id="" placeholder="Write your message"></textarea>
              </div>
            </div>
            <input type="submit" value="Send Message" className="submit-button" />
          </form>
        </div>
      </div>
    </section>
  </div>
  );
};

export default ContactForm;
