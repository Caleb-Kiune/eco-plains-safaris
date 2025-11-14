// src/components/about/OurStory.jsx
import React, { useEffect, useRef } from 'react';
import './OurStory.css';

export default function OurStory() {
  const sectionRef = useRef(null);

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

    return () => {
      observer.unobserve(currentSection);
    };
  }, []);

  return (
    <section
      className="our-story"
      ref={sectionRef}
      aria-labelledby="our-story-heading"
    >
      <div className="our-story__container">
        {/* Headline */}
        <h2 id="our-story-heading" className="our-story__headline">
          Our Story
        </h2>

        {/* Decorative Accent Line */}
        <div className="our-story__accent"></div>

        {/* Story Content – 4 short, elegant paragraphs */}
        <div className="our-story__content">
          <p className="our-story__paragraph">
            Eco Plains Safaris was born from a profound reverence for Africa’s vast plains — where the golden light of dawn meets the endless rhythm of migration. Founded in 2018 by Dr. Amina Kiptoo, a Maasai conservationist with a PhD in wildlife ecology, our journey began with a simple yet powerful vision: to protect the wild while indulging the soul.
          </p>

          <p className="our-story__paragraph">
            Growing up beneath the shadow of Mount Kenya, Amina witnessed the delicate balance between human progress and nature’s heartbeat. She saw luxury not as excess, but as a force for good — one that could fund rangers, empower communities, and preserve the untouched wilderness for generations.
          </p>

          <p className="our-story__paragraph">
            Today, every safari is a collaboration with local Maasai elders, artisans, and guardians of the land. We channel <strong>15% of every booking directly into conservation and community projects</strong> — from anti-poaching patrols to women-led beekeeping cooperatives.
          </p>

          <p className="our-story__paragraph">
            This is more than travel. It’s a legacy. When you journey with Eco Plains, you don’t just witness the wild — you become part of its future.
          </p>
        </div>
      </div>
    </section>
  );
}