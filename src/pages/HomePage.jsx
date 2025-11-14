// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturedDestinations from '../components/FeaturedDestinations';
import TripsCarousel from '../components/TripsCarousel';
import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <FeaturedDestinations />
      <TripsCarousel />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
