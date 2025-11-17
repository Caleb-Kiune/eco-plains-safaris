// src/pages/AboutPage.jsx
import React from 'react';
import AboutHero from '../components/about/AboutHero';
import VisionMission from '../components/about/VisionMission';
import OurStory from '../components/about/OurStory';
import './AboutPage.css';
import MeetTheTeam from '../components/about/MeetTheTeam';

export default function AboutPage() {
  return (
    <main className="about-page">
      <AboutHero />
      <VisionMission />
      <OurStory />
      <MeetTheTeam />

    
    </main>
  );
}