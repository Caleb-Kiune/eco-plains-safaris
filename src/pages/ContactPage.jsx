// src/pages/ContactPage.jsx
import React from 'react';
import { motion } from "framer-motion";
import "./ContactPage.css";

// Real components only — no placeholders, no duplicates
import ContactForm from "../components/contact/ContactForm";
import WorkingHours from "../components/contact/WorkingHours";
import MapEmbed from "../components/contact/MapEmbed";
import ContactInfo from "../components/contact/ContactInfo";
import SocialLinks from "../components/contact/SocialLinks";

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="contact-header"
        >
          <h1 className="contact-title">Start Your Journey</h1>
          <p className="contact-subtitle">
            We craft bespoke Kenyan safari experiences with care and authenticity.
            Reach out — we reply within hours.
          </p>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="contact-grid">

          {/* LEFT COLUMN */}
          <div className="contact-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <WorkingHours />
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="contact-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <MapEmbed />
            </motion.div>

            <div className="contact-right-bottom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <ContactInfo />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <SocialLinks />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}