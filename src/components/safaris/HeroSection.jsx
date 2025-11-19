// src/components/safaris/HeroSection.jsx
import { motion } from "framer-motion";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Video or placeholder background */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="https://via.placeholder.com/1920x1080/111111/ffffff?text=Eco+Plains+Safaris"
      >
        <source src="/black-tomato-mob-home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hero-text"
        >
          <h1 className="hero-heading">
            Discover Extraordinary<br />Safaris Across Kenya
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="hero-subtitle"
          >
            Eco-conscious adventures across Africa’s wildest landscapes
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="hero-buttons"
          >
            <a href="/safaris" className="btn-primary">
              Explore Safaris
            </a>
            <a href="/contact" className="btn-secondary">
              Custom Itinerary
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Spacer to prevent FilterBar overlap */}
      <div className="hero-spacer" />
    </section>
  );
}
