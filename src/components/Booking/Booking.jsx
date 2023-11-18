import React, { useState } from 'react';
import { Form, FormGroup } from 'reactstrap';
import emailjs from 'emailjs-com';
import './booking.scss';



const Booking = ({ product,handleToast }) => {
  const [credentials, setCredentials] = useState({
    name: '',
    emailAddress: '',
    phone: '',
    message: ''
  });

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = e => {
    e.preventDefault();

    // Send the form data to a specific email address using EmailJS
    emailjs
      .send(
        'service_m4693a8',
        'te23_pureUsers',
        {
          to_name: 'Recipient Name',
        from_name: credentials.name,
        number: credentials.phone,
        'from-name': credentials.name,
        user_email: credentials.emailAddress,
        message: credentials.message,
        product_title: product.title
        },
        'rGyJqdkYGKE7Z2QDt'
      )
      .then(
        response => {
          console.log('Email sent successfully', response.status, response.text);
          handleToast('Thank you We will contact you soon ', 'success');
        },
        error => {
          console.error('Failed to send email', error);
          handleToast('Failed to send email', 'error');
        }
      );
  };

  return (
    <div className="booking">
 
      <div className="booking_form">
         <div className='head'>
       
        <h3 className="gradient__text8">GET COUNTS AND QUOTES</h3>
        </div>
        <Form className="booking_info-form" onSubmit={handleClick}>
          <FormGroup>
            <input type="tet" placeholder=" Your Name" id="name" required onChange={handleChange} class="form--input"/>
          </FormGroup>
          <FormGroup>
            <input type="tet" placeholder=" Company Name" id="name" required onChange={handleChange} class="form--input"/>
          </FormGroup>
          <FormGroup>
            <input
              type="email"
              placeholder=" Business Email Address"
              id="emailAddress"
              required
              onChange={handleChange}
              class="form--input"
            />
          </FormGroup>
          <FormGroup>
            <input type="tel" placeholder="Phone Number" id="phone" required onChange={handleChange} class="form--input"/>
          </FormGroup>
          <FormGroup>
            <input
              
              placeholder="Requirements"
              id="message"
              required
              onChange={handleChange}
              class="form--input7"
            />
          </FormGroup>
          <button className="btna primary_btn w-100% mt-4" onClick={handleClick}>
            SUBMIT REQUEST
            <i class="ri-arrow-right-line"> </i>
          </button>
        </Form>
      </div>

      <div className="booking_bottom"></div>
  
    </div>
  );
};

export default Booking;
