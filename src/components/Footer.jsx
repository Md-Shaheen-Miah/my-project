import React from 'react';
import "./style.css"

const Footer = () => {
    return (
    <footer className="footer">
      <div className="container">
        <h1 className="footer-text">© 2024 My Website. All rights reserved.</h1>
        <ul className="footer-links">
          <li href="#Home">Home</li>
          <li href="#about">About</li>
          <li href="#services">Services</li>
          <li href="#contact">Contact</li>
        </ul>
      </div>
    </footer>
    );
};

export default Footer;