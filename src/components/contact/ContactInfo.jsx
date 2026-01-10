// src/components/contact/ContactInfo.jsx
import { motion } from "framer-motion";
import "./ContactInfo.css";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_INFO } from '../../utils/contact';

export default function ContactInfo() {
  const contactItems = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
      label: "Phone",
      value: CONTACT_INFO.phoneDisplay,
      link: CONTACT_INFO.phoneLink,
      aria: `Call or WhatsApp us at ${CONTACT_INFO.phoneDisplay} `
    },
    {
      icon: <Mail className="info-icon" aria-hidden="true" />,
      label: "Email",
      value: "hello@ecoplainsafaris.com",
      link: "mailto:hello@ecoplainsafaris.com",
      aria: "Email us at hello@ecoplainsafaris.com"
    },
    {
      icon: <MapPin className="info-icon" aria-hidden="true" />,
      label: "Office Address",
      value: "Westlands Road, Nairobi, Kenya",
      link: "https://maps.google.com/maps?q=Westlands+Nairobi+Kenya",
      aria: "View our office location in Westlands, Nairobi"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="contact-info"
      aria-labelledby="contact-info-title"
    >
      <h3 id="contact-info-title" className="contact-info-title">
        Contact Details
      </h3>

      <ul className="contact-info-list">
        {contactItems.map((item, index) => (
          <motion.li
            key={index}
            className="info-item"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="info-icon-wrapper">
              {item.icon}
            </div>

            <div className="info-content">
              <span className="info-label">{item.label}</span>
              <a
                href={item.link}
                target={item.label === "Office Address" ? "_blank" : undefined}
                rel={item.label === "Office Address" ? "noopener noreferrer" : undefined}
                className="info-link"
                aria-label={item.aria}
              >
                {item.value}
              </a>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}