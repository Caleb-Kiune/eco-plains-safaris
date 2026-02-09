// src/pages/HomePage.jsx
import React, { Suspense, lazy } from 'react';
import SEO from '../components/common/SEO';
import HeroSection from '../components/home/HeroSection';
import SectionDivider from '../components/common/SectionDivider';

// Lazy load below-the-fold content to reduce TBT and LCP
const AboutSection = lazy(() => import('../components/home/AboutSection'));
const FeaturedDestinations = lazy(() => import('../components/home/FeaturedDestinations'));
const FeaturedSafarisCarousel = lazy(() => import('../components/home/FeaturedSafarisCarousel'));
const WhyChooseUs = lazy(() => import('../components/home/WhyChooseUs'));
const Testimonials = lazy(() => import('../components/home/Testimonials'));

export default function HomePage() {
  return (
    <>
      <SEO>
        <title>Eco Plains Safaris - Luxury African Safari Experiences</title>
        <meta name="description" content="Discover unforgettable luxury safari experiences across East Africa. Expert-curated journeys through Kenya, Tanzania, Rwanda, and beyond." />
        <meta property="og:title" content="Eco Plains Safaris - Luxury African Safari Experiences" />
        <meta property="og:description" content="Discover unforgettable luxury safari experiences across East Africa." />
        <meta property="og:image" content="https://res.cloudinary.com/dy082ykuf/image/upload/v1769593458/eco-plains-safaris/meta/og_home.jpg" />
        <meta property="og:type" content="website" />
      </SEO>

      <HeroSection />

      <Suspense fallback={<div style={{ height: '500px', background: '#f9f9f9' }} />}>
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
      </Suspense>
    </>
  );
}