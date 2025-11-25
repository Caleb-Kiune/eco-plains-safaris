// src/pages/AboutPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutHero from '../components/about/AboutHero';
import VisionMission from '../components/about/VisionMission';
import OurStory from '../components/about/OurStory';
import MeetTheTeam from '../components/about/MeetTheTeam';
import SectionDivider from '../components/common/SectionDivider';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - Eco Plains Safaris</title>
        <meta name="description" content="Discover the story behind Eco Plains Safaris. Two decades of passion for Africa's wilderness, conservation leadership, and luxury safari expertise." />
        <meta property="og:title" content="About Us - Eco Plains Safaris" />
        <meta property="og:description" content="Our story, vision, and team dedicated to transformative African safari experiences" />
        <meta property="og:image" content="/og-home.jpg" />
      </Helmet>

      <main className="about-page">
        <AboutHero />
        <SectionDivider />
        <VisionMission />
        <SectionDivider />
        <OurStory />
        <SectionDivider />
        <MeetTheTeam />
      </main>
    </>
  );
}