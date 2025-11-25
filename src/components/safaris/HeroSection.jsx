// src/components/safaris/HeroSection.jsx
import React from 'react';
import LuxuryHero from '../common/LuxuryHero';

export default function HeroSection() {
  return (
    <LuxuryHero
      title="Discover Your Dream Safari"
      subtitle="Eco-conscious adventures across Africa's wildest landscapes"
      backgroundVideo="/black-tomato-mob-home.mp4"
      ctaText="Explore All Safaris"
      ctaLink="/safaris"
      align="left"
    />
  );
}
