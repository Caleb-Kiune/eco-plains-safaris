// src/components/TripsCarousel.jsx
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './TripsCarousel.css';

/**
 * Fetches trip data from API with fallback to local JSON.
 * @param {string} apiUrl - Primary API endpoint
 * @param {string} fallbackUrl - Local JSON file
 * @returns {Promise<Array>} Array of trip objects
 */
async function getTrips(apiUrl = '/api/trips', fallbackUrl = '/data/trips.json') {
  try {
    // Try primary API first
    const apiResponse = await fetch(apiUrl);
    if (apiResponse.ok) {
      const data = await apiResponse.json();
      if (Array.isArray(data)) return data;
    }
    console.warn(`API ${apiUrl} failed or invalid. Falling back to local data.`);
  } catch (err) {
    console.warn(`API fetch error:`, err);
  }

  // Fallback to local JSON
  try {
    const fallbackResponse = await fetch(fallbackUrl);
    if (fallbackResponse.ok) {
      const data = await fallbackResponse.json();
      if (Array.isArray(data)) return data;
    }
  } catch (err) {
    console.error(`Fallback ${fallbackUrl} failed:`, err);
  }

  return []; // Return empty on both failures
}

export default function TripsCarousel() {
  // State management
  const [trips, setTrips] = useState([]);           // Fetched trip data
  const [loading, setLoading] = useState(true);     // Loading indicator
  const [error, setError] = useState(null);         // Error message

  // Fetch trips on mount
  useEffect(() => {
    let isMounted = true;

    const fetchTrips = async () => {
      setLoading(true);
      setError(null);

      const data = await getTrips();

      if (isMounted) {
        setTrips(data);
        setLoading(false);
        if (data.length === 0) {
          setError('No trips available at the moment.');
        }
      }
    };

    fetchTrips();

    // Cleanup to prevent state updates after unmount
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="trips-section" className="trips-section" aria-label="Explore our safari trips">
      <div className="trips-container">
        <header className="trips-header">
          <h2 className="trips-headline">Explore Our Trips</h2>
          <p className="trips-subheadline">
            Discover unforgettable safari adventures across East Africa, blending luxury, wildlife, and culture.
          </p>
        </header>

        {/* Loading State */}
        {loading && (
          <div className="trips-status" aria-live="polite">
            <p>Loading trips...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="trips-status trips-status--error" aria-live="assertive">
            <p>{error}</p>
          </div>
        )}

        {/* Trips Carousel */}
        {!loading && !error && trips.length > 0 && (
          <Swiper
            spaceBetween={32}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            keyboard={{ enabled: true }}
            mousewheel={{ forceToAxis: true }}
            breakpoints={{
              640: { slidesPerView: 1.3, spaceBetween: 20 },
              768: { slidesPerView: 2.2, spaceBetween: 24 },
              1024: { slidesPerView: 3.1, spaceBetween: 32 },
            }}
            className="trips-swiper"
          >
            {trips.map((trip, index) => (
              <SwiperSlide key={trip.id || index}>
                <article className="trip-card">
                  <a
                    href={trip.link}
                    className="trip-link"
                    aria-label={`View details for ${trip.title}`}
                  >
                    <div
                      className="trip-image"
                      style={{ backgroundImage: `url(${trip.imageUrl})` }}
                    >
                      <div className="trip-overlay"></div>

                      {/* Bottom-Aligned Text Stack */}
                      <div className="trip-content-stack">
                        <div className="trip-text-content">
                          <h3 className="trip-title">{trip.title}</h3>
                          <div className="trip-reveal">
                            <p className="trip-description">{trip.shortDescription}</p>
                            <p className="trip-price">{trip.price}</p>
                          </div>
                        </div>
                      </div>

                      <button className="trip-explore" aria-label="Explore this trip">
                        Explore
                      </button>
                    </div>
                  </a>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Empty State */}
        {!loading && !error && trips.length === 0 && (
          <div className="trips-status" aria-live="polite">
            <p>No trips available at this time. Please check back later.</p>
          </div>
        )}
      </div>
    </section>
  );
}