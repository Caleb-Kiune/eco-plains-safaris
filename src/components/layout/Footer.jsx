// src/components/layout/Footer.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setSubscribed(true);
    setEmail('');

    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="footer" aria-labelledby="footer-heading">
      {/* Trust Badges Section */}
      <div className="footer__trust">
        <div className="footer__trust-inner">
          <p className="footer__trust-label">Trusted by travelers worldwide</p>
          <div className="footer__badges">
            {/* TripAdvisor Excellence */}
            <div className="footer__badge" aria-label="TripAdvisor Excellence">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span>TripAdvisor Excellence</span>
            </div>

            {/* ATOL Protected */}
            <div className="footer__badge" aria-label="ATOL Protected">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
              </svg>
              <span>ATOL Protected</span>
            </div>

            {/* SafariBookings 5★ */}
            <div className="footer__badge" aria-label="SafariBookings 5 Stars">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span>SafariBookings 5★</span>
            </div>

            {/* Virtuoso Member */}
            <div className="footer__badge" aria-label="Virtuoso Member">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
              </svg>
              <span>Virtuoso Member</span>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="footer__newsletter-section">
        <div className="footer__newsletter-inner">
          <h3 className="footer__newsletter-title">
            Journey Inspiration, Delivered
          </h3>
          <p className="footer__newsletter-subtitle">
            Exclusive safari stories, seasonal offers, and wild wisdom.
          </p>

          <form className="footer__newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Your email for wild inspiration"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="footer__newsletter-input"
              required
              aria-label="Email for newsletter"
            />
            <button type="submit" className="footer__newsletter-button">
              {subscribed ? '✓ Subscribed' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
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
              Unrivaled luxury safaris across East Africa's wild heart.
            </p>
          </div>

          {/* Navigation */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <h3 className="footer__title">Explore</h3>
            <ul className="footer__list">
              {['Home', 'Safaris', 'About', 'Contact'].map((item) => (
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
              <a href="mailto:hello@ecoplains.com" className="footer__contact-link">
                hello@ecoplains.com
              </a>
              <a href="tel:+254700123456" className="footer__contact-link">
                +254 700 123 456
              </a>
              <p>Nairobi, Kenya</p>
            </address>
          </div>

          {/* Social */}
          <div className="footer__social-column">
            <h3 className="footer__title">Follow Our Journey</h3>
            <div className="footer__social" aria-label="Social media">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="18" cy="6" r="1.5" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Twitter/X"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
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