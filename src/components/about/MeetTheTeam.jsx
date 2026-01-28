import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import './MeetTheTeam.css';

const team = [
  {
    name: 'Evaline Agawo',
    role: 'Senior Safari Consultant',
    image: 'https://res.cloudinary.com/dy082ykuf/image/upload/c_fill,g_face,w_600,h_800/v1769592488/eco-plains-safaris/Evaline_Agawo.jpg',
    bio: 'Dedicated safari planner with deep knowledge of East African destinations and personalized itineraries.'
  },
  {
    name: 'The Field Team',
    role: 'Expert Guides & Trackers',
    image: 'https://res.cloudinary.com/dy082ykuf/image/upload/c_fill,g_auto,w_600,h_800/v1769592494/eco-plains-safaris/staff.jpg',
    bio: 'Our experienced on-ground guides and trackers ensuring safe and unforgettable wildlife encounters.'
  },
  {
    name: 'Safari Operations',
    role: 'Fleet & Logistics',
    image: 'https://res.cloudinary.com/dy082ykuf/image/upload/c_fill,g_auto,w_600,h_800/v1769592491/eco-plains-safaris/eco_plains_safari_car.jpg',
    bio: 'Our reliable 4x4 fleet and logistics team keeping every journey smooth and comfortable.'
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