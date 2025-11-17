// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';  
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-heading">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link" aria-label="Eco Plains Safaris Home">
              <img src="/logo-white.svg" alt="" className="footer-logo" width="180" height="52" loading="lazy" />
            </Link>
            <p className="footer-tagline">
              Unrivaled luxury safaris across East Africa’s wild heart.
            </p>
          </div>

          {/* Navigation */}
          <nav className="footer-nav" aria-label="Footer navigation">
            <h3 className="footer-nav-title">Explore</h3>
            <ul className="footer-nav-list">
              {['Home', 'Trips', 'Destinations', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="footer-link"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3 className="footer-contact-title">Get in Touch</h3>
            <address className="footer-contact-info">
              <p><a href="mailto:hello@ecoplains.com" className="footer-contact-link">hello@ecoplains.com</a></p>
              <p><a href="tel:+254700123456" className="footer-contact-link">+254 700 123 456</a></p>
              <p>Nairobi, Kenya</p>
            </address>
          </div>

          {/* Social & Newsletter */}
          <div className="footer-social">
            <h3 className="footer-social-title">Follow Us</h3>
            <div className="footer-social-icons" aria-label="Social media links">
              {/* Keep external links as <a> */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <span className="footer-icon footer-icon--instagram"></span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
                <span className="footer-icon footer-icon--facebook"></span>
              </a>
              {/* ... etc */}
            </div>

            <form className="footer-newsletter" aria-label="Subscribe to newsletter">
              <label htmlFor="footer-email" className="visually-hidden">Email address</label>
              <input type="email" id="footer-email" placeholder="Your email" className="footer-input" required />
              <button type="submit" className="footer-btn">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© {new Date().getFullYear()} Eco Plains Safaris. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy" className="footer-legal-link">Privacy Policy</Link>
            <span className="footer-separator">•</span>
            <Link to="/terms" className="footer-legal-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}