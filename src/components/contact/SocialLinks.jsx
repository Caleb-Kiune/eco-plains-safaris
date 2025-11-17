// src/components/contact/SocialLinks.jsx
import { motion } from "framer-motion";
import "./SocialLinks.css";

import { Instagram, Facebook, Linkedin } from "lucide-react"; // npm install lucide-react

export default function SocialLinks() {
  const socials = [
    {
      name: "Instagram",
      icon: <Instagram className="social-icon-svg" aria-hidden="true" />,
      url: "https://instagram.com/ecoplainsafaris",
      label: "Follow us on Instagram"
    },
    {
      name: "Facebook",
      icon: <Facebook className="social-icon-svg" aria-hidden="true" />,
      url: "https://facebook.com/ecoplainsafaris",
      label: "Like us on Facebook"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="social-icon-svg" aria-hidden="true" />,
      url: "https://linkedin.com/company/eco-plains-safaris",
      label: "Connect with us on LinkedIn"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.6 }}
      className="social-links"
      aria-labelledby="social-links-title"
    >
      <h3 id="social-links-title" className="social-links-title">
        Follow Our Journey
      </h3>

      <div className="social-links-container">
        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={social.label}
            whileHover={{ y: -6, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="social-icon-wrapper">
              {social.icon}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}