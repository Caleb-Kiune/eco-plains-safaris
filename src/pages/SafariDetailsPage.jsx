// src/pages/SafariDetailsPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SafariHero from '../components/safaris/details/SafariHero';
// import './SafariDetailsPage.css'; 

export default function SafariDetailsPage() {
  const { slug } = useParams();
  const [safari, setSafari] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/safaris.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(s => 
          s.link && s.link.replace('/safaris/', '') === slug
        );
        setSafari(found);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load safari:', err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div style={{ padding: '6rem 2rem', textAlign: 'center', fontSize: '1.4rem' }}>
        Loading your safari...
      </div>
    );
  }

  if (!safari) {
    return (
      <div style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h1>Safari not found</h1>
        <Link to="/safaris" style={{ color: '#C8A36A', textDecoration: 'none', fontWeight: '600' }}>
          ← Back to All Safaris
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Back link */}
      <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
        <Link 
          to="/safaris"
          style={{
            color: '#C8A36A',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: '500',
            display: 'inline-block',
            padding: '0.5rem 0'
          }}
        >
          ← All Safaris
        </Link>
      </div>

      {/* Luxury Hero */}
      <SafariHero safari={safari} />

      {/* Placeholder for full content — you’ll add gallery, highlights, etc. */}
      <section style={{ padding: '6rem 2rem', background: '#FAF7F2', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.8rem', color: '#1a1a1a', marginBottom: '1rem' }}>
            {safari.title}
          </h1>
          <p style={{ fontSize: '1.6rem', color: '#666', marginBottom: '2rem' }}>
            {safari.location}
          </p>
          <p style={{ fontSize: '2.2rem', color: '#C8A36A', fontWeight: '700' }}>
            From ${safari.price.toLocaleString()} per person
          </p>
          {safari.description && (
            <p style={{ marginTop: '3rem', fontSize: '1.2rem', lineHeight: '1.9', color: '#555' }}>
              {safari.description}
            </p>
          )}
        </div>
      </section>
    </>
  );
}