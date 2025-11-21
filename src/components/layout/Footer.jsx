// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-heading">
      {/* Subtle top divider */}
      <div className="footer__divider" aria-hidden="true" />

      <div className="footer__inner">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo-link" aria-label="Eco Plains Safaris – Home">
              <img 
                src="/icons/eco plains logo.png" 
                alt="Eco Plains Safaris" 
                className="footer__logo"
                width="180"
                height="52"
                loading="lazy"
              />
            </Link>
            <p className="footer__tagline">
              Unrivaled luxury safaris across East Africa’s wild heart.
            </p>
          </div>

          {/* Navigation */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <h3 className="footer__title">Explore</h3>
            <ul className="footer__list">
              {['Home', 'Safaris', 'Destinations', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="footer__link"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="footer__contact">
            <h3 className="footer__title">Get in Touch</h3>
            <address className="footer__address">
              <a href="mailto:hello@ecoplains.com" className="footer__contact-link">hello@ecoplains.com</a>
              <a href="tel:+254700123456" className="footer__contact-link">+254 700 123 456</a>
              <p>Nairobi, Kenya</p>
            </address>
          </div>

          {/* Newsletter & Social */}
          <div className="footer__newsletter-social">
            <h3 className="footer__title">Stay Inspired</h3>
            
            <form className="footer__newsletter" aria-label="Subscribe to newsletter">
              <label htmlFor="footer-email" className="visually-hidden">Email address</label>
              <input
                type="email"
                id="footer-email"
                placeholder="Your email address"
                className="footer__input"
                required
              />
              <button type="submit" className="footer__submit" aria-label="Subscribe">
                <svg viewBox="0 0 24 24" className="footer__arrow"><path d="M4 12h16m-6-6l6 6-6 6"/></svg>
              </button>
            </form>

            <div className="footer__social" aria-label="Social media">
              <a href="https://instagram.com" target="_blank" rel="noopener" className="footer__social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="18" cy="6" r="1.5"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener" className="footer__social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Eco Plains Safaris. All rights reserved.
          </p>
          <div className="footer__legal">
            <Link to="/privacy" className="footer__legal-link">Privacy Policy</Link>
            <span className="footer__separator" aria-hidden="true">•</span>
            <Link to="/terms" className="footer__legal-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}