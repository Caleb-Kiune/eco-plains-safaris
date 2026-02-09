import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { prefetchSafaris } from '../../hooks/useSafaris';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false); // ← Now properly tracked in state
  const lastScrollY = useRef(0);
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  // Detect Safari Details pages to adjust navbar style (transparent/solid)
  const isSafariDetailsPage = location.pathname.startsWith('/safaris/') || location.pathname.startsWith('/safari/');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const current = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Hide/show on scroll direction
          if (current > lastScrollY.current && current > 100) {
            setVisible(false);
          } else if (current < lastScrollY.current) {
            setVisible(true);
          }

          // Track if we're past the hero
          setScrolled(current > 50);

          lastScrollY.current = current;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <nav
      className={`navbar ${visible ? 'visible' : 'hidden'} ${scrolled || isContactPage || isSafariDetailsPage ? 'scrolled' : ''} ${isContactPage || isSafariDetailsPage ? 'contact-mode' : ''}`}
      aria-label="Main navigation"
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo" aria-label="Eco Plains Safaris - Home">
          <img
            src="https://res.cloudinary.com/dy082ykuf/image/upload/f_auto,q_auto/v1769593457/eco-plains-safaris/logos/logo_main.png"
            alt="Eco Plains Safaris Logo"
            className="nav-logo-img"
            width="180"
            height="60"
          />
        </Link>

        <ul className="nav-menu">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item">
            <Link
              to="/safaris"
              className="nav-link"
              onMouseEnter={prefetchSafaris}
              onFocus={prefetchSafaris} // Accessibility support
            >
              Safaris
            </Link>
          </li>
          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>

        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div id="mobile-menu" className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <Link to="/" className="mobile-link" onClick={toggleMenu}>Home</Link>
          <Link to="/safaris" className="mobile-link" onClick={toggleMenu}>Safaris</Link>
          <Link to="/about" className="mobile-link" onClick={toggleMenu}>About</Link>
          <Link to="/contact" className="mobile-link" onClick={toggleMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}