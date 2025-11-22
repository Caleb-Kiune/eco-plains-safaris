// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down & past hero → hide navbar
        setVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up → show navbar
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <nav
      className={`navbar ${visible ? 'visible' : 'hidden'} ${window.scrollY > 50 ? 'scrolled' : ''}`}
      aria-label="Main navigation"
    >
      <div className="nav-container">
        
        {/* Logo */}
        <Link to="/" className="nav-logo" aria-label="Eco Plains Safaris - Home">
          <img 
            src="/icons/eco plains logo.png" 
            alt="Eco Plains Safaris Logo" 
            className={`nav-logo-img ${window.scrollY > 50 ? 'shrink' : ''}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-menu" aria-label="Desktop navigation">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/safaris" className="nav-link">Safaris</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>

        {/* Mobile Hamburger */}
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

        {/* Mobile Menu */}
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