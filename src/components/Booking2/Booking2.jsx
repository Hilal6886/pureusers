// Booking2.js

import React, { useState } from 'react';
import { RiMailFill, RiPhoneFill, RiUserFill, RiLockFill, RiArrowRightCircleFill } from 'react-icons/ri';
import './booking2.css';

const Booking2 = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessEmail: '',
    businessPhone: '',
    email: '',
    password: '',
    confirmPassword: '',
    numberOfContacts: '',
    message: '',
    subscribeNewsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="title5">GET A FREE QUOTE</p>
      <p className="message">We have got you covered on all your email and direct marketing needs</p>

      <div className="flex">
        <label>
          <RiUserFill className="input-icon" />
          <input
            required
            placeholder="First Name"
            type="text"
            className="input"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
       
        </label>

        <label>
          <RiUserFill className="input-icon" />
          <input
            required
            placeholder="Last Name"
            type="text"
            className="input"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
       
        </label>
      </div>

      <div className="flex">
        <label>
          <RiMailFill className="input-icon" />
          <input
            required
            placeholder="Business Email"
            type="text"
            className="input"
            name="business Email"
            value={formData.businessEmail}
            onChange={handleChange}
          />
         
        </label>

        <label>
          <RiPhoneFill className="input-icon" />
          <input
            required
            placeholder="Business Phone"
            type="text"
            className="input"
            name="businessPhone"
            value={formData.businessPhone}
            onChange={handleChange}
          />
         
        </label>
      </div>

      <label>
        <RiMailFill className="input-icon" />
        <input
          required
          placeholder="Company Name "
          type="text"
          className="input"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
    
      </label>

      

      
      <label>
        <RiArrowRightCircleFill className="input-icon" />
        <select
          required
          className="input"
          name="numberOfContacts"
          value={formData.numberOfContacts}
          onChange={handleChange}
        >
          <option value="" disabled>Select number of contacts</option>
          {[1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      
      </label>

      <label>
        <RiArrowRightCircleFill className="input-icon" />
        <textarea
          required
          placeholder="Your message here..."
          className="input textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      
      </label>

      <label className="subscribe-label">
        <input
          type="checkbox"
          className="subscribe-checkbox"
          name="subscribeNewsletter"
          checked={formData.subscribeNewsletter}
          onChange={handleChange}
        />
        I would like to Subscribe to your newsletter
      </label>

      <button type="submit" className="submit">
        Submit
      </button>

      

    
    </form>
  );
};

export default Booking2;
