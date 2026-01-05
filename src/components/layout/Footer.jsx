// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="luxury-footer">
      {/* Trust Badge Bar - DO NOT TOUCH (Frosty Green Perfection) */}
      <div className="trust-badge-bar">
        <div className="trust-badge-bar__container">
          <div className="trust-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span>Trusted by travelers worldwide</span>
          </div>
          <div className="trust-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span>Award-winning safari experiences</span>
          </div>
          <div className="trust-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span>Supporting conservation & communities</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content (Dark Green Palette) */}
      <div className="luxury-footer__main">
        <div className="luxury-footer__container">
          {/* Company Column */}
          <div className="footer-column">
            <h3 className="footer-column__title">Company</h3>
            <ul className="footer-column__links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/about#team">Our Team</Link></li>
              <li><Link to="/about#story">Our Story</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Safaris Column */}
          <div className="footer-column">
            <h3 className="footer-column__title">Safaris</h3>
            <ul className="footer-column__links">
              <li><Link to="/safaris">All Safaris</Link></li>
              <li><Link to="/safaris?category=Wildlife Safari">Wildlife Safaris</Link></li>
              <li><Link to="/safaris?category=Beach Holiday">Beach Holidays</Link></li>
              <li><Link to="/safaris?category=Adventure">Adventure Tours</Link></li>
            </ul>
          </div>

          {/* Destinations Column */}
          <div className="footer-column">
            <h3 className="footer-column__title">Destinations</h3>
            <ul className="footer-column__links">
              <li><Link to="/safaris?destination=Kenya">Kenya</Link></li>
              <li><Link to="/safaris?destination=Tanzania">Tanzania</Link></li>
              <li><Link to="/safaris?destination=Uganda">Uganda</Link></li>
              <li><Link to="/safaris?destination=Rwanda">Rwanda</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <h3 className="footer-column__title">Get In Touch</h3>
            <ul className="footer-column__links">
              <li><a href="mailto:ecoplainsafaris@gmail.com">ecoplainsafaris@gmail.com</a></li>
              <li><a href="tel:+25469122507">+254 691 225 07</a></li>
              <li>Comet Mall, Monrovia Street, 1st Floor, Nairobi, Kenya</li>
            </ul>

            {/* Social Icons */}
            <div className="footer-social">
              <a href="https://www.tiktok.com/@eco_plains_safaris" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/eco_plains_safaris/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar (Dark Green Palette) */}
      <div className="luxury-footer__bottom">
        <div className="luxury-footer__divider">
          <svg viewBox="0 0 120 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4 Q30 0, 60 4 T120 4" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="luxury-footer__bottom-content">
          <p className="luxury-footer__copyright">
            © {currentYear} Eco Plains Safaris. All rights reserved.
          </p>
          <div className="luxury-footer__legal">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="luxury-footer__legal-divider">•</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}