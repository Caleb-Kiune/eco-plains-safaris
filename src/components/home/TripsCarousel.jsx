// /src/components/home/TripsCarousel.jsx
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './TripsCarousel.css';

export default function TripsCarousel() {
  const [featuredTrips, setFeaturedTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/safaris.json')
      .then(res => res.json())
      .then(data => {
        const featured = data.filter(trip => trip.featured);
        setFeaturedTrips(featured);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load trips:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: 'center', margin: '2rem' }}>Loading trips...</p>;
  if (!featuredTrips.length) return null;

  return (
    <section className="trips-carousel" aria-label="Featured Safaris">
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {featuredTrips.map(trip => (
          <SwiperSlide key={trip.id}>
            <a href={trip.link} className="trip-card">
              <img src={trip.image} alt={trip.title} className="trip-image" />
              <h3 className="trip-title">{trip.title}</h3>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
