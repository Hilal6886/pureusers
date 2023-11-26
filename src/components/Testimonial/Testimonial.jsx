import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const [state, handleSubmit] = useForm('xzblqnpb');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const showToast = (type, message) => {
    toast[type](message, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await handleSubmit(e);
      if (state.succeeded) {
        showToast('success', 'Thanks for joining!');
        // You can perform additional actions after successful form submission
      }
    } catch (error) {
      showToast('error', 'Error submitting form');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <section className="section-wrapper">
        <div className="box-wrapper">
        <div className="info-wrap">
          <h2 className="info-title">Contact Information</h2>
          <h3 className="info-sub-title">Fill up the form and our Team will get back to you within 24 hours</h3>
          <ul className="info-details">
            <li>
              <i className="fas fa-phone-alt"></i>
              <span>Phone:</span> <a href="tel:+919663565181">+91 9663565181</a>
            </li>
            <li>
              <i className="fas fa-paper-plane"></i>
              <span>Email:</span> <a href="mailto:info@pureusers.com">info@pureusers.com</a>
            </li>
            <li>
              <i className="fas fa-globe"></i>
              <span>Website:</span> <a href="ww">pureusers.com</a>
            </li>
          </ul>
          <ul className="social-icons">
            <li><a href="https://www.facebook.com/profile.php?id=100093720302841"><i className="fab fa-facebook"></i></a></li>
            <li><a href="https://twitter.com/Naz75730eerAhme"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/in/nazeer-ahmed-318843278"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
          <div className="form-wrap">
            <form onSubmit={handleFormSubmit}>
              <h2 className="form-title">Send us a message</h2>
              <div className="form-fields">
                <div className="form-group">
                  <input
                    type="txt"
                    className="fname"
                    placeholder="First Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="txt"
                    className="lname"
                    placeholder="Last Name"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="phone"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Write your message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Send Message"
                className="submit-button"
                disabled={state.submitting}
              />
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
