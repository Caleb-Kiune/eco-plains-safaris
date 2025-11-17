// src/components/contact/MapEmbed.jsx
import { motion } from "framer-motion";
import "./MapEmbed.css";

export default function MapEmbed() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="map-embed"
      aria-label="Eco Plains Safaris office location on Google Maps"
    >
      <h3 className="map-title">Our Location</h3>

      <div className="map-container">
        <iframe
          title="Eco Plains Safaris Office – Nairobi, Kenya"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.821331457643!2d36.821946314753!3d-1.282330835496328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768! Joshua 4f!3m3!1m2!1s0x182f1100e35df5a9%3A0xbecf8e9a8e6e8e8e!2sEco%20Plains%20Safaris!5e0!3m2!1sen!2ske!4v1698765432100!5m2!1sen!2ske"
          width="100%"
          height="480"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="map-footer">
        <a
          href="https://maps.google.com/maps?q=Eco+Plains+Safaris,+Nairobi,+Kenya&z=17"
          target="_blank"
          rel="noopener noreferrer"
          className="map-link"
        >
          View Larger Map
        </a>
      </div>
    </motion.section>
  );
}