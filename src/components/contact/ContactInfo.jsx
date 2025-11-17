// src/components/contact/ContactInfo.jsx
import { motion } from "framer-motion";
import "./ContactInfo.css";

import { Phone, Mail, MapPin } from "lucide-react"; // Optional: npm install lucide-react

export default function ContactInfo() {
  const contactItems = [
    {
      icon: <Phone className="info-icon" aria-hidden="true" />,
      label: "Phone & WhatsApp",
      value: "+254 712 345 678",
      link: "tel:+254712345678",
      aria: "Call or WhatsApp us at +254 712 345 678"
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
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 300 }}
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