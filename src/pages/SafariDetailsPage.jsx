// src/pages/SafariDetailsPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './SafariDetailsPage.css';

export default function SafariDetailsPage() {
  const { slug } = useParams();
  const [safari, setSafari] = useState(null);

  useEffect(() => {
    fetch('/data/safaris.json')
      .then(r => r.json())
      .then(data => {
        const found = data.tours.find(t => t.slug === slug);
        setSafari(found);
        if (found) document.title = `${found.title} | Eco Plains Safaris`;
      });
  }, [slug]);

  if (!safari) return <div className="py-32 text-center text-2xl">Loading your journey...</div>;

  const price = safari.price_adult
    ? new Intl.NumberFormat('en-US', { style: 'currency', currency: safari.currency || 'USD' }).format(safari.price_adult)
    : 'Rate on request';

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px]">
        <img src={safari.primaryImage} alt={safari.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
          <div className="max-w-7xl mx-auto">
            <Link to="/" className="inline-block mb-6 text-white/80 hover:text-white transition text-lg">
              ← All Journeys
            </Link>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-4">{safari.title}</h1>
            <p className="text-2xl mb-6 opacity-90">{safari.destination} • {safari.duration}</p>
            <div className="text-4xl md:text-5xl font-light">
              From <span className="font-bold text-gold">{price}</span>
              {safari.price_note && <span className="block text-lg mt-2 opacity-80">{safari.price_note}</span>}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Booking Bar */}
      <div className="sticky top-0 z-50 bg-white shadow-2xl py-5 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div>
            <span className="text-3xl font-bold text-gold">{price}</span>
            <span className="ml-6 text-gray-600 text-lg">{safari.price_note}</span>
          </div>
          <button className="bg-gold hover:bg-amber-600 text-black font-semibold px-12 py-5 rounded-full text-xl transition shadow-lg">
            Secure Your Journey
          </button>
        </div>
      </div>

      {/* Content */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-playfair mb-10">An Unforgettable Journey</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-12">
              Immerse yourself in the raw beauty of {safari.destination}. From sunrise game drives to champagne sunsets, every moment is crafted for wonder.
            </p>
            <div className="space-y-6">
              {safari.inclusions.slice(0, 6).map((inc, i) => (
                <div key={i} className="flex items-start">
                  <span className="text-gold text-3xl mr-5">✓</span>
                  <span className="text-lg text-gray-700">{inc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {safari.secondaryImages.map((img, i) => (
              <img key={i} src={img} alt="" className="w-full h-64 object-cover rounded-xl shadow-md" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}