import React from 'react';
import './Footer.css';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            Made with <FaHeart className="heart-icon" /> by Amit
          </p>
          <p className="copyright">
            © {currentYear} Amit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

