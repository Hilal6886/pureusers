import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container container">
      <h1 className="title">Privacy Policy</h1>
      <p className="description">
        At Pure Users, we are committed to protecting your privacy. This Privacy Policy outlines how your personal
        information is collected, used, and shared when you use our services.
      </p>

      <h2 className="section-title">1. Information We Collect</h2>
      <p>
        We collect information that you provide directly to us, such as your name, email address, and other contact or
        identifying information.
      </p>

      <h2 className="section-title">How We Use Your Information</h2>
      <p>
        We use the information we collect to provide and improve our services, communicate with you, and offer you
        targeted content and advertisements.
      </p>

      <h2 className="section-title">Information Sharing</h2>
      <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.</p>

      <h2 className="section-title"> Security</h2>
      <p>
        We take reasonable measures to protect your personal information, but no method of transmission over the Internet
        or electronic storage is 100% secure.
      </p>

      <h2 className="section-title">Changes to This Privacy Policy</h2>
      <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

      {/* Add more sections as needed */}
    </div>
  );
};

export default PrivacyPolicy;
