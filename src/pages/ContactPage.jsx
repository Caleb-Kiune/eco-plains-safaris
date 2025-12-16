// src/pages/ContactPage.jsx 

import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import { motion } from 'framer-motion';
import './ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    destination: '',
    duration: '',
    travelers: '',
    name: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic required validation
    if (!formData.destination || !formData.duration || !formData.travelers || !formData.name || !formData.email) {
      alert("Please fill all required fields.");
      return;
    }

    setIsLoading(true);

    try {
      const data = new FormData();
      data.append("access_key", "d9f2f2ba-85ed-44e9-b597-010b69f45116");
      data.append("destination", formData.destination);
      data.append("duration", formData.duration);
      data.append("travelers", formData.travelers);
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("message", formData.message || "No additional message");
      data.append("subject", `Dream Safari Brief from ${formData.name} - ${formData.destination || "General"}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          destination: '',
          duration: '',
          travelers: '',
          name: '',
          email: '',
          message: ''
        });
      } else {
        alert("Something went wrong. Please try again or email us directly.");
      }
    } catch (error) {
      alert("Connection issue. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SEO>
        <title>Contact Us - Eco Plains Safaris</title>
        <meta name="description" content="Start your luxury safari journey. Contact our expert team to plan your bespoke African adventure." />
        <meta property="og:title" content="Contact Us - Eco Plains Safaris" />
        <meta property="og:description" content="Start your luxury safari journey with Eco Plains Safaris" />
        <meta property="og:image" content="/og-contact.jpg" />
      </SEO>

      <section className="contact-page">
        <div className="contact-page__container">
          {/* Left Side - Headline */}
          <motion.div
            className="contact-page__left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className="contact-page__title">
              Let's craft your dream safari
            </h1>
            <p className="contact-page__subtitle">
              Tell us about your vision, and we'll design an unforgettable journey through Africa's wild heart.
            </p>

            <div className="contact-page__info">
              <div className="contact-page__info-item">
                <h3>Email</h3>
                <a href="mailto:ecoplainsafaris@gmail.com">ecoplainsafaris@gmail.com</a>
              </div>
              <div className="contact-page__info-item">
                <h3>Phone</h3>
                <a href="tel:+25469122507">+254 691 225 07</a>
              </div>
              <div className="contact-page__info-item">
                <h3>Office</h3>
                <p>Comet Mall, Monrovia Street, 1st Floor, Nairobi, Kenya</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className="contact-page__right"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Natural Language Fields */}
              <div className="contact-form__field">
                <label htmlFor="destination">I'm dreaming of...</label>
                <select
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a destination</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Botswana">Botswana</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                  <option value="Multi-country">Multi-country</option>
                </select>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="duration">For about...</label>
                  <select
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Days</option>
                    <option value="3-5">3-5 days</option>
                    <option value="6-8">6-8 days</option>
                    <option value="9-12">9-12 days</option>
                    <option value="13+">13+ days</option>
                  </select>
                </div>

                <div className="contact-form__field">
                  <label htmlFor="travelers">Traveling with...</label>
                  <select
                    id="travelers"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    required
                  >
                    <option value="">People</option>
                    <option value="Solo">Solo</option>
                    <option value="2">2 people</option>
                    <option value="3-4">3-4 people</option>
                    <option value="5-8">5-8 people</option>
                    <option value="9+">9+ people</option>
                  </select>
                </div>
              </div>

              <div className="contact-form__field">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="email">Your email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="message">Anything else? (optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Special requests, dietary requirements, specific interests..."
                  rows="4"
                />
              </div>

              <button type="submit" className="contact-form__submit" disabled={isLoading}>
                {isLoading ? "Sending Your Dream Brief..." : "Send My Dream Brief"}
              </button>
            </form>

            {/* Success Overlay */}
            {submitted && (
              <motion.div
                className="contact-form__success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <svg viewBox="0 0 50 50" className="contact-form__success-icon">
                  <circle cx="25" cy="25" r="24" fill="none" stroke="var(--color-accent)" strokeWidth="2" />
                  <path d="M14 27l7 7 15-15" fill="none" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <h3>Thank you!</h3>
                <p>We'll be in touch within 24 hours.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}