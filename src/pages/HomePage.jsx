// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import TripsCarousel from '../components/home/TripsCarousel';
import WhyChooseUs from '../components/home/WhyChooseUs';

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