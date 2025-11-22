// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import FeaturedSafarisCarousel from '../components/home/FeaturedSafarisCarousel';
import WhyChooseUs from '../components/home/WhyChooseUs';
import SectionDivider from '../components/common/SectionDivider';

export default function HomePage() {
  return (
    <>
     
      <HeroSection />
      <SectionDivider/>
      <AboutSection />
      <SectionDivider/>
      <FeaturedDestinations />
      <SectionDivider/>
      <FeaturedSafarisCarousel />
      <SectionDivider/>
      <WhyChooseUs />
    </>
  );
}