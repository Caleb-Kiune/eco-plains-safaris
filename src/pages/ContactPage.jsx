// src/app/contact/page.tsx   (or components/ContactPage.jsx)

import "./contact.css";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <>
      {/* Floating WhatsApp Button – will be added later */}
      <WhatsAppButton />

      <section className="contact-page">
        <div className="contact-container">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="contact-header"
          >
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-subtitle">
              We craft bespoke Kenyan safari experiences with care and authenticity.
              Reach out — we reply within hours.
            </p>
          </motion.div>

          {/* Main Grid Layout */}
          <div className="contact-grid">

            {/* LEFT COLUMN */}
            <div className="contact-left">
              {/* Contact Form Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <ContactForm />
              </motion.div>

              {/* Working Hours Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <WorkingHours />
              </motion.div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="contact-right">
              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <MapEmbed />
              </motion.div>

              {/* Contact Info + Social Links */}
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
    </>
  );
}

// ──────────────────────────────────
// Placeholder Components (to be built next)
// ──────────────────────────────────
function ContactForm() {
  return (
    <div className="placeholder-card">
      <h2 className="placeholder-title">Send Us a Message</h2>
      <div className="placeholder-form">
        <div className="placeholder-input" />
        <div className="placeholder-input" />
        <div className="placeholder-input" />
        <div className="placeholder-input" style={{ height: "100px" }} />
        <div className="placeholder-button">Submit Message</div>
      </div>
    </div>
  );
}

function WorkingHours() {
  return (
    <div className="placeholder-card">
      <h3 className="placeholder-subtitle">We’re Here for You</h3>
      <div className="placeholder-line" />
      <div className="placeholder-line short" />
      <div className="placeholder-line" />
      <p className="placeholder-note">Replies within 2 hours during operating times</p>
    </div>
  );
}

function MapEmbed() {
  return <div className="placeholder-map">Interactive Google Map Embed</div>;
}

function ContactInfo() {
  return (
    <div className="placeholder-card">
      <h3 className="placeholder-subtitle">Contact Details</h3>
      <div className="placeholder-line" />
      <div className="placeholder-line" />
      <div className="placeholder-line short" />
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="placeholder-card">
      <h3 className="placeholder-subtitle">Follow Our Journey</h3>
      <div className="placeholder-social-icons">
        <div className="placeholder-icon" />
        <div className="placeholder-icon" />
      </div>
    </div>
  );
}

function WhatsAppButton() {
  return <div className="whatsapp-placeholder">WhatsApp Floating Button</div>;
}