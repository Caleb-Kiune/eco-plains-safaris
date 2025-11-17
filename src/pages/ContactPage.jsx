// src/pages/ContactPage.jsx   (or src/app/contact/page.tsx)

import "./ContactPage.css";                      
import { motion } from "framer-motion";
// Real components
import ContactForm from "../components/contact/ContactForm";
import WorkingHours from "../components/contact/WorkingHours";  

export default function ContactPage() {
  return (
    <>
      {/* Floating WhatsApp Button – placeholder for now */}
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

              {/* Real Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <ContactForm />
              </motion.div>

              {/* Real Working Hours – now live! */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <WorkingHours />
              </motion.div>
            </div>

            {/* RIGHT COLUMN – still placeholders */}
            <div className="contact-right">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
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
    </>
  );
}

// ───────────────────────────────
// Placeholder Components (keep these – we’ll replace later)
// ───────────────────────────────
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