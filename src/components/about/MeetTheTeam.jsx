// src/components/about/MeetTheTeam.jsx
import React, { useEffect, useRef } from 'react';
import './MeetTheTeam.css';

export default function MeetTheTeam() {
  const sectionRef = useRef(null);

  // Intersection Observer for fade-in on scroll
  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(currentSection);

    return () => observer.unobserve(currentSection);
  }, []);

  const team = [
    {
      name: 'Director',
      role: 'Founder & Conservation Director',
      bio: 'An ecologist with a PhD in wildlife conservation, Amina blends scientific rigor with cultural wisdom to protect Africa’s wild heart.',
      alt: 'Director, Founder of Eco Plains Safaris'
    },
    {
      name: 'Team Leader',
      role: 'Head Guide & Storyteller',
      bio: 'Third-generation Maasai tracker with 25 years in the Mara. she brings ancient stories to life under starlit skies.',
      alt: 'Team Leader, Head Guide at Eco Plains Safaris'
    },
    {
      name: 'Team Member',
      role: 'Experience Curator',
      bio: 'From Paris luxury to African wilderness, she designs flawless, soul-stirring journeys for the discerning traveler.',
      alt: 'Team member, Experience Curator at Eco Plains Safaris'
    }
  ];

  return (
    <section
      className="meet-team"
      ref={sectionRef}
      aria-labelledby="meet-team-heading"
    >
      <div className="meet-team__container">
        {/* Section Headline */}
        <h2 id="meet-team-heading" className="meet-team__headline">
          Meet the Team
        </h2>

        {/* Subheadline */}
        <p className="meet-team__subheadline">
          The minds behind Eco Plains Safaris, passionate about conservation and luxury travel.
        </p>

        {/* Team Grid */}
        <div className="meet-team__grid">
          {team.map((member, index) => (
            <article
              key={index}
              className="meet-team__card"
              tabIndex="0"
              aria-label={`${member.name}, ${member.role}`}
            >
              {/* Portrait */}
              <div className="meet-team__portrait-wrapper">
                <img
                  src="/kenya-destination-image.jpg"
                  alt={member.alt}
                  className="meet-team__portrait"
                />
                <div className="meet-team__portrait-overlay"></div>
              </div>

              {/* Content */}
              <div className="meet-team__content">
                <h3 className="meet-team__name">{member.name}</h3>
                <p className="meet-team__role">{member.role}</p>
                <p className="meet-team__bio">{member.bio}</p>
              </div>

              {/* Gold Accent Line */}
              <div className="meet-team__accent"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}