import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h1  className="contact-heading">Ready to Brand Your Souvenirs?</h1>
      <h2 className="contact-heading">Get in Touch</h2>
      <p>📱 <a href="https://wa.me/233244681391" className="contact-link">WhatsApp Us</a></p>
      <p>📧 <a href="mailto:kre8tiv@thinkkre8tiv.com" className="contact-link">Email Us</a></p>
      <p>📸 <a href="https://instagram.com/thinkkre8tiv" target="_blank" rel="noopener noreferrer" className="contact-link">Follow us on Instagram</a></p>
      <p>🎵 <a href="https://tiktok.com/@thinkkre8tivmedia" target="_blank" rel="noopener noreferrer" className="contact-link">Follow us on TikTok</a></p>
    </section>
  );
};

export default Contact;
