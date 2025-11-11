// src/components/AboutSection.jsx
import React from 'react';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2 className="about-headline">Welcome to Eco Plains Safaris</h2>
          <p className="about-subheadline">
            Crafting unforgettable safari journeys across Africa’s wild plains
          </p>

          <p className="about-paragraph">
            At Eco Plains Safaris, we believe the soul of Africa lives in its vast, untamed plains. 
            With a deep-rooted passion for the bush, we design intimate, authentic experiences that 
            connect you to the land, its wildlife, and its people — always with respect, elegance, and purpose.
          </p>

          <p className="about-paragraph">
            Our bespoke itineraries blend luxury with sustainability. From private game drives led by 
            world-class guides to exclusive camps under star-filled skies, every journey is tailored 
            to your vision — immersive, conscious, and unforgettable.
          </p>

          <a href="#about" className="about-cta" aria-label="Learn more about Eco Plains Safaris">
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
}