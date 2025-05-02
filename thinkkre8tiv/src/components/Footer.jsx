import React from 'react';
import '../App.css';

    

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-brand">
              <span className="footer-brand-name">Thinkkr8tive Media</span>
            </div>
            <p className="footer-description">
              We specialize in creating custom branded souvenirs for businesses, events, and personal use. 
              Quality products, expert design, and reliable service.
            </p>
          </div>
          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              <li>
                <a href="/" className="footer-link">Home</a>
              </li>
              <li>
                <a href="AboutUs" className="footer-link">AboutUs</a>
              </li>
              <li>
                <a href="Services" className="footer-link">Services</a>
              </li>
              <li>
                <a href="Gallery" className="footer-link">Gallery</a>
              </li>
              <li>
                <a href="Contact" className="footer-link">Contact</a>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Thinkkre8tiv Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

