// src/pages/HomePage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import FeaturedSafarisCarousel from '../components/home/FeaturedSafarisCarousel';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import SectionDivider from '../components/common/SectionDivider';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Eco Plains Safaris - Luxury African Safari Experiences</title>
        <meta name="description" content="Discover unforgettable luxury safari experiences across East Africa. Expert-curated journeys through Kenya, Tanzania, Rwanda, and beyond." />
        <meta property="og:title" content="Eco Plains Safaris - Luxury African Safari Experiences" />
        <meta property="og:description" content="Discover unforgettable luxury safari experiences across East Africa." />
        <meta property="og:image" content="/og-image-home.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <FeaturedDestinations />
      <SectionDivider />
      <FeaturedSafarisCarousel />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <WhyChooseUs />
    </>
  );
}