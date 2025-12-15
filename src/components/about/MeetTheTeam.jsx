// src/components/about/MeetTheTeam.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import './MeetTheTeam.css';

const team = [
  {
    name: 'Jane Doe',
    role: 'Founder & CEO',
    image: '/images/team-sarah.jpg',
    bio: 'Two decades of safari expertise, conservation advocate, wildlife photographer.'
  },
  {
    name: 'John Doe',
    role: 'Head Safari Guide',
    image: '/images/team-james.jpg',
    bio: 'Master naturalist with 15 years tracking the Big Five across East Africa.'
  },
  {
    name: 'Sarah Smith',
    role: 'Conservation Director',
    image: '/images/team-amara.jpg',
    bio: 'PhD in Wildlife Ecology, leading our community empowerment initiatives.'
  },
  
];

export default function MeetTheTeam() {
  return (
    <section id="team" className="meet-the-team">
      <div className="meet-the-team__container">
        <SectionTitle centered>The Eco Plains Family</SectionTitle>

        <div className="meet-the-team__grid">
          {team.map((member, index) => (
            <motion.article
              key={index}
              className="team-card"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <div className="team-card__image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-card__image"
                  loading="lazy"
                />
                <div className="team-card__overlay" />
                <div className="team-card__content">
                  <h3 className="team-card__name">{member.name}</h3>
                  <p className="team-card__role">{member.role}</p>
                </div>
              </div>
              <p className="team-card__bio">{member.bio}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}