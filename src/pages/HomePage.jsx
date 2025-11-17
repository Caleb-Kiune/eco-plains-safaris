// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturedDestinations from '../components/FeaturedDestinations';
import TripsCarousel from '../components/TripsCarousel';
import WhyChooseUs from '../components/WhyChooseUs';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedDestinations />
      <TripsCarousel />
      <WhyChooseUs />
    </>
  );
}