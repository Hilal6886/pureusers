import React from 'react';
import './contact.scss';

const ProductPage = () => {
  return (
    <div className="container">
      {/* Header */}
      <h1 className="title">SalesForce CRM Users</h1>

      <div className="flex">
        {/* Left Card */}
        <div className="w-1/2 card">
          <div className="card-number">12,360</div>
          <p className="card-text">Companies that are using SalesForce CRM</p>
        </div>

        {/* Right Form */}
        <div className="w-1/2">
          <form className="form">
            {/* Form Inputs */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="company" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="form-textarea"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="form-button"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
