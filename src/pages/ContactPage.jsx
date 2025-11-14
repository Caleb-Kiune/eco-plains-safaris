// src/pages/ContactPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import './ContactPage.css';

export default function ContactPage() {
  const sectionRef = useRef(null);
  const [formStatus, setFormStatus] = useState(''); // 'idle' | 'submitting' | 'success' | 'error'

  // Fade-in on scroll
  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('contact-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(currentSection);
    return () => observer.unobserve(currentSection);
  }, []);

  // Mock form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus(''), 5000); // clear after 5s
    }, 1500);
  };

  return (
    <main className="contact-page" ref={sectionRef}>
      {/* Hero / Header */}
      <header className="contact-hero">
        <div className="contact-hero__container">
          <h1 className="contact-hero__headline">Get in Touch</h1>
          <p className="contact-hero__subheadline">
            We’d love to hear from you — whether you’re planning a safari or have a question.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="contact-content">
        <div className="contact-content__container">
          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form__grid">
              {/* Name */}
              <div className="contact-form__field">
                <label htmlFor="name" className="contact-form__label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact-form__input"
                  required
                  aria-required="true"
                />
              </div>

              {/* Email */}
              <div className="contact-form__field">
                <label htmlFor="email" className="contact-form__label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact-form__input"
                  required
                  aria-required="true"
                />
              </div>

              {/* Phone (Optional) */}
              <div className="contact-form__field">
                <label htmlFor="phone" className="contact-form__label">
                  Phone Number{' '}
                  <span className="contact-form__optional">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="contact-form__input"
                />
              </div>

              {/* Subject */}
              <div className="contact-form__field">
                <label htmlFor="subject" className="contact-form__label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="contact-form__input"
                  required
                  aria-required="true"
                />
              </div>
            </div>

            {/* Message */}
            <div className="contact-form__field contact-form__field--full">
              <label htmlFor="message" className="contact-form__label">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="contact-form__textarea"
                required
                    aria-required="true"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="contact-form__submit"
              disabled={formStatus === 'submitting'}
            >
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {/* Form Status */}
            {formStatus === 'success' && (
              <p className="contact-form__status contact-form__status--success">
                Thank you! Your message has been sent. We’ll reply within 24–48 hours.
              </p>
            )}
            {formStatus === 'error' && (
              <p className="contact-form__status contact-form__status--error">
                Oops! Something went wrong. Please try again.
              </p>
            )}
          </form>

          {/* Contact Info Block */}
          <aside className="contact-info" aria-labelledby="contact-info-heading">
            <h2 id="contact-info-heading" className="contact-info__headline">
              Contact Information
            </h2>

            <div className="contact-info__item">
              <svg className="contact-info__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:hello@ecoplains.com" className="contact-info__link">
                hello@ecoplains.com
              </a>
            </div>

            <div className="contact-info__item">
              <svg className="contact-info__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href="tel:+254700123456" className="contact-info__link">
                +254 700 123 456
              </a>
            </div>

            <div className="contact-info__item">
              <svg className="contact-info__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="contact-info__text">Nairobi, Kenya</span>
            </div>

            {/* Social Icons – now <button> to satisfy a11y */}
            <div className="contact-info__social">
              <button
                className="contact-info__social-link"
                aria-label="Instagram"
                onClick={() => window.open('https://instagram.com/ecoplains', '_blank')}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="18" cy="6" r="1" />
                </svg>
              </button>

              <button
                className="contact-info__social-link"
                aria-label="Facebook"
                onClick={() => window.open('https://facebook.com/ecoplains', '_blank')}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
            </div>

            <p className="contact-info__note">
              We aim to reply within 24–48 hours.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}